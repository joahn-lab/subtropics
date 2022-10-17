const list = document.createElement('ul');
const info = document.createElement('p');
const html = document.querySelector('html');
const input = document.querySelector('input');
const a = document.querySelector('a');

function erasethem() {alert('godspeed you');}

function password() {entry = prompt('if you are the recipient of this letter, insert 4');
if (entry == "79") {location.href="./letters/to-sewon-210915.html";}
else {alert("i think you press the wrong number.");}
}

function password2() {entry = prompt('if you are the recipient of this letter, insert 4');
if (entry == "35") {location.href="./letters/to-chaewon-211015.html";}
else {alert("i think you press the wrong number.");}
}

// info.textContent = 'Below is a forgettable list. Click anywhere on the page to add a new item you want to forget. Click an existing list item to change its text to something else.';

document.body.appendChild(info);
document.body.appendChild(list);


eraseall = function() {
  const listItem = document.createElement('li');
  const listContent = prompt('지우고 싶은 말을 써 주세요.');
  var newContent = document.createTextNode("Erase me!");
  list.appendChild(newContent);
  listItem.textContent = listContent;
  list.appendChild(listItem);
  
  listItem.onclick = function(e) {
    e.stopPropagation();
    const listContent = prompt('돌이킬 말을 써 주세요.');
    this.textContent = listContent;
  }
}
