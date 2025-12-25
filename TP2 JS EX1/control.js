nom=document.getElementById("nom");
prenom=document.getElementById("prenom");
sexe=document.getElementsByName("sexe");
ville=document.getElementById("ville");
emploi=document.getElementById("emploi");
phrase=document.getElementById("phrase");
dateN=document.getElementById("dateN");

function afficher() {
document.getElementById("phrase").value=""
document.querySelectorAll(".error").forEach((e)=>e.textContent="");
ok=true;
if (nom.value.trim()=="") {
    ok=false;
    nom.parentElement.querySelector(".error").textContent="veuillez saisir le nom";
}
if (prenom.value.trim()=="") {
    ok=false;
    prenom.parentElement.querySelector(".error").textContent="veuillez saisir le prenom";
}
if (!sexe[0].checked && !sexe[1].checked) {
    ok=false;
    sexe[0].parentElement.querySelector(".error").textContent="veuillez choisir votre age"; 
}
if (ville.selectedIndex==0){
    ok=false
    ville.parentElement.querySelector('.error').textContent="veuillez choisir votre ville";
}
if(dateN.value==""){
    ok=false
    dateN.parentElement.querySelector('.error').textContent="veuillez choisir votre date de naissence"
}
if(calculAge()<18){
    ok= false
    dateN.parentElement.querySelector('.error').textContent="veuillez choisir votre date de naissence"
}
if (ok==true){
    let msg="";
    v=ville.value;
    if (sexe[0].checked) {
        msg+="monsieur ";
    }
    else{
        msg+="madame ";
    }
    msg=msg+nom.value+" "+prenom.value+" vous etes nés le " + dateN.value+" " + v;
    if(emploi.checked){
        msg+=" actuellement sans emploi";
    }
    
    document.getElementById("phrase").value=msg;
}
}
function calculAge() {
    let dj=new Date();
    let dn=new Date(dateN.value);
    let age=Math.floor((dj-dn)/(1000*3600*24*365));
    return age;
}