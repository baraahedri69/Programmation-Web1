nom=document.getElementById("nom");
prenom=document.getElementById("prenom");
clavier_prix=document.getElementById("clavier_prix");
clavier_quantite=document.getElementById("clavier_quantite");
souris_prix=document.getElementById("souris_prix");
souris_quantite=document.getElementById("souris_quantite");
scanner_prix=document.getElementById("scanner_prix");
scanner_quantite=document.getElementById("scanner_quantite");
res = document.getElementById("res")
function valider() {
    document.querySelectorAll(".error").forEach(e =>(e.innerText=""));
    ok=true;
    if (nom.value.trim()=="") {
        ok=false;
        nom.parentElement.querySelector(".error").innerText="saisir votre nom";
    }
    if (prenom.value.trim()=="") {
        ok=false;
        prenom.parentElement.querySelector(".error").innerText="saisir votre prenom";
    }
    if (souris_prix.value=="" || Number(souris_prix.value)<0) {
        ok=false;
        souris_prix.parentElement.querySelector(".error").textContent="saisir un prix positive  ";
    }
    if (souris_quantite.value=="" || Number(souris_quantite.value)<0) {
        ok=false;
        souris_quantite.parentElement.querySelector(".error").textContent="saisir un quantite positive  ";
    }
    if (clavier_prix.value=="" || Number(clavier_prix.value)<0) {
        ok=false;
        clavier_prix.parentElement.querySelector(".error").textContent="saisir un prix positive  ";
    }
    if (clavier_quantite.value=="" || Number(clavier_quantite.value)<0) {
        ok=false;
        clavier_quantite.parentElement.querySelector(".error").textContent="saisir un quantite positive  ";
    }
    if (scanner_prix.value=="" || Number(scanner_prix.value)<0) {
        ok=false;
        scanner_prix.parentElement.querySelector(".error").textContent="saisir un prix positive  ";
    }
    if (scanner_quantite.value=="" || Number(scanner_quantite.value)<0) {
        ok=false;
        scanner_quantite.parentElement.querySelector(".error").textContent="saisir un quantite positive  ";
    };
    if(ok){
        res.innerHtml="";
        res.style.display = "table";
        tot_souris=Number(souris_prix.value)*Number(souris_quantite.value);
        tot_clavier=Number(clavier_prix.value)*Number(clavier_quantite.value);
        tot_scanner=Number(scanner_prix.value)*Number(scanner_quantite.value);
        res.innerHTML += `<caption >Facture de Mr/Mme ${nom.value} ${prenom.value}</caption>`;
res.innerHTML += `<tr>
                        <th>Produit</th>
                        <th>Prix unitaire</th>
                        <th>Quantité</th>
                        <th>Prix</td>
                    </tr>`;
      res.innerHTML += `<tr>
                        <td>Souris</td>
                        <td>${souris_prix.value}</td>
                        <td>${souris_quantite.value}</td>
                        <td>${tot_souris}</td>
                     </tr>
                     <tr>
                        <td>Scanner</td>
                        <td>${scanner_prix.value}</td>
                        <td>${scanner_quantite.value}</td>
                        <td>${tot_scanner}</td>
                     </tr>
                     <tr>
                        <td>Clavier</td>
                        <td>${clavier_prix.value}</td>
                        <td>${clavier_quantite.value}</td>
                        <td>${tot_clavier}</td>
                     </tr>
                     <tr class="total-row">
                        <th colspan=3 >Total</th>
                        <th>${tot_clavier + tot_scanner + tot_souris}</th>
                     </tr>
                     `;
    };
    };