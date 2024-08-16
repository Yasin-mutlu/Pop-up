const showModal = document.querySelector(".show-modal");
const modal = document.querySelector(".modal");
const x = document.querySelector(".close-modal");
const closeButton = document.querySelector(".close-button");

const modalHidde_showModalRemove = function(){
    modal.classList.add("hidden");
    showModal.classList.remove("hidden");
}


showModal.addEventListener("click",function(){
    modal.classList.remove("hidden");
    showModal.classList.add("hidden");
})

closeButton.addEventListener("click",modalHidde_showModalRemove);
x.addEventListener("click",modalHidde_showModalRemove);

document.addEventListener("keydown",function (event){
    console.log(event.key);
    if(event.key === "Escape" && !modal.classList.add("hidden")){
        showModal.classList.remove("hidden");
        if(!modal.classList.add("hidden"));
    }
});