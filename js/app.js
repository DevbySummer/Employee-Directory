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
        let ciy = employee.location.city;
        let picture = employee.picture;

        employeeHTML += `
            <div class="card" data-index="${index}">
                <img class="avatar src="${picture.large}"/>
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