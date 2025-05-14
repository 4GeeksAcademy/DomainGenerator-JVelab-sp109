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

    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
          domains.push(pronoun[i] + adj[j] + noun[k] + ".com");
          console.log(domains);
        
        }
      }
    }
    return domains;
  }
  generateAllDomains()
  document.querySelector("#dominios").innerHTML = domains.join("<br>");
};
