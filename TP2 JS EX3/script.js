function verifierConnexion() {
    var type = document.querySelector('input[name="type"]:checked');

    var login = document.getElementById("login").value;
    var password = document.getElementById("password").value;

    if (type === null) {
        alert("Veuillez choisir un type d'utilisateur.");
        return;
    }

    if (type.value === "admin") {
        if (login === "admin" && password === "admin") {
            alert("Admin est connecté");
        } else {
            alert("Login ou mot de passe invalide");
        }
    } else if (type.value === "invite") {
        if (login === "user" && password === "user") {
            alert("Invité est connecté");
        } else {
            alert("Login ou mot de passe invalide");
        }
    }
}
