function saveData() {
    let email, password, firstname, lastname, address;
    firstname = document.getElementById("firstname").value;
    lastname = document.getElementById("lastname").value;
    address = document.getElementById("address").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    console.log(firstname);
    localStorage.setItem("firstname", firstname);
    localStorage.setItem("lastname", lastname);
    localStorage.setItem("address", address);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
}