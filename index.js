ymaps.ready(init);

        function init() {
            // Создаем карту
            var map = new ymaps.Map("map", {
                center: [55.751574, 37.573856], // Координаты центра карты
                zoom: 10 // Уровень масштабирования
            });

            // Задаем координаты точки и параметры иконки
            var myPlacemark = new ymaps.Placemark([55.751574, 37.573856], {
                hintContent: 'Моя иконка!',
                balloonContent: 'Это кастомная иконка'
            }, {
                // iconLayout: 'default#image',
                // iconImageHref: 'your-icon-url.png', // URL вашей иконки
                // iconImageSize: [30, 42], // Размер иконки
                // iconImageOffset: [-15, -42] // Смещение иконки
            });

            // Добавляем точку на карту
            map.geoObjects.add(myPlacemark);
        }



        let label = document.querySelector(".datetime-label");
        let input = document.querySelector(".datetime-input");

        label.addEventListener("click", (event) => {
            input.focus();

            input.showPicker ? input.showPicker() : input.focus();


        })

        input.addEventListener('change', function() {
            const value = input.value;
            console.log(value);
            label.querySelector(".datetime-label_text").textContent = value ? new Date(value).toLocaleString() : 'Выберите дату и время';
        });






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
        let isAnimated = false;
        
        subForm.addEventListener('click', (ev) => {
            let target = ev.target;
     
            if(target.classList.contains('select_input')) {

                if(isAnimated) {
                    return
                }

                isAnimated = true
                target.style.setProperty('--icon_rotate', "rotate(-90deg)")

                let nextElem = target.nextElementSibling;
                let list = new selectList(nextElem);

                if(nextElem.classList.contains('hidden')) {
                    list.openList();
                    setTimeout(() => {
                        isAnimated = false;
                    },900)
                } else {
                    setTimeout(() => {
                        isAnimated = false;
                    },900)
                    list.closeList(900)
                    target.style.setProperty('--icon_rotate', "rotate(90deg)")
                }
                
            }
        })

        document.querySelector(".developer_button").addEventListener("click", (ev) => {
            if(isAnimated) {
                return
            }

            let searchForm = ev.target.parentElement.querySelector(".animation_container ");

            isAnimated = true
            searchForm.previousElementSibling.style.setProperty('--icon_rotate', "rotate(-90deg)")

            
            let list = new selectList(searchForm);

            if(searchForm.classList.contains('hidden')) {
                list.openList();
                setTimeout(() => {
                    isAnimated = false;
                },900)
            } else {
                setTimeout(() => {
                    isAnimated = false;
                },900)
                list.closeList(900)
                searchForm.previousElementSibling.style.setProperty('--icon_rotate', "rotate(90deg)")
            }
        })