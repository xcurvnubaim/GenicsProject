function checkList(ev) {
    ev.target.classList.toggle('check');
    ev.target.classList.toggle('uncheck');
}

function hideList(ev) {
    console.log(ev);
    let par = ev.target.parentElement;
    // par.classList.toggle('hidden');
    par.remove();
}

function add() {
    let title = document.getElementById("title");
    let text = title.value;
    if (text != "") {
        let li = document.createElement("li");
        let toDoList = document.getElementById("ToDoList");
        li.className =
            "relative uncheck py-3 hover:bg-slate-300 pl-5 rounded-lg";
        li.appendChild(document.createTextNode(text));
        li.setAttribute('onclick', 'checkList(event)')

        let span = document.createElement("span");
        span.className = "absolute right-5 hover:bg-red-400 px-5 ";
        span.appendChild(document.createTextNode("X"));
        span.setAttribute('onclick', 'hideList(event)')
        li.appendChild(span);

        toDoList.appendChild(li);
    } else {
        alert("Ga boleh kosong");
    }
    title.value = "";
}