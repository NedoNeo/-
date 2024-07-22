// создание кнопки на мобилке

document.addEventListener("DOMContentLoaded", () => {
  const mediaQuery = window.matchMedia("(max-width: 850px)");
  const container = document.querySelector(".partisipants-btns");
  const firstBtn = document.querySelector(".button.first");
  const toggleElements = document.querySelectorAll(".christ");

  // const firstArticle = document.querySelector(
  //   ".middle__list-item:first-child h3"
  // );
  let newListItem;
  let newElement;

  function handleMediaChange(e) {
    if (e.matches) {
      firstBtn.textContent = "регистрация";
      toggleElements.forEach((e) => (e.style.transform = "rotate(180deg)"));

      // firstArticle.textContent =
      // "Проверка заявок на предмет соответствия требованиям Положения о конкурсе";
      // !ошибка в макете

      if (!newElement && !newListItem) {
        newListItem = document.createElement("li");
        container.appendChild(newListItem);
        newElement = document.createElement("a");
        newElement.textContent = "вход";
        newElement.classList.add("button");
        newElement.classList.add("red");
        newElement.classList.add("not-change");
        newListItem.appendChild(newElement);
      }
    } else {
      firstBtn.textContent = "зарегистрироваться";
      // firstArticle.textContent = "Слушатель";
      // firstText.textContent =
      //   "Лицо, принимающее участие в деловой программе Ярмарки разработок (за исключением мероприятий по специальным приглашениям)";

      if (newElement) {
        newElement.remove();
        newElement = null;
      }
    }
  }

  mediaQuery.addEventListener("change", handleMediaChange);
  handleMediaChange(mediaQuery);

  // показ подробного маршрута

  toggleElements.forEach((toggle) => {
    toggle.addEventListener("click", function () {
      const content = this.closest(".route__list-item").querySelector(
        ".rout__list-item--content"
      );
      if (content.classList.contains("show")) {
        content.classList.remove("show");
        setTimeout(() => {
          if(!window.matchMedia("(max-width: 850px)").matches) {
            this.style.transform = "rotate(135deg)";
            this.style.transition = "0.5s";
         
          }
        }, 250);
      } else {
        setTimeout(() => {
          content.classList.add("show");

          if(!window.matchMedia("(max-width: 850px)").matches) {
            this.style.transform = "rotate(90deg)";
            this.style.transition = "0.5s";
          
          }
        }, 0);
      }
    });
  });
});
