let customerContainer = document.querySelector('.customerContainer');
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
  }


function buildCustomers(customerArray, usStates) {
  for (let customer of customers) {
    let box = document.createElement('div');
    box.classList.add('customer');
    if (box.classList.contains('customer')){
      console.log('true')
    } else { console.log('false')};

    // adds photo
    let photo = document.createElement('img');
    photo.src = customer.picture.large;
    photo.alt = 'customer image';
    box.appendChild(photo);

    // creates customer name
    let customerName = document.createElement('h4');
    customerName.innerText = `${customer.name.title} ${customer.name.first}  ${customer.name.last}`;
    // adds name to customer box
    box.appendChild(customerName);
    // adds name to customer conatainer
    customerContainer.appendChild(box);
    // addThings(box, customerName);

    // adds email
    let customerEmail = document.createElement('p');
    customerEmail.innerText = customer.email;
    box.appendChild(customerEmail);
    customerContainer.appendChild(box);

    // adds address
    let address = document.createElement('address');
    address.innerText = `${customer.location.street.number} ${customer.location.street.name} ${customer.location.city} ${nameToAbbr(customer.location.state)} ${customer.location.postcode}`;
    box.appendChild(address);
    customerContainer.appendChild(box);

    // adds date of birth
    let dob = document.createElement('div');
    dob.innerText = `DOB: ${moment(customer.dob.date).format('LL')}`;
    box.appendChild(dob);
    customerContainer.appendChild(box);

    // adds customer since
    let customerSince = document.createElement('div');
    customerSince.innerText = `Customer since: ${moment(customer.registered.date).format('LL')}`;
    box.appendChild(customerSince);
    customerContainer.appendChild(box);
  }
}

function addThings(box, element) {
  if (box.classList.contains('customer')){
    console.log('true inside function')
  } else { console.log('false inside function')};
  box.appendChild(element);
  customerContainer.appendChild(element);
  return box;
}


quickList(customers);
buildCustomers(customers, usStates);