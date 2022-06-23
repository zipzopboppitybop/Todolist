const add = document.getElementById("addBtn");
const clear = document.getElementById("clearBtn");
let ulEl = document.getElementById("list");
let items = document.getElementById("itemEl");

add.addEventListener('click', function() {
    let item = items.value;
    const li = document.createElement('li');
    li.innerHTML = item;
    ulEl.appendChild(li);
})

clear.addEventListener('dblclick', function() {
    ulEl.innerHTML = '';
})