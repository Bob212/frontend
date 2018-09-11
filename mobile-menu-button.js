// кнопка меню в шапке на мобильной версии
let mobilePopupContainer = $(".header__nav-list");  // всплывающее окно
let buttonMenuMob = $(".icon-mob-menu");    // кнопка меню в мобильной версии
let buttonParent = $(".header__nav"); // родительский элемент кнопки


        buttonMenuMob.click(function(e){
                let target = e.target;
                    mobilePopupContainer.toggle(300);   // появляем / скрываем контейнер
                    buttonParent.toggleClass('active');    // меняем иконку меню
                    $(document).mouseup(function (e) {
                        if (mobilePopupContainer.has(e.target).length === 0){   // если кликнули вне попапа - нужно скрыть его
                            if ( buttonMenuMob.has(e.target).length !== 0 || $(e.target).hasClass($(buttonMenuMob).attr('class')) ) {    // если это была кнопка меню - ничего делать не нужно, т.к. выше уже описано (toggle) , что делать при нажатии на нее
                                return;
                            }
                            mobilePopupContainer.hide(300); // при клике вне области - скрываем контейнер
                            buttonParent.removeClass('active'); // при клике вне области - меняем стиль кнопки
                        }
                    });
            });
// END  кнопка меню в шапке на мобильной версии