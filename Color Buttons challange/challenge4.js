// Challange 4: Change The Color Of All Buttons
var allButtons = document.getElementsByTagName('button');


var copyAllButtons = [];
for (let i = 0; i < allButtons.length; i++) {
    copyAllButtons.push(allButtons[i]);
}

function changeButtonColor(myButton) {
    if (myButton.value === 'red') {
        buttonRed();
    }
    else if (myButton.value === 'green') {
        buttonGreen();
    }
    else if (myButton.value === 'reset') {
        buttonReset();
    }
    else if (myButton.value === 'random') {
        buttonRandom();
    }
}

function buttonRed() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-danger');
    }
}

function buttonGreen() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-success');
    }
}

function buttonReset() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(copyAllButtons[i]);
    }
}

function buttonRandom(){
    let choiceList = ['btn-primary', 'btn-danger', 'btn-warning', 'btn-success'];
    for (let i = 0; i < allButtons.length; i++) {
        let randomNumb = Math.floor(Math.random() * 4);
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(choiceList[randomNumb]);
    }
}




