const element = document.getElementById("select")
const btns = document.getElementsByClassName("btn")

element.addEventListener("change", () => {
    let id;
    for (let i = 0; i < element.children.length; i++) {
        id = element.value === element.children[i].value ? i : id;
    }

    for (const resetBtn of btns) {
        resetBtn.style.backgroundColor = "#fff"
    }
    btns[id].style.backgroundColor = "#5796ff"
})

for (let i = 0; i < btns.length; i++) {
    const btn = btns[i]
    btn.addEventListener("click", () => {
        for (const resetBtn of btns) {
            resetBtn.style.backgroundColor = "#fff"
        }
        btn.style.backgroundColor = "#5796ff"
        element.value = btn.textContent
    })
}