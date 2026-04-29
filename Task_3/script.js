
let count = 0;

const countDisplay = document.getElementById("count");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");

function updateCount(){
   countDisplay.textContent = count;
}

incrementBtn.addEventListener( "click",() => {
    count++;
    updateCount();
})

decrementBtn.addEventListener("click", () => {
    if (count >0 ){
    count--;
    updateCount();
    }
})

resetBtn.addEventListener("click", () => {
    count = 0;
    updateCount();
})