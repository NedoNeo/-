document.addEventListener("DOMContentLoaded", () => {
    const buttonsContainer = document.querySelector(".btn-box");
    const incomingSection = document.querySelector(".section_incoming ");
    const outcomingSection = document.querySelector(".section_outcoming ")


    buttonsContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("incoming_button")) {
           if (incomingSection.classList.contains("hidden")) {
                outcomingSection.classList.add("hidden");
                incomingSection.classList.remove("hidden");
                event.target.classList.remove("not_selected-button");
                event.target.classList.add("red_button")
                event.target.nextElementSibling.classList.remove("red_button")
                event.target.nextElementSibling.classList.add("not_selected-button")
           }
        } 
        if (event.target.classList.contains("outgoing_button")) {
            incomingSection.classList.add("hidden");
            outcomingSection.classList.remove("hidden");
            event.target.classList.remove("not_selected-button");
            event.target.classList.add("red_button")
            event.target.previousElementSibling.classList.remove("red_button")
            event.target.previousElementSibling.classList.add("not_selected-button")
        }
    })
})