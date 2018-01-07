$(document).foundation();
$(".off-canvas-submenu").hide();
 $(".off-canvas-submenu-call").click(function() {
    var icon = $(this).parent().next(".off-canvas-submenu").is(':visible') ? '+' : '-';
    $(this).parent().next(".off-canvas-submenu").slideToggle('fast');
    $(this).find("span").text(icon);
 });

     $("[data-menu-underline-from-center] a").addClass("underline-from-center");
//$('html').css('overflow', 'hidden');

//if($("off-canvas-submenu-call").parent().next().children() ==   )

 function getReceipt(value, identifier) {
console.log(value);
if(identifier == 'events') {
 obj = document.getElementById("Truyen1");
       obj.src = "/contents/Events/" + value;
} else if (identifier == 'lop4') {
 obj = document.getElementById("Truyen2");
       obj.src = "/contents/Classrooms/Lop4/" + value;
} else if(identifier == 'lop5') {
 obj = document.getElementById("Truyen3");
       obj.src = "/contents/Classrooms/Lop5/" + value;
} else if(identifier == 'resources') {
 obj = document.getElementById("Truyen4");
       obj.src = "/contents/Resources/" + value;
} else if(identifier == 'stories') {
 obj = document.getElementById("Truyen5");
       obj.src = "/contents/Stories/" + value;
}
     
//var test = value + "";
// var type = value.substring(value.length - 3);
// if (type == "pdf") {
// 	obj.type = "application/pdf";
// } else {
// 	obj.type = "text/html";
// }
 }

/*function GetAlbum(val) {
         var obj = $find("SlideShowID");
         if (obj != null) {
             obj.set_contextKey(val);
             obj._slideShowInit();
             obj._play();
         }
     }
*/




function replaceAlbum(value) {
var folder = "/contents/Photos/" + value + "/";
$.ajax({
url : folder,
success: function (data) {

var list = document.getElementById("orbit-container-pictures");
while (list.hasChildNodes()) {   
 list.removeChild(list.lastChild);
}
$(data).find("a").attr("href", function (i, val) {
 if( val.match(/\.(jpe?g|png|gif|JPG)$/) ) { 
   var liTag = document.createElement("li");
   liTag.className = "orbit-slide";

   var figureTag = document.createElement("figure");
   figureTag.className="orbit-figure";
   var imgTag = document.createElement("img");
   imgTag.src = folder + val;
   imgTag.className = "orbit-image";
   figureTag.append(imgTag);
   liTag.append(figureTag);
   $(list).append(liTag);
 } 
});
$options = {
 animInFromLeft: 'fade-in',
 animInFromRight: 'fade-in',
 animOutToLeft: 'fade-out',
 animOutToRight: 'fade-out',
 timerDelay: 3000,
 bullets: false
};
var orbitSlider = new Foundation.Orbit($('.orbit'),$options);

}
});
}
