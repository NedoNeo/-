document.addEventListener("DOMContentLoaded", () => {
    let isAnimated = false;

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

    const editForm = document.querySelector(".edit_form");

    editForm.addEventListener('click', (ev) => {
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

    document.querySelectorAll(".draggble_zone").forEach((item) => {
        const dropZone = item;
        const fileInput = dropZone.nextElementSibling.querySelector('.drag_zone-input');
    
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
    })
    
})