var slider_img = document.getElementById("slider_img");
var images=["a.jpg" , "b.jpg" , "c.jpg"];
var i =0 ; //first index image
function prev(){
 if(i<=0)
   i = images.length;
   i--;
   return setImage();
 
}
function next(){
 if(i>=images.length-1)
     i= -1;
     i++
     return setImage();
}
function setImage(){
//     var test = (slider_img.setAttribute("src", "images/" , images[i]));
//     console.log(test);
return slider_img.setAttribute("src", "images/" + images[i]);
}


//auto slide 

var myIndex = 0 ;
autoSlide();
function autoSlide(){
    var i ; 
    var j = document.getElementsByClassName("slider_img");
    for(i=0; i< j.length; i++){
        j[i].style.display = "none";
    }
    myIndex++;
    if(myIndex > j.length){
        myIndex=1
    }
    j[myIndex-1 ].style.display="block";
    setTimeout(autoSlide,3000);
    next();
}
