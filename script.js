//1. Panaudoti Javascript "use-strict" režimą.
"use strict";

//2. Apsirašyti 4 kintamuosius: skaicius1, skaicius2, skaicius3, skaicius4.

var skaicius1=5;
var skaicius2=2;
var skaicius3=7;
var skaicius4=1;
var suma;
var sandauga;

//3. Į konsolę išvesti visus 4 skaičius, jų visų sumą ir sandaugą.

suma= skaicius1+skaicius2+skaicius3+skaicius4;
sandauga=skaicius1*skaicius2*skaicius3*skaicius4;
console.log ('Pirmas skaičius yra', skaicius1);
console.log ('Antras skaičius yra', skaicius2);
console.log ('Trečias skaičius yra', skaicius3);
console.log ('Ketvirtas skaičius yra', skaicius4);
console.log ('Šių skaičių suma yra', suma);
console.log ('Šių sandauga suma yra', sandauga);

//3.1. Sukeisti skaicius1 ir skaicius2 reikšmes vietomis, 
//pasinaudojant laikinuoju kintamuoju.

var laikinas;
laikinas=skaicius1; //5
skaicius1=skaicius2; //2
skaicius2=laikinas;

console.log('Sukeistas pirmas skaičius yra', skaicius1);
console.log('Sukeistas antras skaičius yra', skaicius2);

//4. Sukeisti skaicius3 ir skaicius4 reikšmes vietomis
//be laikinojo kintamojo.

[skaicius1, skaicius2] = [skaicius2, skaicius1]

//5. Į alert išvesti sukeitimo rezultatus.

// alert('Antrą kartą sukeistas pirmas skaičius yra ' +skaicius1);
// alert('Antrą kartą sukeistas antras skaičius yra ' +skaicius2);

//6. Susikurti kintamąjį maxSkaicius, jam priskirti maksimalią įmanomą
//skaitinę reikšmę (infinity netinka) ir išvesti į konsolę.
var masyvas = [skaicius1, skaicius2, skaicius3, skaicius4];
var maxSkaicius = masyvas[0];

for (var i = 1; i < masyvas.length; ++i) {
   if (masyvas[i] > maxSkaicius) {
       maxSkaicius = masyvas[i];
   }
}
console.log('Didžiausias skaičius yra', maxSkaicius);

//1. Susikurti kintamuosius: skaicius5, skaicius6.
//2. Sukeisti kinamųju reikšmes skaicius5 ir skaicius6 pasitelkiant XOR operatorių.
//3. Rezultatą patalpinti į HTML dokumento div žymėje, kurios id="Rezultatas".

var skaicius5=10;
var skaicius6=30;
console.log('Penktas skaičius yra', skaicius5);
console.log('Šeštas skaičius yra', skaicius6);

skaicius5= skaicius5 ^ skaicius6;
skaicius6= skaicius5 ^ skaicius6;
skaicius5= skaicius5 ^ skaicius6;

document.getElementById("sukeistas1").innerHTML = "Penktas sukeistas skaičius yra "+skaicius5;
document.getElementById("sukeistas2").innerHTML = "Šeštas sukeistas skaičius yra "+skaicius6;