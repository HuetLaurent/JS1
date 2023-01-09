//Bolean

    /*let variable1 = true;
    console.log(variable1);*/

//number

    /*let variable2 = 5;
    console.log(variable2);*/

//text

    /*let variable3 = "No Father ?";
    console.log(variable3);*/

//##################################################

//parseInt

    /*let variable4 = "7.7";
    console.log(parseInt(variable4));*/

//parseFloat

    //console.log(parseFloat(variable4));

//toString

    //console.log(variable4.toString());

//##################################################

//addition

    //console.log(7+7);

//soustraction

    //console.log(14-4);

//multiplication

    //console.log(7*7);

//division

    //console.log(10/5);

//##################################################

//comparaison : différence entre "==" et "===",  

    /*let variable5 = 45;
    let variable6 = "45";

    console.log(variable5 == variable6);
    console.log(variable5 === variable6);*/

//##################################################

//condition if et else 

    /*for(let i = 1 ; i < 5 ; i++) {
        if (i<4) {
            console.log(i);
        } else {
            console.log("stop !");
        }
    }*/

//##################################################

//exercices

//exercice 1

/*
let a = 5;
let b = 9;
let c = 4;

if (a == b && a == c) {
    console.log("les variables sont égales.");
} else if (a == b || a == c || b == c) {
    console.log("une des deux variables sont égales.");
} else {
    console.log("aucune variable sont égales.");
}

//exercice 2

let number = prompt("Bienvenue : entrez votre âge");

if (number >= 100) {
    console.log(prompt("supérieur à 100."));
} else {
    console.log(prompt("inférieur à 100."));
}

if (number < 18) {
    console.log("vous êtes mineur.");
} else if (number == 18) {
    console.log("vous pouvez picoler :)");
} else if (number < 65) {
    console.log("vous êtes majeur.");
} else if (number < 67) {
    console.log("vous être à la retraite.");
} else {
    console.log("RIP");
}

//exercice 3

let couleur1 = prompt("entrez une couleur : rouge, bleu, jaune");
let couleur2 = prompt("entrez une deuxième couleur : rouge, bleu, jaune");

if (couleur1 == "bleu" && couleur2 == "bleu") {
    //bleu
    console.log("bleu");
} else if (couleur1 == "bleu" && couleur2 == "rouge") {
    //bleu
    console.log("violet");
} else if (couleur1 == "bleu" && couleur2 == "jaune") {
    //bleu
    console.log("vert");
} else if (couleur1 == "rouge" && couleur2 == "rouge") {
    //rouge
    console.log("rouge");
} else if (couleur1 == "rouge" && couleur2 == "bleu") {
    //rouge
    console.log("violet");
} else if (couleur1 == "rouge" && couleur2 == "jaune") {
    //rouge
    console.log("orange");
} else if (couleur1 == "jaune" && couleur2 == "jaune") {
    //jaune
    console.log("jaune");
} else if (couleur1 == "jaune" && couleur2 == "bleu") {
    //jaune
    console.log("vert");
} else if (couleur1 == "jaune" && couleur2 == "rouge") {
    //jaune
    console.log("orange");
} else {
    //rien
    console.log("valeurs incorrecte");
}

//exercice 4

//switch case

switch(true){
    case number < 18 :
        console.log("vous êtes mineur.");
        break;
    case number == 18 :
        console.log("vous pouvez picoler :)");
        break;
    case number < 65 :
        console.log("vous êtes majeur.");
        break;
    case number < 67 :
        console.log("vous être à la retraite.");
        break;
    case number > 67 :
        console.log("RIP");
        break;
}
*/

//##################################################

//function

//exercice 5

/*let NomPrenom = (nom, prenom) => {
    console.log('Je suis ' + nom + ' ' + prenom)
}

NomPrenom("petit", "monsieur");

NomPrenom("passe", "partout");*/

//exercice 6
/*let a = 0;

let UneInterval1 = () => {
    a++;
    console.log(a);
    if (a == 5) {
        clearInterval(MonInterval1);
    }
}*/

//MonInterval1 = setInterval(UneInterval1, 1000);

/*setTimeout(() => {console.log(1)}, 1000);
setTimeout(() => {console.log(2)}, 2000);
setTimeout(() => {console.log(3)}, 3000);
setTimeout(() => {console.log(4)}, 4000);
setTimeout(() => {console.log(5)}, 5000 );*/

//MonInterval2 = setTimeout(UneInterval2, 5000)

//exercice 7

/*let Bissextile = (year) => {
    if (year % 4 != 0) {
        console.log(false);
    } else if (year % 100 != 0 || year % 4 == 0) {
        console.log(true);
    } else if (year % 400 != 0 || year % 100 == 0 || year % 4 == 0) {
        console.log(false);
    }
}

Bissextile(2022);*/

//exercice 8

function num (min, max) {
    return Math.round(Math.random() * (max - min) + min);
}