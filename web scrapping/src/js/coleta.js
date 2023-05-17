const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://steamcommunity.com/market/itemordershistogram?country=BR&language=brazilian&currency=7&item_nameid=176366664');

xhr.onload = function() {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    console.log(data);
  } else {
    console.log('penis: ' + xhr.status);
  }
};
xhr.send();
xhr.onload()


