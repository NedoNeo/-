const mobileForm = document.querySelector('.filter_mobile');


mobileForm.addEventListener("click", (event) => {
    if(event.target.closest('filter_mobile-item')) {
        let mobileList = new selectList(event.target.closest('filter_mobile-item').querySelector(".filter_checkbox-container"));

        
    }
})