let main = document.getElementById("main");
let crsr=document.getElementById("cursor");
main.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px";
    crsr.style.top=dets.y+"px";

});