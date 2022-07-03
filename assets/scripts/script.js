const options = document.querySelectorAll("input[name='option']");
const txtInput = document.querySelector("#taskInput");
const submit = document.querySelector("#submit");
const tasks = document.querySelector("#tasks");

submit.addEventListener('click', () => {
    if (txtInput.value.length > 0 && check() == "add") {
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
    } else {
        alert('Você precisa alguma coisa!')
    }
});

function check() {
    let isChecked;
    for(option of options) {
        if(option.checked){
            isChecked = option.value;
        }
    }
    return isChecked;
}