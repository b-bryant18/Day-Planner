


$(document).ready(function(){

//  // Sets current day from moment function
//  var curDate = moment().clone();

//  // Sets current day in the header
//  function setCurrentDateLabel() {
//      $("#currentDay").text(curDate.format('dddd, MMMM Do'));
//  };

//     setCurrentDateLabel();

   
    $(".saveButton").on("click", function (event) {
        event.preventDefault();
        var toDo = $(this).siblings(".hourly-tasks").val()
        var time = $(this).siblings().attr("id")
        // var time = $(this).siblings(".input-group-text").val()
        console.log(toDo);
        console.log(time);

        // Save into local storage
        localStorage.setItem(time, toDo);

        // Save input for each hour using hourly IDs. 
 
    })

    $("#hour-9").text(localStorage.getItem("9am"));
    var description = localStorage.getItem("9am");
    $("#hour-10").text(localStorage.getItem("10am"));
    var description = localStorage.getItem("10am");
    $("#hour-11").text(localStorage.getItem("11am"));
    var description = localStorage.getItem("11am");
    $("#hour-12").text(localStorage.getItem("12pm"));
    var description = localStorage.getItem("12pm");
    $("#hour-1").text(localStorage.getItem("1pm"));
    var description = localStorage.getItem("1pm");
    $("#hour-2").text(localStorage.getItem("2pm"));
    var description = localStorage.getItem("2pm");
    $("#hour-3").text(localStorage.getItem("3pm"));
    var description = localStorage.getItem("3pm");
    $("#hour-4").text(localStorage.getItem("4pm"));
    var description = localStorage.getItem("4pm");
    $("#hour-5").text(localStorage.getItem("5pm"));
    var description = localStorage.getItem("5pm");

    // function renderDescription(time);
   
    // console.log(time);
  
    //     var description = localStorage.getItem(time);
    //     console.log(description);
    //     $(".hourly-tasks").text(description);
    // }



    // renderDescription(description); 

});
