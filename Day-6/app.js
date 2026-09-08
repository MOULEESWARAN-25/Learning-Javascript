// console.log("JavaScript started");

// const btn1 = document.querySelector("#btn1");
// const btn2 = document.querySelector("#btn2");
// const btn3 = document.querySelector("#btn3");

// console.log("btn1 =", btn1);
// console.log("btn2 =", btn2);
// console.log("btn3 =", btn3);

// btn1.addEventListener("click", () => {
//   console.log("Button 1 clicked");
// });

// btn2.addEventListener("click", () => {
//   console.log("Button 2 clicked");
// });

// btn3.addEventListener("click", () => {
//   console.log("Button 3 clicked");
// });
// console.log("JavaScript finished");

// document.addEventListener("DOMContentLoaded", () => {
//   console.log("DOM is ready");
// });

// console.log("===== app.js STARTED =====");

// const button = document.querySelector("#myButton");

// console.log("Button found:", button);

// if (button === null) {
//   console.error("❌ BUTTON DOES NOT EXIST YET!");
// } else {
//   console.log("✅ BUTTON EXISTS!");

//   button.addEventListener("click", () => {
//     console.log("Button clicked!");
//   });
// }

// console.log("===== app.js FINISHED =====");

const status = document.querySelector("#status");
status.textContent = "app.js is working!";

const script = document.createElement("script");

script.src = "https://example.com/library.js";

script.onload = function () {
  status.textContent = "app.js is working and the library loaded!";
  console.log("Library loaded!");
};

script.onerror = function () {
  status.textContent = "app.js is working, but the library URL failed.";
  console.log("Library failed!");
};

document.head.append(script);
