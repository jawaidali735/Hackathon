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
    // Get the fields for Name
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
    // Birth Date
    let birthInput = document.getElementById('birth-date');
    let birthT = document.getElementById('birthT');
    birthT.innerHTML = birthInput ? `<p><b>Birth Date:</b> ${birthInput.value}</p>` : "N/A";
    // CNIC
    let cnicInput = document.getElementById('CNIC');
    let cnicT = document.getElementById("CNICT");
    cnicT.innerHTML = cnicInput ? `<P><b>CNIC:</b> ${cnicInput.value}<p>` : "N/A";
    // Phone
    let phoneInput = document.getElementById('phone');
    let phoneT = document.getElementById('phoneT');
    phoneT.innerHTML = phoneInput ? ` ${phoneInput.value}` : "N/A";
    // Email
    let emialInput = document.getElementById('email');
    let emailT = document.getElementById('emailT');
    emailT.innerHTML = emialInput ? `${emialInput.value}` : "N/A";
    // Objective
    let objInput = document.getElementById('objective');
    let objT = document.getElementById('objectiveT');
    objT.innerHTML = (objInput === null || objInput === void 0 ? void 0 : objInput.value) || "N/A";
    // Languages
    let langInputs = document.getElementsByClassName('Language');
    let listOfLang = "";
    for (let i = 0; i < langInputs.length; i++) {
        const langInput = langInputs[i];
        listOfLang += `<li>${langInput.value.trim()}</li>`;
    }
    document.getElementById("langT").innerHTML = listOfLang;
    // Education
    let eduInputs = document.getElementsByClassName('education');
    let listOfEdu = "";
    for (let i = 0; i < eduInputs.length; i++) {
        const eduInput = eduInputs[i];
        listOfEdu += `<li>${eduInput.value.trim()}</li>`;
    }
    document.getElementById("eduT").innerHTML = listOfEdu;
    // Experience
    let expInputs = document.getElementsByClassName('experiance');
    let listOfExp = "";
    for (let i = 0; i < expInputs.length; i++) {
        const expInput = expInputs[i];
        listOfExp += `<li>${expInput.value.trim()}</li>`;
    }
    document.getElementById("expT").innerHTML = listOfExp;
    // Skills
    let skillsInputs = document.getElementsByClassName('skills');
    let listOfskills = "";
    for (let i = 0; i < skillsInputs.length; i++) {
        const skillsInput = skillsInputs[i];
        listOfskills += `<li>${skillsInput.value.trim()}</li>`;
    }
    document.getElementById("skillsT").innerHTML = listOfskills || "N/A";
    let img = document.getElementById('img').files[0];
    let reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onloadend = () => {
        var _a;
        let imgT = document.getElementById('imgT');
        if (reader.result) {
            imgT.src = reader.result;
            const cssStyles = `
                <style>
                * {
    margin: 0;
    padding: 0;
    font-family:   Arial, sans-serif;
    box-sizing: border-box;
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
}

#outer-bodyT {
     
    
    width: 800px; 
    display: flex;
    margin: 50px auto;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    display: none;
   
    
    
}
.containerT {
    width: 800px; 
    display: flex;
    margin: 0 auto; 
    
     
}

.headername {
    background: linear-gradient(137deg, rgba(45, 253, 247, 1) 0%, rgba(34, 170, 199, 1) 39%, rgba(22, 107, 145, 1) 100%);
    width: 800px;
    height: 140px;
    position: absolute;
    color: #dae3f3;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 20px;
    line-height: 1.2;
}


.columT {
    width: 35%; 
    margin: 20px 0; 
    display: flex;
    flex-direction: column; 
    align-items: center; 
    background-color: #dae3f3;
    border-radius: 7px;
    padding: 20px; 
    box-sizing: border-box; 
    white-space: normal; 
    word-wrap: break-word; 
    
}

.columT p {
    margin-top: 7px;
}

#nameT{
    font-size: 18px;
}
#langT{
    font-size: 13px;
}

.columT2 p {
    margin-top: 20px;
}
.contact div span {
    padding-left: 5px;
    font-size: 13px;
    
}
.contact i {
    
    font-size: 13px;
    
}
.contact {
    margin-bottom: 100px;
}
.contact div {
    margin-bottom: 7px; 
    text-align: center;
    margin-top: 10px;
}
.contact p {
    text-align: center;
}

.columT2 {
    width: 65%; 
    margin-top: 150px; 
    display: flex;
    flex-direction: column; 
    padding: 20px;
    box-sizing: border-box; 
    white-space: normal; 
    word-wrap: break-word; 
    margin-left: 20px;
}

.columT2 > div {
    padding-top: 40px;
}

.columT hr {
    width: 100%; 
    border: 1px solid rgb(22, 107, 145); 
    margin: 10px 0; 
}

.myimage {
    width: 200px;
    height: 200px;
    border: solid;
    border-color: rgb(22, 107, 145);
    border-radius: 50%;
    position: relative;
}

button#download-pdf {
 
    margin: 20px auto;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 15px;
    border-radius: 5px;
  
   width: 140px;
}

button#printBtn:hover {
    background-color: #0056b3;
} 

 button#editable {
    display: block;
    margin: 20px auto;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
   display: none;
}

button#editable:hover {
    background-color: #0056b3; 
}



#download-link-container{
    margin: 30px auto;
    padding: 20px;
    max-width: 800px;
    text-align: center;
    display: none;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    border-radius: 7px;
    
    
}
@media print {
    
    * {
        -webkit-print-color-adjust: exact !important; 
        print-color-adjust: exact !important;
    }

    
    .headername {
        background-color: rgba(45, 253, 247, 1) !important;
        background: linear-gradient(137deg, rgba(45, 253, 247, 1) 0%, rgba(34, 170, 199, 1) 39%, rgba(22, 107, 145, 1) 100%) !important;
        color: white !important;
    }

    
    .columT {
        background-color: #dae3f3 !important;
    }

    button {
        display: block;
    }

    #outer-bodyT {
        box-shadow: none;
    }
    

    #editable,
    #download-link-container {
        display: none !important; 
    }
}



@media (max-width: 768px) {
   
    .container {
        flex-direction: column;
        width: 100%;  
    }

    .forS{
        margin-top: 26px;
    }
    
    .colum {
        width: 100%;  
        margin: 10px 0;  
    }
 
    
    input{
        padding: 15px;
    }

    textarea{
        height: 50px;
    }
    
    .outer-body h1 {
        font-size: 30px;
    }

    .outer-body p {
        font-size: 20px;
    }

    button, .submit-button  {
        width: 20%;  
        font-size: 15px;  
        padding: 12px;  
        margin: 10px auto;
    }
}



@media (max-width: 768px) {
    
    .containerT {
        width: 100%;  
    }

    .columT {
        width: 35%;  
        margin: 0 0;  
        text-align: center;
        
        
    }
    .columT p {
        font-size: 8px;
        margin-top: 3px;
    }
    #nameT{
        font-size: 10px;
    }

    .columT2 {
        width: 65%;  
        margin: 10px 0;
        margin-top: 60px;  
        border-radius: 0px;
    }

    .headername {
        width: 100%;
        font-size: 8px;  
        line-height: 1.5;  
        padding: 5px;  
        height: 65px;  
        border-radius: 0px;
    }

    
    .myimage {
        width: 100px;  
        height: 100px; 
        object-fit: cover; 
    }

    #outer-bodyT {
        width: 100%;
        margin: 0px auto; 
        border-radius: 0px;
    }

    
    h1, h2 ,h4 {
        font-size: 13px;  
        margin: 5px 0;    
    }

    h3 {
        font-size: 11px;  
        margin: 5px 0;   
    }

    
    p {
        font-size: 8px;  
        line-height: 1.4;  
    }

    /* Ensure list items are not too large */
    #langT li, #eduT li, #expT li, #skillsT li {
        font-size: 8px;  
        
    }

    .mybgstyle i {
        font-size: 11px;  
        margin-right: 5px;  
    }

    .mybgstyle span {
        font-size: 9px;  
        line-height: 1.2;  
    }

    .columT2 > div {
        padding-top: 5px;
    }
 

    #emailT{
        font-size: 6px;
    }

    #phoneT{
        font-size: 8px;
        
    }

    .contact i {
        font-size: 8px;
    
    }
    .contact div span{
        padding-top: 0px;
    }

    .contact {
        margin-bottom: 0px;
    }

    #cnct{
        margin-bottom: 0px;
    }

   
    #objectiveT {
        font-size: 8px;
    }

    #download-link-container p {
        font-size: 15px;
    }

    #download-link-container h2 {
        font-size: 20px;
    }
}

                </style>
            `;
            const resumeOutput = ((_a = document.getElementById('outer-bodyT')) === null || _a === void 0 ? void 0 : _a.innerHTML) || '';
            const fullCvContent = `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Generated CV</title>
                    ${cssStyles}
                </head>
                <body>
                    ${resumeOutput}
                   
                </body>
                </html>
            `;
            const usernameElement = document.getElementById("username");
            const username = (usernameElement === null || usernameElement === void 0 ? void 0 : usernameElement.value.trim()) || "user";
            const uniquePath = `${username.replace(/\s+/g, "_")}_cv.html`;
            const downloadLink = document.createElement('a');
            downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(fullCvContent);
            downloadLink.download = uniquePath;
            downloadLink.textContent = "Download your CV";
            downloadLink.style.display = "block";
            downloadLink.style.marginTop = "20px";
            const downloadLinkContainer = document.getElementById('download-link');
            downloadLinkContainer.innerHTML = "";
            downloadLinkContainer.appendChild(downloadLink);
            document.getElementById('outer-body').style.display = "none";
            document.getElementById('outer-bodyT').style.display = "block";
            document.getElementById("editable").style.display = "block";
            document.getElementById("download-link-container").style.display = "block";
        }
    };
}
//this is for when genaret button clicked then the button should display
function editble() {
    document.getElementById('outer-body').style.display = "none";
    document.getElementById("editable").style.display = "block";
    document.getElementById("printBtn").style.display = "block";
}
;
//for edite the cv
let outer = document.getElementById('outer-body');
let outerT = document.getElementById('outer-bodyT');
let editButton = document.getElementById('editable');
function clickedite() {
    if (outer && outerT) {
        if (outer.style.display === 'none') {
            outer.style.display = 'block';
            outerT.style.display = 'none';
            editButton.style.display = 'none';
        }
        else {
            outer.style.display = 'none';
            outerT.style.display = 'block';
            editButton.style.display = 'block';
        }
    }
}
//this is for download or print the cv
function printCv() {
    window.print();
}
;
