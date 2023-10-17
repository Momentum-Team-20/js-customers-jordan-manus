let customerContainer = document.querySelector('.customerContainer');

function buildCustomers(customers) {
  for (let customer in customers) {
    let box = document.createElement('div');
    box.classList.add('customer');
    let customerName = document.createElement('h2');
    customerName.innerText = customer.name;
    box.appendChild(customerName);
    customerContainer.appendChild(box);
  }
}

buildCustomers(customers);