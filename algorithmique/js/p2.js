let list = document.querySelector(".list");
let lst = genList();
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function genList() {
  let lst = [];
  for (let i = 0; i < 10; i++) {
    lst.push(Math.floor(Math.random() * 100));
  }
  return lst;
}

async function sortList(lst) {
    let swapped;
    do {
      swapped = false;
      for (let j = 0; j < lst.length - 1; j++) {
        if (lst[j] < lst[j + 1]) {
          j++;
        } else {
          [lst[j + 1], lst[j]] = [lst[j], lst[j + 1]];
          swapped = true;
          displayList(lst, j);
          await sleep(500);
          j = 0;
        }
      }
    } while (swapped);
    return lst;
  }
  

function displayList(lst, currentIndex) {
  list.innerHTML = "";

  for (let i = 0; i < lst.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = lst[i];
    if (i === currentIndex) {
      li.classList.add("current");
    }
    list.append(li);
  }
}

async function launch() {
  const sorted = await sortList(lst);
  console.log(sorted);
}

displayList(lst, null)

document.getElementById("launch").onclick = function () {
    launch()
}

document.getElementById("mix").onclick = function () {
    lst = genList()
    displayList(lst, null)
}

document.getElementById("next").onclick = function () {
    location.href = "./questions.html"
}