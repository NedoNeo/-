let showMoreFunc;
let selectList;
    
document.addEventListener('DOMContentLoaded', () => {
    function passwordVisible(element) {
        element.addEventListener("click", (ev) => {
            if (ev.target.classList.contains("password_icon")) {
                const passwordInput = ev.target.previousElementSibling;
                if (passwordInput.type === "password") {
                    passwordInput.type = "text";
                } else {
                    passwordInput.type = "password";
                }
            }
        });
    }
    
    passwordVisible(document.querySelector(".entry_form"));
    passwordVisible(document.querySelector('.registration_form'));
    
    
    function showMore (container, gap) {
        height = container.firstElementChild.scrollHeight * 2 + gap + "px";
        container.style.height = height;
        container.nextElementSibling.addEventListener("click", () => {
            if(!container.classList.contains("active")) {
                container.style.height = container.scrollHeight + "px";
                container.classList.toggle("active");
                container.nextElementSibling.style.setProperty("--rotate", "rotate(-90deg)")
        
            } else {
                container.style.height = height;
                container.classList.toggle("active");
                container.nextElementSibling.style.setProperty("--rotate", "rotate(90deg)")
            }
        })
    }


})

