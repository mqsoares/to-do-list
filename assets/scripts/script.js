const options = document.querySelectorAll("input[name='option']");
const remove = document.querySelector("#remove");
const inputs = document.querySelector("#inputs");
const txtInput = document.querySelector("#taskInput");
const submit = document.querySelector("#submit");
const tasks = document.querySelector("#tasks");

for(let option of options) {
    option.addEventListener('click', function() {
        let isChecked;
        
        if(option.checked){
            isChecked = option.value;
        }
        toggleInputs();
    })    
}

function toggleInputs() {
    if(remove.checked) {
        inputs.style.display = "none"
        console.log('teste1')
    } else {
        inputs.style.display = "block"
        console.log('teste2')
    }
}

submit.addEventListener('click', () => {
    if (txtInput.value.length > 0) {
        const div = document.createElement("div");
        const check = document.createElement("input");
        const itemList = document.createElement("label");

        check.type = "checkbox";

        itemList.textContent = txtInput.value;
        itemList.classList.add("labelItemList");

        tasks.appendChild(div);
        div.appendChild(check);
        div.appendChild(itemList);
        txtInput.value = '';
    }
});