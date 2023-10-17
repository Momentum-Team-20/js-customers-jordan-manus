let customerContainer = document.getElementsByClassName('.customerContainer');
if(customerContainer){
  console.log('success');
} else {
  console.log('fail')
}

function quickList(customerArray){
  for (let customer of customerArray) {
    console.log(`this is: ${customer.name.first} ${customer.name.last}`);
    console.log(customer.name.first);
    }
    // console.log(`this is for ${customer['name']}`);
    // console.log(`this is their email: ${customer['email']}`);
  }


function buildCustomers(customerArray) {
  for (let customer in customers) {
    let box = document.createElement('div');
    box.classList.add('customer');
    let customerName = document.createElement('h2');
    customerName.innerText =   `Name: ${customer.name.title}  ${customer.name.first}  ${customer.name.last}`;
    // customerName.innerText = 'hello';
    box.appendChild(customerName);
    customerContainer.appendChild(box);
    // customerContainer.appendChild(customerName)
  }
}

quickList(customers);
buildCustomers(customers);