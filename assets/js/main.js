const userName = prompt('Inserisci il tuo nome:');

const userSurname = prompt('Inserisci il tuo cognome:');

const userColour = prompt('Inserisci il tuo colore preferito:');

const userKey = Number(prompt('Inserisci un numero chiave:'));

const secretKey = userKey + 23;

const pswUser = `${userName}${userSurname}${userColour}${secretKey}`;

console.log(pswUser);

document.getElementById("psw").innerHTML = pswUser;
