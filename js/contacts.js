document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger")
        const mobileMenu = document.querySelector(".nuv_list") ;
        const topWrapper = document.querySelector(".top_wrapper");
        const mediaMatchMobile = window.matchMedia("(min-width: 849px)");
        const entryButton =  topWrapper.querySelector(".entry_button");
        let isAnimated = false;

        burger.addEventListener("click", () => {
            if(!burger.classList.contains("burger_active")) {
                topWrapper.style.position = "fixed";
                topWrapper.style.backgroundColor = "#FFFFFF";
                mobileMenu.style.display = "flex";
                topWrapper.querySelector(".logo").setAttribute("src", "img/SVG-icons/logo-mobile.svg");
                burger.style.backgroundColor = "#F2F2F2";
                entryButton.style.backgroundColor = "#F2F2F2";
                setTimeout(() => {
                    mobileMenu.style.right = "0%";
                }, 10)
                burger.style.setProperty("--center-top", "47%");
                burger.style.setProperty("--center-bottom", "47%");
                setTimeout(() => {
                    burger.style.setProperty("--top_stick-rotate", "rotate(45deg)");
                    burger.style.setProperty("--bottom_stick-rotate", "rotate(-45deg)");
                }, 300);
                burger.classList.toggle("burger_active");
            } else {
                topWrapper.querySelector(".logo").setAttribute("src", "img/logo.svg");
                topWrapper.style.position = "absolute";
                topWrapper.style.backgroundColor = "transparent";
                mobileMenu.style.right = "105%";
                burger.style.backgroundColor = "#FFFFFF";
                entryButton.style.backgroundColor = "#FFFFFF";
                setTimeout(() => {
                    mobileMenu.style.display = "none";
                }, 500);
                burger.style.setProperty("--top_stick-rotate", "0");
                burger.style.setProperty("--bottom_stick-rotate", "0");
                setTimeout(() => {
                    burger.style.setProperty("--center-top", "15px");
                    burger.style.setProperty("--center-bottom", "19px");
                }, 200);
                burger.classList.toggle("burger_active");
            }
        })
        
        mediaMatchMobile.addEventListener("change", () => {
            topWrapper.style.position = "static";
            mobileMenu.style.display = 'flex';
        })

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
})