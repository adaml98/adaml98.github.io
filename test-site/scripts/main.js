var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Google-logo-1-resized.jpg') {
      myImage.setAttribute ('src','images/Shrimp-picture.jpg');
    } else {
      myImage.setAttribute ('src','images/Google-logo-1-resized.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Hello my mate, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hello my mate, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}