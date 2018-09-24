let poButton = document.getElementById('showPopover');
let popover = document.getElementById('popover');
let wrapper = document.getElementById('wrapper');
//是否弹出
let isPopOver = false;

function hide() {
    isPopOver = false
    popover.style.display = 'none';
}
poButton.addEventListener('click', function (e) {

    if(!isPopOver) {
        popover.style.display = 'block';
        document.addEventListener('click',hide,{once: true});
        isPopOver = true;

    }else {
        
        document.removeEventListener('click', hide)
        popover.style.display = 'none';
        isPopOver = false;
    }
   
});

wrapper.addEventListener('click', function(e) {
    //阻止事件冒泡
    e.stopPropagation();
});



