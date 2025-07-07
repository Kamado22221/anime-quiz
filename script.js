// script.js

firebase.auth().onAuthStateChanged(user => {
  if (!user) {
    window.location.href = "index.html";
  }
});

function logout() {
  firebase.auth().signOut().then(() => {
    window.location.href = "index.html";
  });
}

const quizContainer = document.getElementById("quiz-container");
quizContainer.innerHTML = `
  <p>Question : Quel est le nom du personnage principal de Naruto ?</p>
  <button onclick="alert('Correct !')">Naruto</button>
  <button onclick="alert('Faux !')">Sasuke</button>
  <button onclick="alert('Faux !')">Kakashi</button>
`;
