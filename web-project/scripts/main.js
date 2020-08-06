// const myHeading = document.querySelector('h1');
// myHeading.textContent = "PIC OF THE DAY"

let myImage = document.querySelector('img');
myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/image.jpg') {
        myImage.setAttribute('src', 'images/image-two.jpg');
    } else {
        myImage.setAttribute('src', 'images/image.jpg')
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


  
function setUserName(){
    let myName = prompt("Enter your Namee:");
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem('name',myName);
        myHeading.innerHTML = 'PIC OF THE DAY ' + myName;
    }
}
  
myButton.onclick = function(){
    setUserName();
}