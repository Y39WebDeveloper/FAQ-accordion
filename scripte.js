let btns = document.querySelectorAll("li .btn");
for(let i = 0; i < btns.length; i++){
    let btn = btns[i]
    btn.addEventListener('click', (e) => {
        e.currentTarget.parentElement.classList.toggle("active")
        for(let j = 0; j < btns.length; j++){
            if(i == j){
                continue;
            }else{
                btns[j].parentElement.classList.remove("active")
            }
        }
        let btn = btns[i]
    })
}