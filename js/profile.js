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
    
    mediaMatchMobile.addEventListener("change", (event) => {
        if(event.matches) {
            topWrapper.style.position = "static";
        mobileMenu.style.display = 'flex';
        }
    })

class selectList {
    constructor(selectElement, animatedIcon) {
        this.selectElement = selectElement;
        this.animatedIcon = animatedIcon;
    }

    change() {
        if(this.selectElement.classList.contains('hidden')) {
            this.animatedIcon.style.setProperty('--icon_rotate', "rotate(-90deg)")
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
        this.selectElement.classList.toggle("hidden");
        let height =this.selectElement.scrollHeight;
        this.selectElement.style.height = "0";

        setTimeout (()=> {
            this.selectElement.style.height = height + "px";
          },10)
    }

    closeList(animationDelay) {
        this.selectElement.style.height = "0";
        setTimeout (() => {
            this.selectElement.classList.toggle("hidden");  
        }, animationDelay)
    }
}

const subForm = document.querySelector('.submition_form');

subForm.addEventListener('click', (ev) => {
    let target = ev.target;

    if(target.classList.contains('select_input')) {

        if(isAnimated) {
            return
        }

        isAnimated = true
        

        let nextElem = target.nextElementSibling;
        let list = new selectList(nextElem, target);

        list.change();
        
    }

    if(target.classList.contains("find_button")) {
        if(isAnimated) {
            return
        }

        isAnimated = true
        

        let animationItem = target.closest(".animation_container");
        let icon = target.closest(".select_input");
        let list = new selectList(animationItem, icon);

        list.change();
    }
})


})