let customerContainer = document.querySelector('.customerContainer');


function capitalize(name){
  let firstLetter = name.charAt(0);
  let remainingLetters = name.substring(1);
  firstLetter = firstLetter.toUpperCase();
  return firstLetter + remainingLetters;
}


function buildCustomers(customerArray, usStates) {
  for (let customer of customers) {
    let box = document.createElement('div');
    box.classList.add('customer');

    // adds photo
    let photo = document.createElement('img');
    photo.src = customer.picture.large;
    photo.alt = 'customer image';
    box.appendChild(photo);

    // creates customer name
    let customerName = document.createElement('h4');
    customerName.innerText = `${capitalize(customer.name.title)} ${capitalize(customer.name.first)}  ${capitalize(customer.name.last)}`;
    // adds name to customer box
    addThings(box, customerName);

    // adds email
    let email = document.createElement('p');
    email.innerText = customer.email;
    addThings(box, email);


    // adds address
    let address1 = document.createElement('address');
    address1.innerText = `${customer.location.street.number} ${customer.location.street.name}`;
    addThings(box, address1);
 
    let address2 = document.createElement('address');
    address2.innerText = `${customer.location.city} ${nameToAbbr(customer.location.state)} ${customer.location.postcode}`;
    addThings(box, address2);


    // adds date of birth
    let dob = document.createElement('div');
    dob.innerText = `DOB: ${moment(customer.dob.date).format('LL')}`;
    addThings(box, dob);


    // adds customer since
    let customerSince = document.createElement('div');
    customerSince.innerText = `Customer since: ${moment(customer.registered.date).format('LL')}`;
    addThings(box, customerSince);

    // adds box to customerContainer class in html
    customerContainer.appendChild(box);
  }
}


function addThings(box, element) {
  box.appendChild(element);
  return box;
}


buildCustomers(customers, usStates);