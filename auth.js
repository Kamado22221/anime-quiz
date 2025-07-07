// auth.js

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    window.location.href = "quiz.html";
  }
});

function login() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  firebase.auth().signInWithEmailAndPassword(email, pass)
    .catch(error => alert("Erreur : " + error.message));
}

function register() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  firebase.auth().createUserWithEmailAndPassword(email, pass)
    .catch(error => alert("Erreur : " + error.message));
}
