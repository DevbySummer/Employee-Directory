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
fetch(`https://randomuser.me/api/?results=12&inc=name, picture,
email, location, phone, dob &noinfo &nat=US`)
    .then(response => response.json())
    .then(response => response.results)
    .then(displayEmployees)
    .catch(err => console.log(err))