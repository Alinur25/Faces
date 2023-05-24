const btn1 = document.querySelector("#checkout1");
const btn2 = document.querySelector("#checkout2");
const closeBtn = document.querySelector("#btn-close");
const modal = document.querySelector(".modal-subscribe");
const activateBtn = document.querySelector("#activate-btn");
const checkout = document.querySelector("#checkout-modal");
const wrapper = document.querySelector(".wrapper");
console.log(checkout);
btn1.addEventListener("click", () => {
    modal.style.display = "block";
});
btn2.addEventListener("click", () => {
    modal.style.display = "block";
});
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});
activateBtn.addEventListener("click", () => {
    wrapper.innerHTML = '<div class="wrapper-block"><img class="modal-logo" src="./assets/img/Group 61.svg" alt=""><h4>Выберите подписку</h4><div class="wrapper-radio"><label class="label"><input type="radio" name="name1" class="radio"><span class="fake"></span><span>1 месяц</span></label><span>4 900 ₽</span></div><div class="wrapper-radio"><label class="label"><input type="radio" name="name1" class="radio"><span class="fake"></span><span>1 год</span></label><span>49 000 ₽</span></div></div><div><button id="checkout-modal" class="checkout-modal">Оформить</button></div>'
    checkout.addEventListener("click", () => {
        modal.innerHTML = '<h1>Privet</h1>';
    })
})


