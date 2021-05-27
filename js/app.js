// Global variables
let employees = []; /** holds value of API */
const urlAPI = `https://randomuser.me/api/?results=12&inc=name, picture,
email, location, phone, dob &noinfo &nat=US`; /** url of the API */
const gridContainer = document.querySelector('.grid-container'); /** container for the employees */
const overlay = document.querySelector('.overlay'); /** overlay for the modal */
const modalContainer = document.querySelector('.modal-content'); /** container for the modal
information. */
const modalClose = document.querySelector('.modal-close'); /**  modal’s close button */

// Fetch
fetch(urlAPI)
    .then(response => response.json())
    .then(response => response.results)
    .then(displayEmployees)
    .catch(err => console.log(err))

// Display employees
function displayEmployees(employeeData) {
    employees = employeeData;
    employeeHTML = '';

    employees.forEach((employee, index) => {
        let name = employee.name;
        let email = employee.email;
        let city = employee.location.city;
        let picture = employee.picture;

        employeeHTML += `
            <div class="card" data-index="${index}">
                <img class="avatar" src="${picture.large}"/>
                <div class="text-container">
                    <h2 class="name">${name.first} ${name.last}</h2>
                    <p class="email">${email}</p>
                    <p class="address">${city}</p>
                </div>
            </div>
        `
    });

        gridContainer.innerHTML = employeeHTML;

}
// Display Modal
function displayModal(index) {
    // let { name, dob, phone, email, location: { city, street, state, postcode}, picture } = employees[index];
    // let date = new Date(dob.date);

    let picture = employees[index].picture.large;
    let firstName = employees[index].name.first;
    let lastName = employees[index].name.last;
    let email = employees[index].email;
    let city = employees[index].location.city;
    let phone = employees[index].phone;
    let streetNumber = employees[index].location.street.number;
    let streetName = employees[index].location.street.name;
    let state = employees[index].location.state;
    let postCode = employees[index].location.postcode;
    // let dob = employees[index].dob.date;

    // let​ date = ​new​​Date​(employees[index].dob.date);

    let date = new Date(Date.parse(employees[index].dob.date)).toLocaleDateString(navigator.language);

    const modalHTML = `
        <img class="avatar"  src="${picture}"/>
        <div class="text-container">
            <h2 class="name">${firstName} ${lastName}</h2>
            <p class="email">${email}</p>
            <p class="address">${city}</p>
            <hr />
            <p>${phone}</p>
            <p class="address">${streetNumber} ${streetName}, ${state} ${postCode}</p>
            <p>Birthday: 
            ${date.getMonth()}/${date.getDate()}/${date.getFullYear()}</p>
        </div>
    `

    overlay.classList.remove('hidden');
    modalContainer.innerHTML = modalHTML;
}
// Event Listener for gridContainer
gridContainer.addEventListener('click', e => {

    if(e.target !== gridContainer) {
        const card = e.target.closest('.card');
        const index = card.getAttribute('data-index');

        displayModal(index);
    }
});
// Event Listener modalClose
modalClose.addEventListener('click', () => {
    overlay.classList.add('hidden');
})