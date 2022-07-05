const options = document.querySelectorAll("input[name='option']");
const remove = document.querySelector("#remove");
const inputs = document.querySelector("#inputs");
const txtInput = document.querySelector("#taskInput");
const ulTasks = document.querySelector("#tasks");
const tag = document.querySelector(".tag");

for(let option of options) {
    option.addEventListener('click', toggleInputs);
}

function toggleInputs() {
    if(remove.checked) {
        inputs.style.display = "none";
        tag.textContent = 'Clique duplo para remover.'
    } else {
        inputs.style.display = "block";
        tag.textContent = 'Clique duplo para marcar como feito.'
    }
}

function createItem() {
    if (txtInput.value.length > 0) {
        const itemList = document.createElement("li");
        itemList.textContent = txtInput.value;
        itemList.setAttribute("class", "liItem");
        ulTasks.appendChild(itemList);
        txtInput.value = '';
    }
}

function doneRemoveItem(e) {
    let item = e.target;    
    if(remove.checked) {
        e.target.remove();
    } else {
        item.classList.toggle("done") 
    }
}

inputs.addEventListener('submit', (e) => {
    e.preventDefault();
    createItem()
})

ulTasks.addEventListener('dblclick', doneRemoveItem);