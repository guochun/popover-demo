let poButton = document.getElementById('showPopover');
let popover = document.getElementById('popover');
let wrapper = document.getElementById('wrapper');

//第一种方法
poButton.addEventListener('click', function (e) {

    function hide() {
        popover.style.display = 'none';
        this.removeEventListener("click", hide);
    }
    popover.style.display = 'block';
    document.addEventListener('click', hide);
});

wrapper.addEventListener('click', function(e) {
    e.stopPropagation();
});

//第二种方法
// poButton.addEventListener('click', function(e){

//     popover.style.display = 'block';  
//     document.addEventListener('click', function (){
//         popover.style.display = 'none';  
//         //console.log(caller)
//     },{once: true});


// });



// poButton.addEventListener('click', function(e){
//     this.removeEventListener("click",hide);
//     function hide() {
//         popover.style.display = 'none';
//         this.removeEventListener("click",hide);
//     }
//     popover.style.display = 'block'; 
//     var timer = setTimeout(() => {
//         document.addEventListener('click', hide);
//         clearTimeout(timer)
//     },200);

// });
