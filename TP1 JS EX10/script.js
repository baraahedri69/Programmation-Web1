var mois = prompt("Veuillez saisir un numéro de mois (entre 1 et 12) :");
mois = Number(mois);
if (isNaN(mois) || mois < 1 || mois > 12) {
    alert("Saisie incorrecte ! Veuillez entrer un nombre entre 1 et 12.");
} else {
    var nomMois = "";
    var nbJours = 0;

    switch (mois) {
        case 1:
            nomMois = "Janvier";
            nbJours = 31;
            break;
        case 2:
            nomMois = "Février";
            nbJours = 28;
            break;
        case 3:
            nomMois = "Mars";
            nbJours = 31;
            break;
        case 4:
            nomMois = "Avril";
            nbJours = 30;
            break;
        case 5:
            nomMois = "Mai";
            nbJours = 31;
            break;
        case 6:
            nomMois = "Juin";
            nbJours = 30;
            break;
        case 7:
            nomMois = "Juillet";
            nbJours = 31;
            break;
        case 8:
            nomMois = "Août";
            nbJours = 31;
            break;
        case 9:
            nomMois = "Septembre";
            nbJours = 30;
            break;
        case 10:
            nomMois = "Octobre";
            nbJours = 31;
            break;
        case 11:
            nomMois = "Novembre";
            nbJours = 30;
            break;
        case 12:
            nomMois = "Décembre";
            nbJours = 31;
            break;
    }
    alert("Mois : " + nomMois + "\nNombre de jours : " + nbJours);
}
