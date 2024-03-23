const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

async function displayUser(username) { //Se agrega la palabra async
  $n.textContent = 'cargando...';

  try{ // se agrega el try catch
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json();// se elimina el console y se estraen los datos de response
  //Se cambio el tipo de comillas
  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
  }catch (err){
    handleError(err); //se manda a llamar la funcion de error
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`; //se agrega el signo de $ y el ;
}

displayUser('stolinski').catch(handleError);