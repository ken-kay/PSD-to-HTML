/* Scroll bar */
    window.addEventListener("scroll", function(){
            var header = document.querySelector("header");
            header.classList.toggle("sticky-nav", window.scrollY > 0);
        });

/* Owl Carousel */
$('.owl-carousel').owlCarousel({
    
    loop: true,
    items: 12,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        1:{
            items:4
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    }
});

/* Tabs Section 
function openHill(evt, numHill) {
            var i, tabHill, tabName;
            tabHill = document.getElementsByClassName("tabHill");
            for (i = 0; i < tabHill.length; i++) {
                tabHill[i].style.display = "none";
            }
            tabName = document.getElementsByClassName("tabName");
            for (i = 0; i < tabName.length; i++) {
                tabName[i].className = tabName[i].className.replace(" active", "");
            }
            document.getElementById(numHill).style.display = "block";
            evt.currentTarget.className += " active";
        }
        document.getElementById("openTab").click();
*/
/* Handle Resizing */


window.onresize = function(){ location.reload(); };

