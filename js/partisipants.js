const burger = document.querySelector(".burger")
const mobileMenu = document.querySelector(".nuv_list") ;
const topWrapper = document.querySelector(".top_wrapper");
const mediaMatchMobile = window.matchMedia("(min-width: 849px)");
const entryButton =  topWrapper.querySelector(".entry_button");
const subForm = document.querySelector('.submition_form');
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

mediaMatchMobile.addEventListener("change", () => {
    topWrapper.style.position = "static";
    mobileMenu.style.display = 'flex';
})


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
        newElement.setAttribute("data-fancybox", "data-fancybox");
        newElement.href = "#entry_form"
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
