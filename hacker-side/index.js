function loadHack(){
  fetch('/xss/hacker-side/hacker-read.php', {
    method: 'get',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }
  }).then(res => res.text())
    .then((res) => {
      const div = document.createElement('div');
      div.append(res);
      document.body.append(div);
    });
}
