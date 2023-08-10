
function addNewWEField() {
    let newnode = document.createElement("textarea");
    newnode.classList.add("weField");
    newnode.classList.add("form-control");
    newnode.classList.add("mb-3");
    newnode.setAttribute("rows", 3);
    newnode.setAttribute("placeholder","Enter here");

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newnode, weAddButtonOb);
}




function addNewEQField() {
    let newnode = document.createElement("textarea");
    newnode.classList.add("eqField");
    newnode.classList.add("form-control");
    newnode.classList.add("mb-3");
    newnode.setAttribute("rows", 3);
    newnode.setAttribute("placeholder","Enter here");
    

    let eqOb = document.getElementById("eq");
    let eqAddButtonOb = document.getElementById("eqAddButton"); // Corrected ID here

    eqOb.insertBefore(newnode, eqAddButtonOb);
}


function addNewExtraField() {
    // Create a new textarea element
    var newTextArea = document.createElement('textarea');
    newTextArea.setAttribute('placeholder', 'Enter here');
    newTextArea.setAttribute('rows', '3');
    newTextArea.classList.add('form-control', 'extraField', 'mb-2');
    
    // Append the new textarea to the form group with id="extra"
    var formGroup = document.getElementById('extra');
    formGroup.appendChild(newTextArea);
}

function addNewCertificatesField(){
    var newTextArea = document.createElement('textarea');
    newTextArea.setAttribute('placeholder','Enter here');
    newTextArea.setAttribute('rows','3');
    newTextArea.classList.add('form-control','certificatesField','mb-2');
    
    var newFormGroup = document.getElementById('certificates');
    newFormGroup.appendChild(newTextArea);

}

function addNewProjectsField(){
    var newTextArea = document.createElement('textarea');
    newTextArea.setAttribute('placeholder','enter here');
    newTextArea.setAttribute('rows','3');
    newTextArea.classList.add('form-control','projectsField','mb-2');

    var newFormGroup = document.getElementById("projects");
    newFormGroup.appendChild(newTextArea);
}




// ----Generate cv----
function generateCV(){
    let nameField = document.getElementById("nameField").value;
    // let nameT1 = document.getElementById("nameT1");
    // nameT1.innerHTML = nameField;
     
    document.getElementById("nameT1").innerHTML=nameField;
    document.getElementById("nameT2").innerHTML=nameField;

    let contactField=document.getElementById("contactField").value;
    document.getElementById("contactT").innerHTML=contactField;

    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;

    document.getElementById("fbT").innerHTML=document.getElementById("fbField").value;
    document.getElementById("instaT").innerHTML=document.getElementById("instaField").value;
    document.getElementById("linkedT").innerHTML=document.getElementById("linkedField").value;
    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;

    let wes = document.getElementsByClassName("weField");
    let str = "";
    for (let e of wes)
    {
        str = str + `<li>${e.value}</li>`;
        
    }
     document.getElementById("weT").innerHTML=str;

     let eqs =document.getElementsByClassName("eqField");
     let str1 = "";
     for (let e of eqs){
        str1 = str1 + `<li>${e.value}</li>`;
     }
     document.getElementById("aqT").innerHTML=str1;

     document.getElementById("cv-form").style.display="none";
     document.getElementById("cv-template").style.display="block";

     let extras = document.getElementsByClassName("extraField");

     let str2="";
     for(let e of extras){
        str2 = str2+`<li>${e.value}</li>`;
     }

     document.getElementById("extraT").innerHTML=str2;


     let certificates = document.getElementsByClassName("certificatesField");

    let str3 = "";
    for(let e of certificates){
        str3=str3+ `<li>${e.value}</li>`;
    }
    document.getElementById("certificatesT").innerHTML=str3;


    let projects=document.getElementsByClassName("projectsField");
    let str4="";
    for(let e of projects){
        str4=str4+`<li>${e.value}</li>`;
    }
    document.getElementById("projectsT").innerHTML=str4;
    

     
 }  

// -------------print CV ---------------

//  function printCV(){
//     window.print();
//  }