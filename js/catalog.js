
document.addEventListener("DOMContentLoaded", () => {
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

showMore(document.querySelector(".project_container"), 10) 


const subForm = document.querySelector('.submition_form');
let isAnimated = false;

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

const dropZone = document.querySelector('.draggble_zone');
    const fileInput = document.querySelector('.drag_zone-input');

    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.stopPropagation();
    });

    dropZone.addEventListener('dragleave', (e) => {
        e.preventDefault();
        e.stopPropagation();
    });

    dropZone.addEventListener('drop', (e) => {
        fileInput.value = ''
        e.preventDefault();
        e.stopPropagation();

        const files = e.dataTransfer.files;
        if (files.length > 0) {
            const file = files[0];
            handleFile(file);
        }
    });

    function handleFile(file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            dropZone.style.backgroundImage = `url(${e.target.result})`;

            // Помещаем файл в input type="file"
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(file);
            fileInput.files = dataTransfer.files;

            console.log('Файл добавлен в input type="file"');
        };
        reader.readAsDataURL(file);
    }

    dropZone.addEventListener("click", (e) => {
        e.stopPropagation();
        fileInput.click()
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

