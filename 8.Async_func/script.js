/**
 * XMLHttpRequest
 *
 * MINI-WORKSHOP: Skriv funktionen `getJSON` som kan hämta vilken URL som helst
 * och ÄNDÅ ta emot en callback som får två parametrar, dena om något går fel OCH 
 * den andra datan från om requesten lyckas.
 */

const getJSON = (callback, url) => {
  const request = new XMLHttpRequest();
  request.open("GET", url);

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4) {
      handleReadyStateFour(request,callback)
    }
  });
  request.send();
}
const showreq = (err, data) => {
  console.log(data);
  data
  ? renderUsers(data)
  : console.log(err);    
}

const renderUsers = (users) => {
  users.map((user)=>{
    document.querySelector("html").innerHTML += `${user.name}<br>`
  })
}

const handleReadyStateFour = (request,callback) => {
  return request.status === 200
  ? callback(false, JSON.parse(request.responseText))
  : callback("Error getting data! Status code is: " + request.status, null);
}

getJSON(showreq, "https://jsonplaceholder.typicode.com/users")