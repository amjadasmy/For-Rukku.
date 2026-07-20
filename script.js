document.addEventListener("DOMContentLoaded", function(){

const button = document.getElementById("openBtn");
const start = document.getElementById("start");
const message = document.getElementById("message");


button.addEventListener("click", function(){

    button.disabled = true;


    // Fade out opening screen slowly
    start.style.transition = "opacity 2s ease";
    start.style.opacity = "0";


    setTimeout(function(){


        start.style.display = "none";

        message.style.display = "block";


        // Get every paragraph and signature
        const parts = message.querySelectorAll("h1, p, .sign");


        // Hide everything first
        parts.forEach(function(item){

            item.style.opacity = "0";
            item.style.transform = "translateY(30px)";
            item.style.transition = "opacity 1.5s ease, transform 1.5s ease";

        });



        // Show one by one slowly
        parts.forEach(function(item, index){


            setTimeout(function(){

                item.style.opacity = "1";
                item.style.transform = "translateY(0)";


            }, index * 1500);


        });



    },2000);


});

});
