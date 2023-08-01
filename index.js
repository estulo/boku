var last_op = 1;

function btnAnim(menu) {
    let [back, front, text] = menu.children;
    
    front.classList.toggle('front-panel-click');
    text.classList.toggle('move-txt-click');
    back.classList.toggle('back-panel-click');
}


function btnHover(menu) {
    let [back, front, text] = menu.children;
    front.classList.toggle('front-panel');
    front.classList.toggle('front-panel-hover');

    back.classList.toggle('back-panel');
    back.classList.toggle('back-panel-hover');

    text.classList.toggle('move-txt');
    text.classList.toggle('move-txt-hover');


}
