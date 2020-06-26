$(document).ready(onReady);
const employees = [];

console.log('js');

function addEmployee(event) {
  event.preventDefault();

  console.log('submit');

  const employee = {
    firstName: $('#js-input-firstName').val(),
    lastName: $('#js-input-lastName').val(),
    idNumber: $('#js-input-idNumber').val(),
    jobTitle: $('#js-input-jobTitle').val(),
    salary: $('#js-input-salary').val(),
  };
  $('#js-input-firstName').val('');
  $('#js-input-lastName').val('');
  $('#js-input-idNumber').val('');
  $('#js-input-jobTitle').val('');
  $('#js-input-salary').val('');

  employees.push(employee);
  console.table(employees);
}

function onReady() {
  console.log('jQuery');
  $('#js-form-addSalary').on('submit', addEmployee);

  render();
}

function render() {
  for (let employee of employees) {
    $('#js-table-body').append(`
    <tr>
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.idNumber}</td>
        <td>${employee.jobTitle}</td>
        <td>${employee.salary}</td>
        <td><button class="js-btn-delete btn btn-danger float-right">X</button></td>
    </tr>
`);
  }
}
