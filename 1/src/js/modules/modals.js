const modals = () => {
    //1 создаю функцию bindModal она отвечает за привязку модального окна к определенному триггеру(кнопке)
    //2 создаем событие при клике на триггер появл проверка на существование обьекта тоесть е таргет если он есть то у него отменяется стандартное поведение

    function bindModal(triggerSelector, modalSelector, closeSelector) {

        const trigger = document.querySelectorAll(triggerSelector), //так мы сможем повесить на несколько элементов с одинаковым селектором одни  те же функции
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector);

        trigger.forEach(e => {
            e.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault()
                };

                modal.style.display = 'block'; // делаем модальное окно видимым
                // document.body.style.overflow = 'hidden'; //делаем так чтобы при скролле скроллилась только модальное окно либо оно замораживалось если слишком маленькое
                document.body.classList.add('modal-open');
            });

        });

        close.addEventListener('click', () => { //создаем событие для закрытия модального окна
            modal.style.display = 'none';
            // document.body.style.overflow = '';
            document.body.classList.remove('modal-open');//bootstrap style
        });

        //реализация фичи при которой на клике в любую пустую область(подложку) будет также закрываться модальное окно
        modal.addEventListener('click', (e) => {
            if (e.target === modal) { //проверка что если событие клика произашло именно на элементе модал то будет происходить закрытие 
                modal.style.display = 'none';
                // document.body.style.overflow = '';
                document.body.classList.remove('modal-open');
            };
        });

    };

    function showModalByTime(selector, time) {
        setTimeout(function() {
            document.querySelector(selector).style.display = 'block';
            document.body.classList.remove('modal-open');
        }, time);
    };

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    // showModalByTime('.popup', 60000);
};

export default modals;

