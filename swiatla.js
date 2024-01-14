var checkboxDiv = document.getElementById('checkboxDiv');
var readSize = document.getElementById('readSize');
var firstRow = [];
var lastRow = [];
var leftId = null;
var upId = null;
var rightId = null;
var downId = null;
var boardSize = 0;

function zrubSwiatla() {
    
    boardSize = readSize.value * readSize.value
    
    checkboxDiv.style.width = "" + ((readSize.value * 20) + (readSize.value * 10)) + "px";
    readSize.readOnly = true; 

    for (let i = 1; i <= boardSize; i++) {

        var checkboxMax = document.getElementById('checkbox' + boardSize)

        if(!checkboxMax) {
            var checkbox = document.createElement("input");
            checkbox.type = 'checkbox';
            checkbox.id = 'checkbox' + i;
            checkboxDiv.appendChild(checkbox);
            checkbox.checked = ramdomTrueFalse();
        }
    }

    for (let i = 1; i <= boardSize; i = i + parseInt(readSize.value)) {
        firstRow.push(i);
    }

    for (let i = parseInt(readSize.value); i < boardSize; i += parseInt(readSize.value)) {
        lastRow.push(i);
    }

}

document.addEventListener('DOMContentLoaded', function() {
    checkboxDiv.addEventListener('click', zmienSwiatla)
});

function zmienSwiatla(event){
    let id1 = event.target.id;
    let numbah = 0;

    if(typeof parseInt(id1[id1.length - 2]) === 'number' && !isNaN(parseInt(id1[id1.length - 2]))) {
            numbah = parseInt(id1[id1.length - 2] + id1[id1.length - 1])
            console.log(numbah)
    } else {
            numbah = parseInt(id1[id1.length - 1])
            console.log(numbah)
    }    
    
    if(!firstRow.includes(numbah)) {
        leftId = document.getElementById('checkbox' + (numbah - 1));
    } else {
        leftId = null;
    }

    if(!lastRow.includes(numbah)) {
        rightId = document.getElementById('checkbox' + (numbah + 1));
    } else {
        rightId = null;
    }

    let upIdCheck = numbah - readSize.value;
    if(upIdCheck > 0) {
        upId = document.getElementById('checkbox' + upIdCheck);
    } else {
        upId = null;
    }

    let downIdCheck = (parseInt(numbah) + parseInt(readSize.value));
    if(downIdCheck <= boardSize) {
        downId = document.getElementById('checkbox' + downIdCheck);
    } else {
        downId = null;
    }

    if(leftId != null) {
        leftId.checked = !leftId.checked
    }

    if(rightId != null) {
        rightId.checked = !rightId.checked
    }

    if(upId != null) {
        upId.checked = !upId.checked
    }

    if(downId != null) {
        downId.checked = !downId.checked
    }

    checkCheckboxes()
}

function ramdomTrueFalse() {
    return Math.random() < 0.2;
}

function checkCheckboxes() {
    const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');

    const allChecked = Array.from(allCheckboxes).every(checkbox => checkbox.checked);

    if(allChecked){
        let won = document.createElement("p");
        let divik = document.getElementById("winDiv");
        won.textContent = "Wygrałeś";
        divik.appendChild(won);
        console.log("zajebiście")
    }
}

allChecked = true;