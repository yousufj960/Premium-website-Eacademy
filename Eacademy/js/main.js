$(document).ready(function(){  
//Mobile menu
$('#menu').slicknav();$.scrollUp();
   
////sticky nav bar
//$("#Bottom_header").sticky({topSpacing:0});
    
 //Bx slider   
$(function(){
$('.bxslider').bxSlider({
mode: 'fade',
captions: true,
auto: true,

});
});

    //owl carousel
$('.service').owlCarousel({
loop:true,
margin:10,
nav:true,
responsive:{
0:{ 
items:1   // for mobile item 

},
600:{
items:3  //  for Tablet item 
},
1000:{
items:4  //  for desktop item 
}
}
})
$('.course').owlCarousel({
loop:true,
margin:10 ,
nav:true,
responsive:{
0:{ 
items:1   // for mobile item 

},
600:{
items:2  //  for Tablet item 
},
1000:{
items:3 //  for desktop item 
}
}
})

$('.testimonial').owlCarousel({
loop:true,
margin:10 ,
nav:true,
responsive:{
0:{ 
items:1   // for mobile item 

},
600:{
items:1  //  for Tablet item 
},
1000:{
items:1 //  for desktop item 
}
}
}) 


$('.client').owlCarousel({
loop:true,
margin:10 ,
nav:true,
responsive:{
0:{ 
items:3  // for mobile item 

},
600:{
items:4  //  for Tablet item 
},
1000:{
items:6 //  for desktop item 
}
}
}) 

});


