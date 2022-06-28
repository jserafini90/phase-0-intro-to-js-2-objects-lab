const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway'
}

function updateEmployeeWithKeyAndValue(employee, streetAddress, newAddress) {
    const newEmployee = {...employee};
    newEmployee[streetAddress] = newAddress;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress, newAddress){
    employee[streetAddress] = newAddress;
    return employee;
}

function deleteFromEmployeeByKey(employee, name){
    const newEmployee = {...employee};
    delete newEmployee[name];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, name){
    delete employee.name;
    return employee;
}