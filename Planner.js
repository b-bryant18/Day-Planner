$(document).ready(function () {

// Save inputs from textboxes

    $(".saveButton").on("click", function () {
        var toDo = $(this).siblings(".hourly-tasks").val()
        var time = $(this).siblings().attr("id")
        // var time = $(this).siblings(".input-group-text").val()
        console.log(toDo);
        console.log(time);

        // Save into local storage
        localStorage.setItem(toDo, time);

        // Prevent saved input from being erased when page is refreshed.

    }

