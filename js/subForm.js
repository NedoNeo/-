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
    } else if(!target.closest(".dropdown_list-active")){
        let activeDropdown = document.querySelector(".dropdown_list-active");
        if(activeDropdown) {
            activeDropdown.classList.remove("dropdown_list-active")
        activeDropdown.dropdown.change();
        }
    }
})