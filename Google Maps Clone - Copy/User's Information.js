var firstName = null;
var lastName = null;
var password = null;

const resultsList = document.getElementById('results')
new URLSearchParams(window.location.search).forEach((value, name) => {
  // resultsList.append(`${name}: ${value}, `)
  // resultsList.append(document.createElement('br'))

  if(name == "User's Name") {
    firstName = value
    console.log("First Name Works!");
  }
  if(name == "User's Lastname") {
    lastName = value
    console.log("Last Name Works!");
  }
  if(name == "User's Password") {
    password = value
    console.log("Password Works!");
  }
})

alert(firstName);
alert(lastName);
alert(password);
