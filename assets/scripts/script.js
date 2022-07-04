const options = document.querySelectorAll("input[name='option']");
const remove = document.querySelector("#remove");
const inputs = document.querySelector("#inputs");
const txtInput = document.querySelector("#taskInput");
const submit = document.querySelector("#submit");
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

submit.addEventListener('click', () => {

    if (txtInput.value.length > 0) {
        const itemList = document.createElement("li");
        itemList.textContent = txtInput.value;
        itemList.setAttribute("class", "liItem");
        ulTasks.appendChild(itemList);
        txtInput.value = '';
    }

})

ulTasks.addEventListener('dblclick', function(e) {    

    let test = e.target;
    
    if(remove.checked) {
        e.target.remove();
    } else {
        test.classList.toggle("done") 
    }

})