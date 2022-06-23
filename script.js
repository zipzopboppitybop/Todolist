let items = []
const add = document.getElementById("addBtn")
const clear = document.getElementById("clearBtn")
const UList = document.getElementById("list")
const input = document.getElementById("itemEl")

add.addEventListener('click', function() {
    items.push(input.ariaValueNow)
    input.value = " ";
})

clear.addEventListener('dblclick', function() {

})