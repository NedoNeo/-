document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger")
        const mobileMenu = document.querySelector(".nuv_list") ;
        const topWrapper = document.querySelector(".top_wrapper");
        const mediaMatchMobile = window.matchMedia("(min-width: 849px)");
        const entryButton =  topWrapper.querySelector(".entry_button");
        let isAnimated = false;



        const burgerMobileMathc = window.matchMedia("(max-width: 850px)");
        let headerPadding = 59;
        let secondHeaderPadiing = 10 ;
        let name = "wrapper"
        let color = ""
        let logoColor = "#FFFFFF"
    
    
    
        function mobileMatch (event) {
            if(event.matches) {
                headerPadding = 69;
                secondHeaderPadiing = 69;
                name = "ztfcka"
            } else {
                headerPadding = 59;
                secondHeaderPadiing = 10 ;
                name = "wrapper"
            }
        }
        
        mobileMatch(burgerMobileMathc)
        
        burgerMobileMathc.addEventListener("change", mobileMatch); 
        
        
        window.addEventListener("scroll", (event) => {
            let mainHeader = document.querySelector(".header");
            let header = document.querySelector(".top_wrapper");
            let logo = document.querySelectorAll(".logo_link svg *");
            if(window.scrollY > 0) {
                header.classList.add("fixed");
                color = "#FFFFFF";
                logoColor = "#0E1132";
                header.firstElementChild.classList.add(`${name}`);
                header.style.backgroundColor = "#FFFFFF";
                mainHeader.style.paddingTop = headerPadding + "px";
                logo.forEach(element => {
                    element.style.fill = "#0E1132"
                })
            }
            if(window.scrollY === 0) {
                header.classList.remove("fixed");
                color = "";
                logoColor = "#FFFFFF"  ;
                header.firstElementChild.classList.remove(`${name}`);
                header.style.backgroundColor = "";
                mainHeader.style.paddingTop = secondHeaderPadiing + "px";
                logo.forEach(element => {
                    element.style.fill = "#FFFFFF" 
                })
            }
        })
    
    
    
        burger.addEventListener("click", () => {
            if(!burger.classList.contains("burger_active")) {
                document.querySelector("body").style.overflow = "hidden";
                topWrapper.style.backgroundColor = "#FFFFFF";
                mobileMenu.style.display = "flex";
                topWrapper.querySelectorAll(".logo_link svg *").forEach(element => {
                    element.style.fill = "#0E1132";
                })
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
                document.querySelector("body").style.overflow = "auto";
                topWrapper.querySelectorAll(".logo_link svg *").forEach(element => {
                    element.style.fill = logoColor;
                })
                topWrapper.style.backgroundColor = color;
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

        
        mediaMatchMobile.addEventListener("change", (event) => {
            if(event.matches) {
                topWrapper.style.position = "static";
            mobileMenu.style.display = 'flex';
            }
        })

        function passwordVisible(element) {
            element.addEventListener("click", (ev) => {
                if (ev.target.closest(".password_icon")) {
                    const passwordInput = ev.target.closest(".password_icon").previousElementSibling;
                    if (passwordInput.type === "password") {
                        passwordInput.type = "text";
                        ev.target.closest("svg").querySelector("path").style.fill = "#802836"
                    } else {
                        passwordInput.type = "password";
                        ev.target.closest("svg").querySelector("path").style.fill = "";
                    }
                }
            });
        }
        
        passwordVisible(document.querySelector(".entry_form"));
        passwordVisible(document.querySelector('.registration_form'));
})