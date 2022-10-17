window.onload = function(){
    var i = 40;
    if (i == 40)
    {
        i = 39;
        var digit = document.getElementById("digit"); 
        var elem = document.getElementById("myBar");
        var width = 400;
        var id = setInterval(frame,1000);
        function frame() {
            if (width <= 0) {
                clearInterval(id);
                i=40;
                digit.innerHTML = width*(1/10) + "s";
 
            } else { 
                width = width - 10;
                digit.innerHTML = width*(1/10) + "s";
                elem.style.width = width + "px";
 
            }
        }
    }
};

function changeImage1() {

        if (document.getElementById("imgClickAndChange1").src = "1.JPG") 
        {
            document.getElementById("imgClickAndChange1").src = "2.JPG";
        }
        else 
        {
            document.getElementById("imgClickAndChange1").src = "1.JPG";
        }
    }
    
function changeImage2() {

        if (document.getElementById("imgClickAndChange2").src = "3.JPG") 
        {
            document.getElementById("imgClickAndChange2").src = "4.JPG";
        }
        else 
        {
            document.getElementById("imgClickAndChange2").src = "3.JPG";
        }
    }
    
setTimeout(function() {

alert("go back to your hotel");
location.href = "https://joahn-lab.github.io/subtropics/"
}, 41000);
