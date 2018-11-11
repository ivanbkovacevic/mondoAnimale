$(document).ready(function(){
    $("#burek").click(function(){
        var a = "animated";
        setInterval(function(){
            $("#burek").toggleClass(a + " pulse faster");
        },500)
       
    });

    ScrollOut({
        threshold: .5,
        once:true,
      
        onShown(el) {
    el.classList.add("animated");
  }
    });
})
