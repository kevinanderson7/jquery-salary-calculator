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
  if (
    employee.idNumber == '' ||
    employee.salary == '' ||
    employee.firstName == '' ||
    employee.lastName == '' ||
    employee.jobTitle == ''
  ) {
    alert('Please fill in missing fields');
  } else {
    $('#js-input-firstName').val('');
    $('#js-input-lastName').val('');
    $('#js-input-idNumber').val('');
    $('#js-input-jobTitle').val('');
    $('#js-input-salary').val('');

    employees.push(employee);
    console.table(employees);
    render();
  }
}

function deleteRow() {
  //console.log('woof');
  $(this).parent().parent().remove();
  //   let val = $(this).closest('tr').find('.firstName').text();
  //   console.log(val);
  //   let index = employees.findIndex(function (item) {
  //     return item.name == val;
  //   });
  //   console.log(index);
  //   employees.splice(index, 1);
  //   console.log(employees);
  //   render();
  let val = $(this).parent().parent().find('.idNumber').text();
  let index = employees.findIndex(function (employees) {
    return employees.idNumber == val;
  });
  console.log(val);
  employees.splice(index, 1);
  console.log(employees);
  render();
}

function onReady() {
  console.log('jQuery');
  $('#js-form-addSalary').on('submit', addEmployee);
  $('#js-table-body').on('click', '.js-btn-delete', deleteRow);

  render();
}

function render() {
  $('#js-table-body').empty();

  let totalMonthlyCost = 0;

  for (let employee of employees) {
    totalMonthlyCost += parseInt(employee.salary) / 12;
    $('#js-table-body').append(`
    <tr>
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td class="idNumber">${employee.idNumber}</td>
        <td>${employee.jobTitle}</td>
        <td>${employee.salary}</td>
        <td><button class="js-btn-delete btn btn-danger float-right">X</button></td>
    </tr>
`);
  }

  if (totalMonthlyCost > 20000) {
    $('#totalMonthlyCostContainer').addClass('redBackground');
  } else {
    $('#totalMonthlyCostContainer').removeClass('redBackground');
  }
  $('#totalMonthlyCost').text(`Total Monthly Cost: $${totalMonthlyCost}`);
}
