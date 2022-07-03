let txtInput = document.getElementById("task-input");
let submit = document.getElementById("submit");
let tasks = document.getElementById("tasks");

submit.onclick = function() {
    if (txtInput.value.length > 0) {
        let div = document.createElement("div");
        let check = document.createElement("input");
        let label = document.createElement("label");
        check.type = "checkbox";
        check.classList.add("checkbox-size") 
        label.textContent = txtInput.value;
        label.classList.add("label-size");
        tasks.appendChild(div);
        div.appendChild(check);
        div.appendChild(label);
    }
}