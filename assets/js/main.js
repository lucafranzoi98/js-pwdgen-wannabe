const userName = prompt('Inserisci il tuo nome:');

const userSurname = prompt('Inserisci il tuo cognome:');

const userColour = prompt('Inserisci il tuo colore preferito:');

const pswUser = `${userName}${userSurname}${userColour}23`;

console.log(pswUser);

document.getElementById("psw").innerHTML = pswUser;
