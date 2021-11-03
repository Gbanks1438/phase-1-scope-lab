var customerName = "bob";
const leastFavoriteCustomer = "definetly bob";

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}
function setBestCustomer() {
    bestCustomer = "not bob";
}
function overwriteBestCustomer() {
    bestCustomer = "maybe bob";
}
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "uncertianly bob";
}
console.log(leastFavoriteCustomer);