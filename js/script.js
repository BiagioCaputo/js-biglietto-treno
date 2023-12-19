console.log("JS OK");

const finalPrice = document.getElementById("target");
//chiedo all'utente quanti km deve percorrere e la sua età

const userDistance = parseInt(prompt("Quanti km devi percorrere?" , "10"));
const userAge = parseInt(prompt("Quanti anni hai ?" , "17"));

console.log("Km da percorrere: " , userDistance, "Età:", userAge);


//calcolo il prezzo del biglietto intero

const price = userDistance * 0.21;

console.log("Costo biglietto senza sconto: " , price );

const price20 = price - price * 20 / 100;

const price40 = price - price * 40 / 100;


//recupero il prezzo applicando eventualmente lo sconto

if (userAge < 65 && userAge > 17){
    finalPrice.innerText =  price.toFixed(2);
}

else{

    if (userAge < 18){
        finalPrice.innerText = price20.toFixed(2);
    }
    
    else{
        finalPrice.innerText = price40.toFixed(2); 
    }
    
}

