// let button__click = document.querySelector('.button__click')

// function onButtonClick(){
//     button__click.style.display = 'block'
// }
// function onButton(){
//   button__click.style.display = 'none'
// }

// const btn = document.querySelectorAll(".subscribe");
// const modal = document.querySelector(".modal-subscribe");
// console.log(btn);
// btn.addEventListener("click", () => {
//   modal.style.display = "block";
// });

// const btnSubscribe = document.querySelector(".subscribe");
// const modalSubscribe = document.querySelector(".modal-subscribe");
// const btnCloseSub = document.querySelector("#btn-close-sub");
// // console.log(modalSubscribe);

// btnSubscribe.addEventListener("click", () => {
//   modalSubscribe.style.display = "block";
//   document.querySelector(".container").style.display = "none";
//   document.querySelector("footer").style.display = "none";
// });

// btnCloseSub.addEventListener("click", () => {
//   modalSubscribe.style.display = "none";
//   document.querySelector(".container").style.display = "block";
//   document.querySelector("footer").style.display = "block";
// });
// dropdownActivate.addEventListener("click", () => {
//   dropdown.style.display = "block";
// });
// dropdownActivatename.addEventListener("click", () => {
//   dropdown.style.display = "block";
// });
const dropdownActivate = document.querySelector("#dropdown-icon");
const dropdownActivatename = document.querySelector("#dropdown-name")

const btn = document.querySelector(".subscribe");
const btnClose = document.querySelector("#btn-close");
const modal = document.querySelector(".modal-subscribe");
const wrapper = document.querySelector(".wrapper");

const dropdown = document.querySelector(".list-dropdown");
const loginModal = document.querySelector(".login-block-modal");
const loginBtn = document.querySelector("#login-btn");
const quitBtn = document.querySelector("#quit");
const registerModal = document.querySelector(".register-block-modal");
const registerbtn = document.querySelector("#register-btn-modal");
console.log(loginModal);

dropdownActivate.addEventListener('click', () => {
  dropdown.style.display = 'block'
})

btn.addEventListener("click", () => {
  modal.style.display = "block";
});
btnClose.addEventListener("click", () => {
  modal.style.display = "none";
});

loginBtn.addEventListener("click", () => {
  loginModal.style.display = "block";
});
registerbtn.addEventListener("click", () => {
  loginModal.style.display = "none";
  registerModal.style.display = "block";
});

quitBtn.addEventListener("click", () => {
  registerModal.style.display = "none";
});
