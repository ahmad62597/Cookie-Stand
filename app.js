//Creating first object of data for 1st and Pike
var hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'];

var storeOne = {
  name: '1st and Pike Place',
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  totalCookies: 0,
  avgCustomers: [],
  avgCookiesPerHour: [],

  customersPerHour: function (minCust, maxCust) {
    for (var i = 0; i < hours.length; i++) {
      var custPerHour = Math.floor(Math.random() * (this.maxCust - this.minCust)) +
        this.minCust;
      this.avgCustomers.push(custPerHour);
    }
  },


  cookiesPerHour: function () {
    this.customersPerHour();
    for (var i = 0; i < hours.length; i++) {
      var avgCookieCount = Math.floor(this.avgCustomers[i] * this.avgCookies);
      this.avgCookiesPerHour.push(avgCookieCount);

    }
  },

  cookieSum: function () {
    this.cookiesPerHour();
    for (var i = 0; i < hours.length; i++) {
      this.totalCookies +=  this.avgCookiesPerHour[i];
    }
    return this.totalCookies;
  
  }

  
};

// render() {
// var container=document.createElement('section');
// var nameEl = document.createElement('h3');
// var messageEl = document.createElement('p'); 

// nameEl.textContent = this.name
// messageEl.textContent = `Total ${this.totalCookies} cookies`;

// container.appendChild(nameEl);
// container.appendChild(message.El);

// var mainEl = document.getElementById('main-content');
// mainEl.appendChild(container);




storeOne.customersPerHour();
storeOne.cookiesPerHour();
storeOne.cookieSum();

//storeOne.render();


