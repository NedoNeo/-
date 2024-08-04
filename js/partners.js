
document.addEventListener('DOMContentLoaded', () => {
    
        let label = document.querySelector(".datetime-label");
        let input = document.querySelector(".datetime-input");
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

        const mobileForm = document.querySelector('.filter_mobile');


        mobileForm.addEventListener("click", (event) => {
            if(event.target.closest('.filter_mobile-item')) {
                if(isAnimated) {
                    return
                }
        
                isAnimated = true
                        
        
                let mobileList = new selectList(event.target.closest('.mobile_filter-container').querySelector(".filter_checkbox-container"), event.target.closest('.filter_mobile-item'));
        
                mobileList.change()
            }
        })

        label.addEventListener("click", (event) => {
            input.focus();

            input.showPicker ? input.showPicker() : input.focus();


        })

        input.addEventListener('change', function() {
            const value = input.value;
            console.log(value);
            label.querySelector(".datetime-label_text").textContent = value ? new Date(value).toLocaleString() : 'Выберите дату и время';
        });
        
       

        document.querySelector(".developer_button").addEventListener("click", (ev) => {
            if(isAnimated) {
                return
            }

            let searchForm = ev.target.parentElement.querySelector(".animation_container ");

            isAnimated = true
            searchForm.previousElementSibling.style.setProperty('--icon_rotate', "rotate(-90deg)")

            
            let list = new selectList(searchForm);

            if(searchForm.classList.contains('hidden')) {
                list.openList();
                setTimeout(() => {
                    isAnimated = false;
                },900)
            } else {
                setTimeout(() => {
                    isAnimated = false;
                },900)
                list.closeList(900)
                searchForm.previousElementSibling.style.setProperty('--icon_rotate', "rotate(90deg)")
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