document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger")
    const mobileMenu = document.querySelector(".nuv_list") ;
    const topWrapper = document.querySelector(".top_wrapper");
    const mediaMatchMobile = window.matchMedia("(min-width: 849px)");
    const entryButton =  topWrapper.querySelector(".entry_button");
    const firstDateButton = document.querySelector(".first_date");
    const secondDateButton = document.querySelector(".second_date");
    const firstContainer = document.querySelector(".first_date-container")
    const secondContainer = document.querySelector(".second_date-container")
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
            // topWrapper.style.position = "fixed";
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





    class selectList {
        constructor(selectElement, animatedIcon) {
            this.selectElement = selectElement;
            this.animatedIcon = animatedIcon;  
    
            this.handleTransitionEnd = this.handleTransitionEnd.bind(this);  
            this.selectElement.addEventListener("transitionend", this.handleTransitionEnd);
        }
    
        handleTransitionEnd(ev) {
            if (this.selectElement.style.height === "0px") {
                console.log(1);
                this.selectElement.classList.add("hidden");
                this.selectElement.removeEventListener("transitionend", this.handleTransitionEnd);
            }
        }
    
        change() {
            if(this.selectElement.classList.contains('hidden')) {
                this.animatedIcon.style.setProperty('--icon_rotate', "rotate(-90deg)");
                this.openList();
                setTimeout(() => {
                    isAnimated = false;
                },900)
            } else {
                setTimeout(() => {
                    isAnimated = false;
                },900)
                this.closeList(900)
                this.animatedIcon.style.setProperty('--icon_rotate', "rotate(90deg)")
            }
            
        }
    
        openList() {
            this.selectElement.classList.remove("hidden");
            let height =this.selectElement.scrollHeight;
            this.selectElement.style.height = "0px";
    
            setTimeout (()=> {
                this.selectElement.style.height = height + "px";
              },10)
        }
    
        closeList(animationDelay) {
            this.selectElement.style.height = "0px";
        }
    
        closeOpenInput() {
            let activeDropdown = document.querySelector(".dropdown_list-active");
                if(activeDropdown && activeDropdown !== this.selectElement) {
                    activeDropdown.classList.remove("dropdown_list-active");
                
                        activeDropdown.dropdown.closeList();
                         
                        activeDropdown.dropdown.animatedIcon.style.setProperty('--icon_rotate', "rotate(90deg)")
                }
            this.selectElement.classList.add("dropdown_list-active");
        }
    }
    
    
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


    

    document.querySelector(".event__dates").addEventListener("click", (event) => {
        if(event.target.closest(".first_date")) {
            console.log(event.target)
            firstContainer.classList.toggle("hidden");
            secondContainer.classList.toggle("hidden");
            firstDateButton.classList.remove("white");
            firstDateButton.classList.add("red");
            secondDateButton.classList.remove("red");
            secondDateButton.classList.add("white");

        }
        if(event.target.closest(".second_date")) {
            firstContainer.classList.toggle("hidden");
            secondContainer.classList.toggle("hidden");
            secondDateButton.classList.remove("white")
            secondDateButton.classList.add("red")
            firstDateButton.classList.remove("red");
            firstDateButton.classList.add("white");
        }
    })

})