
const counter = document.getElementById("counter");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const clearBtn = document.getElementById("clear");
const error = document.getElementById("error");

let count = 0;
function updateCounter() {
  counter.innerHTML = count;
  if (count === 0) {
    error.style.visibility = "visible"; 
    decrementBtn.disabled = true; 
  } else {
    error.style.visibility = "hidden"; 
    decrementBtn.disabled = false; 
  }

  
  if (count === 0) {
    clearBtn.style.display = "none"; 
  } else {
    clearBtn.style.display = "block"; 
  }
}
incrementBtn.addEventListener("click", () => {
  count++;
  updateCounter();
});


decrementBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    updateCounter();
  }
});


clearBtn.addEventListener("click", () => {
  count = 0;
  updateCounter();
});


updateCounter();
