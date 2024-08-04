document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger")
    const mobileMenu = document.querySelector(".nuv_list") ;
    const topWrapper = document.querySelector(".top_wrapper");
    const mediaMatchMobile = window.matchMedia("(min-width: 849px)");
    const entryButton =  topWrapper.querySelector(".entry_button");
    const subForm = document.querySelector('.submition_form');
    let isAnimated = false;
    let imgConatainer = document.querySelector(".submition_form").querySelector(".img_container");
    let imgArray = [];
    let fileArray = [];

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


    subForm.addEventListener('click', (ev) => {
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