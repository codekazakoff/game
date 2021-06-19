
urlJson = 'http://jsonplaceholder.typicode.com/users';



async function fetched(url){
  try{
    const api = await fetch(url)
    const res = await api.json();
    console.log(res);
  }
  catch(err){
      console.log(err,'salom mana haqiqiy error');
  }

}
fetched(urlJson)