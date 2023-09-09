// compter les voyelles

// function getCount(str) {
//     let vowelsTab = ["a","e","i","o","u"];
//     let count = 0;
//     for(let i = 0 ; i < str.length; i++) {
//         for (let j = 0 ; j <  vowelsTab[j]; ) {
//             if(str[i] === vowelsTab[j] ) {
//                 count++;
//             }
//         }
//     }
//     return count;
// }
// console.log(getCount("bonjour comment vas tu ?"));

// Pair ou Impaire

// function pairOuImpaire(nombre) {
//     if (nombre % 2 === 0) {
//         return "pair";
//     } else {
//         return "impaire";
//     }
// }
// console.log(pairOuImpaire("2"));


function getMiddle(centrale) {
    if (centrale.length % 2 === 0) {
        const motsDebut = centrale.length / 2 - 1;
        const middleEnd = motsDebut + 2;
        return centrale.slice(motsDebut, middleEnd);
    } else {
        const motsMillieu = Math.floor(centrale.length / 2);
        return centrale.charAt(motsMillieu);
    }
}

const result = getMiddle("merveilleusement");
console.log(result);
