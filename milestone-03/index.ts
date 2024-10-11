function clickButton() {
    let newNode = document.createElement("textarea"); 
    newNode.classList.add('Language');
    newNode.setAttribute("placeholder", "want to add more")

    let langButtonAdd = document.getElementById('addtextarea');
    let langButton = document.getElementById('addButton'); 
    langButtonAdd?.insertBefore(newNode, langButton);
}


function clickButton2(){
    let newNode = document.createElement('textarea');
    newNode.classList.add('education');
    newNode.setAttribute("placeholder", "want to add more")
    let eduButtonAdd = document.getElementById('edu');
    let eduButton = document.getElementById('eduButton');

    eduButtonAdd?.insertBefore(newNode, eduButton);
}

function clickButton3(){
    let newNode = document.createElement('textarea');
    newNode.classList.add('experiance');
    newNode.setAttribute("placeholder", "want to add more")
    let expButtonAdd = document.getElementById('exp');
    let expButton = document.getElementById('expButton');

    expButtonAdd?.insertBefore(newNode, expButton);
};

function clickButton4(){
    let newNode = document.createElement('textarea');
    newNode.classList.add('skills');
    newNode.setAttribute("placeholder", "want to add more")
    let skillButtonAdd = document.getElementById('skill');
    let skillButton = document.getElementById('skillButton');

    skillButtonAdd?.insertBefore(newNode, skillButton);
};



function genarateCv():void {
    const nameField = document.getElementById("name") as HTMLInputElement | null;
    const nameT = document.getElementById("nameT");

    nameT!.innerHTML = nameField?.value || "N/A";

    let namet2 = document.getElementById('nameT2') as HTMLInputElement | null


    namet2!.textContent = (nameField?.value || "N/A").toUpperCase();
    if (window.matchMedia("(max-width: 768px)").matches) {
        
        namet2!.style.fontSize = "20px";
    } else {
        
        namet2!.style.fontSize = "30px";
    }

    let birthInput = document.getElementById('birth-date') as HTMLInputElement | null;
let birthT = document.getElementById('birthT');

if (birthInput) { 
    let inputValue = `<p><b>Birth Date:</b> ${birthInput.value}</p>`;
    birthT!.innerHTML = inputValue; 
} else {
    birthT!.innerHTML = "N/A"; 
};

let cnicInput = document.getElementById('CNIC') as HTMLInputElement | null
let cnicT = document.getElementById("CNICT");

if(cnicInput){

    let inputValue = `<P><b>CNIC:</b> ${cnicInput.value} <p>`;
    cnicT!.innerHTML = inputValue;
} else {
    cnicT!.innerHTML = "N/A";
};

let phoneInput = document.getElementById('phone') as HTMLInputElement | null;
let phoneT = document.getElementById('phoneT');

if(phoneInput){
    let inputValue = ` ${phoneInput.value}`
    phoneT!.innerHTML = inputValue;
} else {
    phoneT!.innerHTML = "N/A";
};

let emialInput = document.getElementById('email') as HTMLInputElement | null;
let emailT = document.getElementById('emailT');

if(emialInput){
    let inputValue = `${emialInput.value}`
    emailT!.innerHTML = inputValue;
} else {
    emailT!.innerHTML = "N/A";
};


let objInput = document.getElementById('objective') as HTMLTextAreaElement | null;
let objT = document.getElementById('objectiveT');


objT!.innerHTML = objInput?.value || "N/A"




let langInputs = document.getElementsByClassName('Language');
    
let listOfLang = "";


for (let i = 0; i < langInputs.length; i++) {
    const langInput = langInputs[i] as HTMLTextAreaElement; 
    listOfLang += `<li>${langInput.value.trim()}</li>`; 
}


document.getElementById("langT")!.innerHTML = listOfLang;




// For education 

let eduInputs = document.getElementsByClassName('education');
    
let listOfEdu = "";


for (let i = 0; i < eduInputs.length; i++) {
    const eduInput = eduInputs[i] as HTMLTextAreaElement; 
    listOfEdu += `<li>${eduInput.value.trim()}</li>`; 
}

document.getElementById("eduT")!.innerHTML = listOfEdu;



//For experiance

let expInputs = document.getElementsByClassName('experiance');
    
let listOfExp = "";


for (let i = 0; i < expInputs.length; i++) {
    const expInput = expInputs[i] as HTMLTextAreaElement; 
    listOfExp += `<li>${expInput.value.trim()}</li>`; 
}

document.getElementById("expT")!.innerHTML = listOfExp;


//For skills

let skillsInputs = document.getElementsByClassName('skills') ; 
    
let listOfskills = "";

for (let i = 0; i < skillsInputs.length; i++) {
    const skillsInput = skillsInputs[i] as HTMLTextAreaElement; 
    listOfskills += `<li>${skillsInput.value.trim()}</li>`; 
}


if(listOfskills){
    document.getElementById("skillsT")!.innerHTML = listOfskills; 
}else {
    document.getElementById("skillsT")!.innerHTML = "N/A"
}


let img = (document.getElementById('img') as HTMLInputElement).files![0]; 
let reader = new FileReader();

reader.readAsDataURL(img);

reader.onloadend = () => { 
    let imgT = document.getElementById('imgT') as HTMLImageElement;
    if (reader.result) { 
        imgT.src = reader.result as string; 
    }
};

document.getElementById('outer-body')!.style.display = "none";
document.getElementById('outer-bodyT')!.style.display = "block"
document.getElementById("editable")!.style.display = "block";

}



