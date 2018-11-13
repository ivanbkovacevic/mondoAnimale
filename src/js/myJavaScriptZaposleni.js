// ScrollOut();
// ScrollOut({
//     onShown(el) {
//       el.classList.add("animated jello");
//     }
//   });

$(document).ready(function(){
    $("#burek").click(function(){
        var a = "animated";
            $("#burek").addClass(a + " infinite pulse faster");  
    })

    $('#learnMore').mouseenter(function(){   
        $(this).addClass("bckgColIn");
        $(this).removeClass("bckgColOut");
    })
    $('#learnMore').mouseleave(function(){
        $(this).removeClass("bckgColIn");
        $(this).addClass("bckgColOut");
    })



})

window.addEventListener('load', function(){
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 2,
        dots: '.dots',
        arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
        }
      });

  })