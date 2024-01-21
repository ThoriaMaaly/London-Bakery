


$(window).scroll(function () {

    if ($(window).scrollTop() != 0) {
        $('.navbg').css("background-color", 'black')

    }

else{
    $('.navbg').css("background-color", 'transparent')

}


})


// settig icon js



$('.changedicon').click(function(){

    document.getElementById('asidee').classList.toggle('start-100');
  

   this.classList.toggle("fa-times");
});





var allcolorsOfPalette =document.querySelectorAll('.coloringpalette span');

var arrayOfcolor= Array.from(allcolorsOfPalette);
console.log(arrayOfcolor);

for(var i=0  ;  i<arrayOfcolor.length  ;  i++  ){

arrayOfcolor[i].addEventListener('click',function(){

    var cickedcolor= $(this).css("background-color");
 $("a,p,i").css("color",cickedcolor);


})

}


