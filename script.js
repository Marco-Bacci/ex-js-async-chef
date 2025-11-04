// In questo esercizio, utilizzerai async/await per creare la funzione getChefBirthday(id). Questa funzione accetta un id di una ricetta e deve:
// Recuperare la ricetta da https://dummyjson.com/recipes/{id}
// Estrarre la proprietà userId dalla ricetta
// Usare userId per ottenere le informazioni dello chef da https://dummyjson.com/users/{userId}
// Restituire la data di nascita dello chef

async function getChefBirthday(id) {
  const ricettaRes = await fetch(`https://dummyjson.com/recipes/${id}`);
  const ricetta = await ricettaRes.json();
  const userId = ricetta.userId;
  const userRes = await fetch (`https://dummyjson.com/users/${userId}`);
  const user = await userRes.json();
  return user.birthDate;
}

(async () => {
  const chefBirthday = await getChefBirthday(1);
  console.log(`Data di nascita dello chef: ${chefBirthday}`);
})();
