document.addEventListener("DOMContentLoaded", function() {
    //Подія DOMContentLoaded виконується для того щоб спочатку прогрузився весь код html, а тільки потім почав викнонуватись код JS, хоча якщо у коді html підключати скрипт у кінці документу то по-суті цей код і не потрібен
    
    const tabs = () => {
        const cardDetailChange = document.querySelectorAll(".card-detail__change");
        const cardTitleChange = document.querySelectorAll(".card-details__title");
        const cardPriceChange = document.querySelectorAll(".card-details__price");
        const cardImageChange = document.querySelectorAll(".card__image");
        const colorDesc = document.querySelectorAll(".color_desc");
        
        
      
        const hideAll = () => {
            for (let i = 0; i < cardDetailChange.length; i++) {
                cardDetailChange[i].classList.remove('active');
                cardImageChange[i].classList.remove('active');
                cardTitleChange[i].classList.remove('active');
                cardPriceChange[i].classList.remove('active');
                colorDesc[i].classList.remove('active');
            }
        }
        for (let i = 0; i < cardDetailChange.length; i++) {
            cardDetailChange[i].addEventListener("click", () => {
                hideAll();
                cardDetailChange[i].classList.add('active');
                cardImageChange[i].classList.add('active');
                cardTitleChange[i].classList.add('active');
                cardPriceChange[i].classList.add('active');
                colorDesc[i].classList.add('active');
            })
            
        }
    }

    tabs();

    // Не можу зрозуміти як перетворити на делегування, код що приведенний нижче додає, але не віднімає класс active
    // const tabs = () => {
    //     const cardDetailChange = document.querySelectorAll(".card-detail__change");
    //     const cardTitleChange = document.querySelectorAll(".card-details__title");
    //     const cardPriceChange = document.querySelectorAll(".card-details__price");
    //     const cardImageChange = document.querySelectorAll(".card__image");
    //     const colorDesc = document.querySelectorAll(".color_desc");
    //     let newSelection;
    //     function remove(evt) {
    //         return evt.classList.remove('active');
    //     }

    //     function selected(selectedPhone) {
    //         if (newSelection) {
    //             remove(newSelection);
    //         }
    //         newSelection = selectedPhone;
    //         newSelection.classList.add('active');
    //     };
        
    //     for (let i = 0; i < cardDetailChange.length; i++) {
    //         cardDetailChange[i].addEventListener("click", function() {
    //             selected(cardDetailChange[i]);
    //             selected(cardTitleChange[i]);
    //             selected(cardPriceChange[i]);
    //             selected(cardImageChange[i]);
    //             selected(colorDesc[i]);
    //         })
            
    //     }
    // }

    // tabs();



})