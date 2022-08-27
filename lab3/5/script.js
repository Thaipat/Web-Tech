function validateForm() {
    let fullname = document.getElementById("FullName").value;
    let phonenumber = document.getElementById("PhoneNumber").value;
    let email = document.getElementById("Email").value;
    let company = document.getElementById("Company").value;

    let urfullname = document.getElementById("UrFullName");
    let urphonenumber = document.getElementById("UrPhoneNumber");
    let uremail = document.getElementById("UrEmail");
    let urcompany = document.getElementById("UrCompany");

    urfullname.innerHTML = fullname;
    urphonenumber.innerHTML = phonenumber
    uremail.innerHTML = email
    urcompany.innerHTML = company
}