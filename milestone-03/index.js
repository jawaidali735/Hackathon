"use strict";
function clickButton() {
    let newNode = document.createElement("textarea");
    newNode.classList.add('Language');
    newNode.setAttribute("placeholder", "want to add more");
    let langButtonAdd = document.getElementById('addtextarea');
    let langButton = document.getElementById('addButton');
    langButtonAdd === null || langButtonAdd === void 0 ? void 0 : langButtonAdd.insertBefore(newNode, langButton);
}
function clickButton2() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('education');
    newNode.setAttribute("placeholder", "want to add more");
    let eduButtonAdd = document.getElementById('edu');
    let eduButton = document.getElementById('eduButton');
    eduButtonAdd === null || eduButtonAdd === void 0 ? void 0 : eduButtonAdd.insertBefore(newNode, eduButton);
}
function clickButton3() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('experiance');
    newNode.setAttribute("placeholder", "want to add more");
    let expButtonAdd = document.getElementById('exp');
    let expButton = document.getElementById('expButton');
    expButtonAdd === null || expButtonAdd === void 0 ? void 0 : expButtonAdd.insertBefore(newNode, expButton);
}
;
function clickButton4() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('skills');
    newNode.setAttribute("placeholder", "want to add more");
    let skillButtonAdd = document.getElementById('skill');
    let skillButton = document.getElementById('skillButton');
    skillButtonAdd === null || skillButtonAdd === void 0 ? void 0 : skillButtonAdd.insertBefore(newNode, skillButton);
}
;
function genarateCv() {
    const nameField = document.getElementById("name");
    const nameT = document.getElementById("nameT");
    nameT.innerHTML = (nameField === null || nameField === void 0 ? void 0 : nameField.value) || "N/A";
    let namet2 = document.getElementById('nameT2');
    namet2.textContent = ((nameField === null || nameField === void 0 ? void 0 : nameField.value) || "N/A").toUpperCase();
    if (window.matchMedia("(max-width: 768px)").matches) {
        namet2.style.fontSize = "20px";
    }
    else {
        namet2.style.fontSize = "30px";
    }
    let birthInput = document.getElementById('birth-date');
    let birthT = document.getElementById('birthT');
    if (birthInput) {
        let inputValue = `<p><b>Birth Date:</b> ${birthInput.value}</p>`;
        birthT.innerHTML = inputValue;
    }
    else {
        birthT.innerHTML = "N/A";
    }
    ;
    let cnicInput = document.getElementById('CNIC');
    let cnicT = document.getElementById("CNICT");
    if (cnicInput) {
        let inputValue = `<P><b>CNIC:</b> ${cnicInput.value} <p>`;
        cnicT.innerHTML = inputValue;
    }
    else {
        cnicT.innerHTML = "N/A";
    }
    ;
    let phoneInput = document.getElementById('phone');
    let phoneT = document.getElementById('phoneT');
    if (phoneInput) {
        let inputValue = ` ${phoneInput.value}`;
        phoneT.innerHTML = inputValue;
    }
    else {
        phoneT.innerHTML = "N/A";
    }
    ;
    let emialInput = document.getElementById('email');
    let emailT = document.getElementById('emailT');
    if (emialInput) {
        let inputValue = `${emialInput.value}`;
        emailT.innerHTML = inputValue;
    }
    else {
        emailT.innerHTML = "N/A";
    }
    ;
    let objInput = document.getElementById('objective');
    let objT = document.getElementById('objectiveT');
    objT.innerHTML = (objInput === null || objInput === void 0 ? void 0 : objInput.value) || "N/A";
    let langInputs = document.getElementsByClassName('Language');
    let listOfLang = "";
    for (let i = 0; i < langInputs.length; i++) {
        const langInput = langInputs[i];
        listOfLang += `<li>${langInput.value.trim()}</li>`;
    }
    document.getElementById("langT").innerHTML = listOfLang;
    // For education 
    let eduInputs = document.getElementsByClassName('education');
    let listOfEdu = "";
    for (let i = 0; i < eduInputs.length; i++) {
        const eduInput = eduInputs[i];
        listOfEdu += `<li>${eduInput.value.trim()}</li>`;
    }
    document.getElementById("eduT").innerHTML = listOfEdu;
    //For experiance
    let expInputs = document.getElementsByClassName('experiance');
    let listOfExp = "";
    for (let i = 0; i < expInputs.length; i++) {
        const expInput = expInputs[i];
        listOfExp += `<li>${expInput.value.trim()}</li>`;
    }
    document.getElementById("expT").innerHTML = listOfExp;
    //For skills
    let skillsInputs = document.getElementsByClassName('skills');
    let listOfskills = "";
    for (let i = 0; i < skillsInputs.length; i++) {
        const skillsInput = skillsInputs[i];
        listOfskills += `<li>${skillsInput.value.trim()}</li>`;
    }
    if (listOfskills) {
        document.getElementById("skillsT").innerHTML = listOfskills;
    }
    else {
        document.getElementById("skillsT").innerHTML = "N/A";
    }
    let img = document.getElementById('img').files[0];
    let reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onloadend = () => {
        let imgT = document.getElementById('imgT');
        if (reader.result) {
            imgT.src = reader.result;
        }
    };
    document.getElementById('outer-body').style.display = "none";
    document.getElementById('outer-bodyT').style.display = "block";
    document.getElementById("editable").style.display = "block";
}
