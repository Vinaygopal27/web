document.addEventListener("DOMContentLoaded",function(){
    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }
    var count=0;
    var c=document.getElementById("cartcount");
    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
        if (!event.target.matches('.dropbtn1')) {
            var dropdowns = document.getElementsByClassName("dropdown-content1");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }
    function myFunctionk() {
        document.getElementById("myDropdown1").classList.toggle("show");
    }
    function addc(classname){
        console.log(classname);
        var a=document.getElementById(classname);
        if(a.innerText!="Added"){
            a.innerText="Added";
            count+=1;
            
        }else{
            a.innerText="Add to cart";
            count-=1;
        }
        c.innerText=count.toString();
        console.log(count);
    }
})