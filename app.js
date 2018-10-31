
var pikeAndFirst = {
  name: 'First and Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  custPerHour: [],
  cookiesPerHour: [],
  hoursOfOps: ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'],
  dailyTotal: 0,
  generateRandomCustPerHour: function(min, max) {
    for(var i = 0; i < this.hoursOfOps.length; i++) {
      var randomCust = Math.floor(Math.random() * (max - min + 1) + min);
      this.custPerHour.push(randomCust);
    }
  },
  generateHourlySales: function() {
    // Line below will populate custPerHour array
    this.generateRandomCustPerHour(this.minCustPerHour, this.maxCustPerHour);

    for(var i = 0; i < this.hoursOfOps.length; i++) {
      var perHour = Math.round(this.custPerHour[i] * this.avgCookiesPerCust);
      this.cookiesPerHour.push(perHour);

      // this.dailyTotal = this.dailyTotal + perHour;
      this.dailyTotal += perHour;
    }
  },
  render: function() {
    // Line below will generate hourly sales, which also generates customers per hour
    this.generateHourlySales();

    // this.hoursOfOps = ['6a', '7a', '8a']
    // this.custPerHour = [24, 55, 33]
    // this.cookiesPerHour = [128, 222, 332]

    var mainEl = document.getElementById('main-content');
    var containerEl = document.createElement('section');

    var headingEl = document.createElement('h3');
    headingEl.textContent = this.name;
    containerEl.appendChild(headingEl);

    var ulEl = document.createElement('ul');

    for(var i = 0; i < this.hoursOfOps.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${this.hoursOfOps[i]}: ${this.cookiesPerHour[i]} cookies`; // '6am: 23 cookies'
      ulEl.appendChild(liEl);
    }

    var totalEl = document.createElement('li');
    totalEl.textContent = `Total: ${this.dailyTotal} cookies`;
    ulEl.appendChild(totalEl);

    containerEl.appendChild(ulEl);
    mainEl.appendChild(containerEl);
  },
};

 pikeAndFirst.render();


 var seaTac = {
  name: 'Sea Tac Airport',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesPerCust: 1.2,
  custPerHour: [],
  cookiesPerHour: [],
  hoursOfOps: ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'],
  dailyTotal: 0,
  generateRandomCustPerHour: function(min, max) {
    for(var i = 0; i < this.hoursOfOps.length; i++) {
      var randomCust = Math.floor(Math.random() * (max - min + 1) + min);
      this.custPerHour.push(randomCust);
    }
  },
  generateHourlySales: function() {
    // Line below will populate custPerHour array
    this.generateRandomCustPerHour(this.minCustPerHour, this.maxCustPerHour);

    for(var i = 0; i < this.hoursOfOps.length; i++) {
      var perHour = Math.round(this.custPerHour[i] * this.avgCookiesPerCust);
      this.cookiesPerHour.push(perHour);

      // this.dailyTotal = this.dailyTotal + perHour;
      this.dailyTotal += perHour;
    }
  },
  render: function() {
    // Line below will generate hourly sales, which also generates customers per hour
    this.generateHourlySales();

    // this.hoursOfOps = ['6a', '7a', '8a']
    // this.custPerHour = [24, 55, 33]
    // this.cookiesPerHour = [128, 222, 332]

    var mainEl = document.getElementById('main-content');
    var containerEl = document.createElement('section');

    var headingEl = document.createElement('h3');
    headingEl.textContent = this.name;
    containerEl.appendChild(headingEl);

    var ulEl = document.createElement('ul');

    for(var i = 0; i < this.hoursOfOps.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${this.hoursOfOps[i]}: ${this.cookiesPerHour[i]} cookies`; // '6am: 23 cookies'
      ulEl.appendChild(liEl);
    }

    var totalEl = document.createElement('li');
    totalEl.textContent = `Total: ${this.dailyTotal} cookies`;
    ulEl.appendChild(totalEl);

    containerEl.appendChild(ulEl);
    mainEl.appendChild(containerEl);
  },
};

 seaTac.render();


 var seattleCenter = {
  name: 'Seattle Center',
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesPerCust: 3.7,
  custPerHour: [],
  cookiesPerHour: [],
  hoursOfOps: ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'],
  dailyTotal: 0,
  generateRandomCustPerHour: function(min, max) {
    for(var i = 0; i < this.hoursOfOps.length; i++) {
      var randomCust = Math.floor(Math.random() * (max - min + 1) + min);
      this.custPerHour.push(randomCust);
    }
  },
  generateHourlySales: function() {
    // Line below will populate custPerHour array
    this.generateRandomCustPerHour(this.minCustPerHour, this.maxCustPerHour);

    for(var i = 0; i < this.hoursOfOps.length; i++) {
      var perHour = Math.round(this.custPerHour[i] * this.avgCookiesPerCust);
      this.cookiesPerHour.push(perHour);

      // this.dailyTotal = this.dailyTotal + perHour;
      this.dailyTotal += perHour;
    }
  },
  render: function() {
    // Line below will generate hourly sales, which also generates customers per hour
    this.generateHourlySales();

    // this.hoursOfOps = ['6a', '7a', '8a']
    // this.custPerHour = [24, 55, 33]
    // this.cookiesPerHour = [128, 222, 332]

    var mainEl = document.getElementById('main-content');
    var containerEl = document.createElement('section');

    var headingEl = document.createElement('h3');
    headingEl.textContent = this.name;
    containerEl.appendChild(headingEl);

    var ulEl = document.createElement('ul');

    for(var i = 0; i < this.hoursOfOps.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${this.hoursOfOps[i]}: ${this.cookiesPerHour[i]} cookies`; // '6am: 23 cookies'
      ulEl.appendChild(liEl);
    }

    var totalEl = document.createElement('li');
    totalEl.textContent = `Total: ${this.dailyTotal} cookies`;
    ulEl.appendChild(totalEl);

    containerEl.appendChild(ulEl);
    mainEl.appendChild(containerEl);
  },
};

 seattleCenter.render();


 var capitolHill = {
  name: 'Capitol Hill',
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookiesPerCust: 2.3,
  custPerHour: [],
  cookiesPerHour: [],
  hoursOfOps: ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'],
  dailyTotal: 0,
  generateRandomCustPerHour: function(min, max) {
    for(var i = 0; i < this.hoursOfOps.length; i++) {
      var randomCust = Math.floor(Math.random() * (max - min + 1) + min);
      this.custPerHour.push(randomCust);
    }
  },
  generateHourlySales: function() {
    // Line below will populate custPerHour array
    this.generateRandomCustPerHour(this.minCustPerHour, this.maxCustPerHour);

    for(var i = 0; i < this.hoursOfOps.length; i++) {
      var perHour = Math.round(this.custPerHour[i] * this.avgCookiesPerCust);
      this.cookiesPerHour.push(perHour);

      // this.dailyTotal = this.dailyTotal + perHour;
      this.dailyTotal += perHour;
    }
  },
  render: function() {
    // Line below will generate hourly sales, which also generates customers per hour
    this.generateHourlySales();

    // this.hoursOfOps = ['6a', '7a', '8a']
    // this.custPerHour = [24, 55, 33]
    // this.cookiesPerHour = [128, 222, 332]

    var mainEl = document.getElementById('main-content');
    var containerEl = document.createElement('section');

    var headingEl = document.createElement('h3');
    headingEl.textContent = this.name;
    containerEl.appendChild(headingEl);

    var ulEl = document.createElement('ul');

    for(var i = 0; i < this.hoursOfOps.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${this.hoursOfOps[i]}: ${this.cookiesPerHour[i]} cookies`; // '6am: 23 cookies'
      ulEl.appendChild(liEl);
    }

    var totalEl = document.createElement('li');
    totalEl.textContent = `Total: ${this.dailyTotal} cookies`;
    ulEl.appendChild(totalEl);

    containerEl.appendChild(ulEl);
    mainEl.appendChild(containerEl);
  },
};

 capitolHill.render();



 var alki = {
  name: 'Alki',
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiesPerCust: 4.6,
  custPerHour: [],
  cookiesPerHour: [],
  hoursOfOps: ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'],
  dailyTotal: 0,
  generateRandomCustPerHour: function(min, max) {
    for(var i = 0; i < this.hoursOfOps.length; i++) {
      var randomCust = Math.floor(Math.random() * (max - min + 1) + min);
      this.custPerHour.push(randomCust);
    }
  },
  generateHourlySales: function() {
    // Line below will populate custPerHour array
    this.generateRandomCustPerHour(this.minCustPerHour, this.maxCustPerHour);

    for(var i = 0; i < this.hoursOfOps.length; i++) {
      var perHour = Math.round(this.custPerHour[i] * this.avgCookiesPerCust);
      this.cookiesPerHour.push(perHour);

      // this.dailyTotal = this.dailyTotal + perHour;
      this.dailyTotal += perHour;
    }
  },
  render: function() {
    // Line below will generate hourly sales, which also generates customers per hour
    this.generateHourlySales();

    // this.hoursOfOps = ['6a', '7a', '8a']
    // this.custPerHour = [24, 55, 33]
    // this.cookiesPerHour = [128, 222, 332]

    var mainEl = document.getElementById('main-content');
    var containerEl = document.createElement('section');

    var headingEl = document.createElement('h3');
    headingEl.textContent = this.name;
    containerEl.appendChild(headingEl);

    var ulEl = document.createElement('ul');

    for(var i = 0; i < this.hoursOfOps.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = `${this.hoursOfOps[i]}: ${this.cookiesPerHour[i]} cookies`; // '6am: 23 cookies'
      ulEl.appendChild(liEl);
    }

    var totalEl = document.createElement('li');
    totalEl.textContent = `Total: ${this.dailyTotal} cookies`;
    ulEl.appendChild(totalEl);

    containerEl.appendChild(ulEl);
    mainEl.appendChild(containerEl);
  },
};

 alki.render();

var stores = []
function Stores (name, cookies, hour, total){
  this.name = name;
  this.cookies = cookies;
  this.hour = hour;
  this.total = hour;

stores.push(this);
this.render();
}

Stores.prototype.cookieCalc = function() {generateRandomCustPerHour: function(min, max) {
    for(var i = 0; i < this.hoursOfOps.length; i++) {
      var randomCust = Math.floor(Math.random() * (max - min + 1) + min);
      this.custPerHour.push(randomCust);
    }
  }
  generateHourlySales: function() {
    // Line below will populate custPerHour array
    this.generateRandomCustPerHour(this.minCustPerHour, this.maxCustPerHour);

    for(var i = 0; i < this.hoursOfOps.length; i++) {
      var perHour = Math.round(this.custPerHour[i] * this.avgCookiesPerCust);
      this.cookiesPerHour.push(perHour);

      // this.dailyTotal = this.dailyTotal + perHour;
      this.dailyTotal += perHour;
    }

  } 
}

function createTable() {
  // This function is used to establish ONE SINGLE table in the DOM for us to work with when we start rendering individual rows for each Turtle
  var mainEl = document.getElementById('main-content');
  var tblEl = document.createElement('table');
  var theadEl = document.createElement('thead');
  var tbodyEl = document.createElement('tbody');
  var tfootEl = document.createElement('tfoot');

  mainEl.appendChild(tblEl);
  tblEl.appendChild(theadEl);
  tblEl.appendChild(tbodyEl);
  tblEl.appendChild(tfootEl);

  tblEl.id = 'turtle-table';
  theadEl.id = 'tbl-head';
  tbodyEl.id = 'tbl-body';
  tfootEl.id = 'tbl-foot';
  tblEl.className = 'tbl';
}