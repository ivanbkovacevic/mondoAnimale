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
})