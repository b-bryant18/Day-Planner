$(document).ready(function(){

    debugger;

    // Save inputs from textboxes

    $(".saveButton").on("click", function (event) {
        event.preventDefault();
        var toDo = $(this).siblings(".hourly-tasks").val()
        var time = $(this).siblings().attr("id")
        // var time = $(this).siblings(".input-group-text").val()
        console.log(toDo);
        console.log(time);

        // Save into local storage
        localStorage.setItem(time, toDo);

        // Prevent saved input from being erased when page is refreshed.
 

    })

    $("#hour-9").text(localStorage.getItem("9am"));
    var description = localStorage.getItem("9am");
    $("hour-10").text(localStorage.getItem("10am"));
    var description = localStorage.getItem("10am");
    $("hour-11").text(localStorage.getItem("11am"));
    var description = localStorage.getItem("11am");
    $("hour-12").text(localStorage.getItem("12am"));
    var description = localStorage.getItem("12am");
    $("hour-1").text(localStorage.getItem("1pm"));
    var description = localStorage.getItem("1pm");
    $("hour-2").text(localStorage.getItem("2pm"));
    var description = localStorage.getItem("2pm");
    $("hour-3").text(localStorage.getItem("3pm"));
    var description = localStorage.getItem("3pm");
    $("hour-4").text(localStorage.getItem("4pm"));
    var description = localStorage.getItem("4pm");
    $("hour-5").text(localStorage.getItem("5pm"));
    var description = localStorage.getItem("5pm");

    function renderDescription(time) ;
   
    console.log(time);
  
    //     // var description = localStorage.getItem(time);
    //     // console.log(description);
    //     $(".hourly-tasks").text(description);
    // }



    // renderDescription(description); 
});
