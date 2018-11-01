var locations = []

function Store (name, minCustPerHour, maxCustPerHour, avgCookiesSoldPerHour, hoursOpen) {
  this.name
  this.minCustPerHour
  this.maxCustPerHour
  this.avgCookiesSoldPerHour
  this.hoursOpen
  this.customersPerHour = []
  this.cookiesPerHour = []
  this.totalCookiesPerDay = 0;

  locations.push(this);

this.render();
}

Location.prototype.addCustomersPerHour = function (min, max) {
  for (var i = 0; i < this.hourOpen.length;i++){
    var randomCustNumber = Math.floor
  }
}



pEl.addEventListener('click', changeColor);


// FORM DATA
var formEl = document.getElementById('form-data');
formEl.addEventListener('submit', function(event) {
  event.preventDefault();

  // console.log(event.target.ta.value);
  var textInput = event.target.t.value;
  var numberInput = event.target.n.value;
  var passwordInput = event.target.p.value;
  var emailInput = event.target.e.value;

  var pText = document.createElement('p');
  var pNumber = document.createElement('p');
  var pPassword = document.createElement('p');
  var pEmail = document.createElement('p');

  pText.textContent = textInput;
  pNumber.textContent = numberInput;
  pPassword.textContent = passwordInput;
  pEmail.textContent = emailInput;

  var resultsEl = document.getElementById('results');
  resultsEl.appendChild(pText);
  resultsEl.appendChild(pNumber);
  resultsEl.appendChild(pPassword);
  resultsEl.appendChild(pEmail);


  event.target.t.value = '';
  event.target.n.value = '';
  event.target.p.value = '';
  event.target.e.value = '';