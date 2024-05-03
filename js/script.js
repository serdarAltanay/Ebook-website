// Add custom JavaScript here
function userScroll() {
    const navbar = document.querySelector(".navbar")

    window.addEventListener("scroll" , () => {
        if (window.scrollY > 50){
            navbar.classList.add("bg-dark")
            navbar.classList.add("opacity-75")
            navbar.classList.add("shadow")


        } else{
            navbar.classList.remove("bg-dark")
            navbar.classList.remove("opacity-75")
            navbar.classList.remove("shadow")


        }
    })
}
document.addEventListener("DOMContentLoaded",userScroll)