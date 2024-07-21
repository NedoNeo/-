ymaps.ready(init);

        function init() {
            // Создаем карту
            var map = new ymaps.Map("test", {
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
            constructor(selectElement) {
                this.selectElement = selectElement;
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

        
        let isAnimated = false;
        
       

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