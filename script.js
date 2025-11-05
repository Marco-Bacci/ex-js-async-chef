// In questo esercizio, utilizzerai async/await per creare la funzione getChefBirthday(id). Questa funzione accetta un id di una ricetta e deve:
// Recuperare la ricetta da https://dummyjson.com/recipes/{id}
// Estrarre la proprietà userId dalla ricetta
// Usare userId per ottenere le informazioni dello chef da https://dummyjson.com/users/{userId}
// Restituire la data di nascita dello chef

async function getChefBirthday(id) {
  let ricetta;
  try {
    const ricettaRes = await fetch(`https://dummyjson.com/recipes/${id}`);
    ricetta = await ricettaRes.json();
  } catch (error) {
    console.error(error);
    throw new Error(`Ricetta con id ${id} non recuperata`);
  }
  const userId = ricetta.userId;
  let user;
  try {
    const userRes = await fetch(`https://dummyjson.com/users/${userId}`);
    user = await userRes.json();
  } catch (error) {
    console.error(error);
    throw new Error(`usercon id ${id} non recuperato`);
  }
  return dayjs(user.birthDate).format("DD/MM/YYYY");
}

(async () => {
  try {
    const chefBirthday = await getChefBirthday(1);
    console.log(`Data di nascita dello chef: ${chefBirthday}`);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("fine!");
  }
})();
