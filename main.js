var mouseEvent="Empty";

Canvas=document.getElementById("myCanvas");
ctx=Canvas.getContext("2d");

color="red";
width_of_line=2;

Canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    raidus=document.getElementById("raidus").value;
    mouseEvent="mousedown";
}
Canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    var current_x=e.clientX - canvas.offsetLeft;
    var current_y=e.clientY - canvas.offsetTop;
        if(MouseEvent == "mousedown"){
        console.log("Current position of X and Y coordinates = ")
        console.log("X = " + current_position_of_mouse_x+", Y = "+Current_position_of_mouse_y)
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,raidus,0,2* Math.PI);
        ctx.stroke()
        }
    }
    Canvas.addEventListener("mouseup",my_mouseup);
    function my_mouseup(e){
        mouseEvent="mouseup";
    }
    Canvas.addEventListener("mouseleave",my_mouseleave);
        function my_mouseleave(e){
        mouseEvent="mouseleve";
    }
        function clearArea() {
        ctx.clearRect(0,0, ctx.canvas.width,ctx.canvas.height);
    }
    