$(document).ready(function(){

    $(".saveButton").on("click",function(){
        var toDo = $(this).siblings(".hourly-tasks").val()
        var time = $(this).siblings().attr("id")
        // var time = $(this).siblings(".input-group-text").val()
        console.log(toDo);
        console.log(time);

        // Save into local storage
        localStorage.setItem(toDo, time)

    })


    $("#8am .hourly-tasks").val(localStorage.getItem(toDo))
})