// ============ counter js ============
let counting = document.querySelector(".counting");
let counter_number = counting.innerHTML;
let counter_up = document.querySelector(".counter_up");
let counter_down = document.querySelector(".counter_down");
let counter_reset = document.querySelector(".counter_reset");
let error_text = document.querySelector(".error_text");
let countStart = 0;
let countEnd = 0;

// ========== counter up js ===========
let counterUpJs = () => {
  function counterJs() {
    countStart++;
    counting.innerHTML = countStart;
    if (countStart == counter_number) {
      clearInterval(counterInterval);
    }
  }
  let counterInterval = setInterval(() => {
    counterJs();
  }, 100);
};
counterUpJs();
// ========== counter up js ===========

// ========== counter down js ===========
let counterDownJs = () => {
  function counterJs() {
    countStart--;
    counting.innerHTML = countStart;
    if (countStart == countEnd) {
      clearInterval(counterInterval);
    }
  }
  let counterInterval = setInterval(() => {
    counterJs();
  }, 100);
};
// ========== counter down js ===========

// ========= counter button work ============
counter_reset.addEventListener("click", () => {
  countStart = counting.innerHTML;
  if (countStart == 0) {
    error_text.innerHTML = "The Counter is already reset";
  } else {
    countStart = 0;
    counting.innerHTML = countStart;
    error_text.innerHTML = "";
  }
});

counter_up.addEventListener("click", () => {
  countStart = counting.innerHTML;
  if (countStart == 0) {
    counterUpJs();
    counting.innerHTML = countStart;
    error_text.innerHTML = "";
  } else {
    error_text.innerHTML = "The Counter is already started";
  }
});

counter_down.addEventListener("click", () => {
  countStart = counting.innerHTML;
  if (countStart <= 0) {
    error_text.innerHTML = "The Counter can't be negative";
  } else {
    error_text.innerHTML = "";
    counterDownJs();
    counting.innerHTML = countStart;
  }
});
// ========= counter button work ============

// ============ counter js ============
