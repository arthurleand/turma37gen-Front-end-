let nome = document.querySelector("#name");
let email = document.querySelector("#email");
let subject = document.querySelector("#subject");

let nameOk = false;
let emailOk = false;
let subjectOk = false;

function validName() {
  let txtName = document.querySelector("#txtName");

  if (nome.value.length <= 3) {
    txtName.innerHTML = "Invalid Name";
    txtName.style.color = "red";
  } else {
    txtName.innerHTML = "Valid Name";
    txtName.style.color = "green";
    nameOk= true;
  }
}

function validEmail() {
  let txtEmail = document.querySelector("#txtEmail");
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (email.value.match(regex)) {
    txtEmail.innerHTML = "Valid Email";
    txtEmail.style.color = "green";
    emailOk= true;
  } else {
    txtEmail.innerHTML = "Invalid Email";
    txtEmail.style.color = "red";
  }
}

function validSubject(){
    let txtSubject = document.querySelector("#txtSubject");

    if (subject.value.length >= 100) {
        txtSubject.innerHTML= "Maximum 100 characters";
        txtSubject.style.color= "red";
        txtSubject.style.display = 'block';
    } else {
      txtSubject.style.display = 'none';
      subjectOk= true;
    }
}

function send(){
  if(nameOk == true && emailOk == true && subjectOk == true){
    alert("Form submitted successfully");
  }
  else{
    alert("Fill in the fields correctly");
  }
}
