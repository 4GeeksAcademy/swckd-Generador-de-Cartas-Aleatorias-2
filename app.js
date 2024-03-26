window.onload = function() {
    //write your code here
    const PALOS = ["♥", "♠", "♣", "♦"];
    const CARTAS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    
    let palos = document.getElementsByClassName("palos");
    let numero = document.getElementsByClassName("numero");
  
    function paloAleatorio() {
        return PALOS[Math.floor(Math.random() * 4)];
    }

    let palo = paloAleatorio();

    function numerosAleatorios () {
        return Math.floor(Math.random() * 12);

    }
    let numeroAleatorio = numerosAleatorios();
    // const paloAleatorio = paloAleatorio();
  
    palos[0].innerHTML = palo;
    palos[1].innerHTML = palo;

    numero[0].innerHTML = numerosAleatorios();


  
  };
  