let lstelems = ["pomme","banane","poire","fraise"];

function shuffle(lst) {
    for (let i = lst.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [lst[i], lst[j]] = [lst[j], lst[i]];
    }
    return lst;
}

function displayList(lst) {
    if (document.querySelector(".lstelem")) {
        document.querySelector(".lstelem").remove();
    }
    const lstelem = document.createElement("h1");
    lstelem.classList.add("lstelem");
    lstelem.innerHTML = shuffle(lst);
    document.body.appendChild(lstelem);
}

document.getElementById("shuffle").addEventListener("click", () => {
    lstelems = shuffle(lstelems);
    displayList(lstelems);
})

function find(lst) {
    const find = document.getElementById("find").value;
    i = 0;
    j = 0;
    found = false;
    for (i = 0; i < lst.length; i++) {
        if (lst[i] == find) {
            j = i;
            found = true;
        }
    }
    if (found === false) {
        alert("l'element n'existe pas");
    } else {
        alert("l'element existe et se trouve en position " + j);
    }
}

document.getElementById("find").addEventListener("change", () => {
    find(lstelems);
})

displayList(lstelems);

document.getElementById("next").onclick = function () {
    location.href = "./questions.html"
}