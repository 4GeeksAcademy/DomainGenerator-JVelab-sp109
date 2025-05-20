import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let domains = [];
  function generateAllDomains () {
    domains = []; // al inicio de generateAllDomains

    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
          domains.push(pronoun[i] + adj[j] + noun[k] + ".com");
          ;
        
        }
      }
    }
    return domains;
  }

  window.agregarValor = function () {
    const inputPronoun = document.getElementById('pronoun');
    const inputValorPronoun = inputPronoun.value.trim();
    if (inputValorPronoun != "") {
      
      pronoun.push(inputValorPronoun);
      inputPronoun.value = ''; // Limpiar input
      generateAllDomains()
      document.querySelector("#dominios").innerHTML = domains.join("<br>");    
    }
  const inputAdjetive = document.getElementById('adjetive');
  const inputValorAdjetive = inputAdjetive.value.trim();
  if (inputValorAdjetive != "") {
      
      adj.push(inputValorAdjetive);
      inputAdjetive.value = ''; // Limpiar input
      generateAllDomains()
      document.querySelector("#dominios").innerHTML = domains.join("<br>");    
    }
    const inputNoun = document.getElementById('noun');
    const inputValorNoun = inputNoun.value.trim();
    if (inputValorNoun != "") {
      
      noun.push(inputValorNoun);
      inputNoun.value = ''; // Limpiar input
      generateAllDomains()
      document.querySelector("#dominios").innerHTML = domains.join("<br>");    
    }
}
  generateAllDomains()
  document.querySelector("#dominios").innerHTML = domains.join("<br>");
};
