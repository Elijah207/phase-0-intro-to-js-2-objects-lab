// Write your solution in this file!
const employee = {
    name: "Max",
    streetAddress: "5 Main Street",
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    let newObj = {...employee}
    newObj[key] = value  
    return newObj
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee [key] = value; //Why are we using bracket notation here?

  return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    let newObj = {...employee}
    delete newObj[key]
    return newObj
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee [key]
    return employee
}