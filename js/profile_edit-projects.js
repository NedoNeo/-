document.addEventListener("DOMContentLoaded", () => {
    let isAnimated = false;
    let imgConatainer = document.querySelector(".edit_form").querySelector(".img_container");
    let imgArray = [];
    let fileArray = [];

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
    
    const editForm = document.querySelector(".edit_form");

    editForm.addEventListener('click', (ev) => {
        let target = ev.target;
   

    if(target.classList.contains('select_input')) {
        let nextElem = target.nextElementSibling;
        nextElem.dropdown = new selectList(nextElem, target);
        nextElem.dropdown.closeOpenInput();


        nextElem.dropdown.change();
        
    } else if(target.classList.contains("find_button")) {
          
        

        let animationItem = target.closest(".animation_container");
        let icon = target.closest(".select_input");
        animationItem.dropdown = new selectList(animationItem, icon);

        animationItem.dropdown.change();
    } else {
        let activeDropdown = document.querySelector(".dropdown_list-active");
        if(activeDropdown) {
            activeDropdown.classList.remove("dropdown_list-active")
        activeDropdown.dropdown.change();
        }
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
            //  
            e.preventDefault();
            e.stopPropagation();
    
            const files = e.dataTransfer.files;
            readFile(files)
        });
    
        function handleFile(file) {
            const reader = new FileReader();
            let fileName = file.name;
            reader.onload = function(e) {
                // dropZone.style.backgroundImage = `url(${e.target.result})`;
                let imgWrapper = document.createElement("div");
                imgWrapper.classList.add("img_wrapper");
                let newImage = document.createElement("img");
                let deleteButton = document.createElement("div");
                deleteButton.classList.add("img_delete-button");
                newImage.src = e.target.result;
                newImage.dataset.name = fileName;
                imgWrapper.appendChild(newImage);
                imgWrapper.appendChild(deleteButton);
                imgConatainer.appendChild(imgWrapper);
                
    
    
                const dataTransfer = new DataTransfer();
                imgArray.forEach(element => {
                    dataTransfer.items.add(element)
                });
                fileInput.files = dataTransfer.files;
    
            };
            reader.readAsDataURL(file);
        }
    
        function readFile(files) {
            let arrLengt = imgArray.length;
            let filterItem = new Set();
            imgArray = imgArray.concat(Array.from(files)).filter (element => {
                if(filterItem.has(element.name)) {
                    console.log(filterItem.has(element.name))
                    return false 
                } else {
                    filterItem.add(element.name)
                    return true;
                }
            })
    
            let new_files = imgArray.slice(arrLengt);
          
            if (files.length > 0) {
                new_files.forEach(file => {
                    handleFile(file);
                })
            }
    
        }
    
        dropZone.addEventListener("click", (e) => {
            e.stopPropagation();
            fileInput.click()
        })
    
        fileInput.addEventListener("change", (e) => {
            const files = e.target.files;
            readFile(files)
            console.log(fileInput.files);
        })
    
        imgConatainer.addEventListener("click", (event) => {
            if(event.target.classList.contains("img_delete-button")) {
                let deletedItemName = event.target.previousElementSibling.dataset.name;
                event.target.parentElement.remove();
                let oldList = Array.from(fileInput.files);
                let newList = oldList.filter((element) => {
                   return  element.name !== deletedItemName ;
                })
                
                imgArray.forEach(element => {
                    if(element.name === deletedItemName) {
                        imgArray.splice(imgArray.indexOf(element), 1);
                    }
     
                })
                let transfer = new DataTransfer();
                newList.forEach((file) => {
                    transfer.items.add(file)
                })
                fileInput.files = transfer.files;
                console.log(fileInput.files);
            }
        })
    
        let file_input = document.querySelector(".file_input-label").querySelector("input");
        let fileList = document.querySelector(".file_input-label").previousElementSibling;
        file_input.addEventListener("change", (event) => {
            let files = event.target.files
                if(files.length === 0 ) {
                    return
                }
    
           
                let filterItem = new Set();
                fileArray = fileArray.concat(Array.from(files)).filter (element => {
                    if(filterItem.has(element.name)) {
                        console.log(filterItem.has(element.name))
                        return false 
                    } else {
                        filterItem.add(element.name)
                        return true;
                    }
                })
    
            const dataTransfer = new DataTransfer();
            fileArray.forEach((file) => {
                dataTransfer.items.add(file)
            })
    
            file_input.files = dataTransfer.files;
            
    
            let newItem = document.createElement("li");
            newItem.classList.add("doc_file");
            let newSpan = document.createElement("span");
            newSpan.textContent = files[0].name;
            newItem.appendChild(newSpan);
            let deleteButton = document.createElement("div");
            deleteButton.classList.add("doc_delete-button");
            newItem.appendChild(deleteButton);
    
            fileList.appendChild(newItem);
    
            
            
        })
    
    
        fileList.addEventListener("click", (event) => {
            if(event.target.classList.contains("doc_delete-button")) {
                let fileName = event.target.previousElementSibling.textContent;
               fileArray = fileArray.filter(file => {
                    return file.name!== fileName
                })
    
                const dataTransfer = new DataTransfer();
                fileArray.forEach((file) => {
                    dataTransfer.items.add(file)
                })
                file_input.files = dataTransfer.files;
                event.target.parentNode.remove();
            }
        })
    
    })
    
})