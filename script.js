
$(document).ready(function () {
    
    //Assigning variable to get the event data from the local storage
    var eventData = JSON.parse(localStorage.getItem("eventData"));

    //Assigning variable To display current date
    var currentDate = new Date($.now()).toDateString();

    //Array to store the time in 24 hr format
    var time = ["9","10", "11","12","13","14","15","16","17","18"]
    var date = $("#currentDay");
    var textAreaToHighlight = [$(".row1Text"), $(".row2Text"), $(".row3Text"),$(".row4Text"),$(".row5Text"),$(".row6Text"),$(".row7Text"),$(".row8Text"),$(".row9Text"),$(".row10Text")]

    //To display null textbox if the user input is empty
    if (!eventData) {
        eventData = ['', '', '', '', '', '', '', '', '', '', ''];
    }

    // To display all stored appointment
    var renderData = function () {
        date.append(currentDate);
        $("#event-0").val(eventData["0"]);
        $("#event-1").val(eventData["1"]);
        $("#event-2").val(eventData["2"]);
        $("#event-3").val(eventData["3"]);
        $("#event-4").val(eventData["4"]);
        $("#event-5").val(eventData["5"]);
        $("#event-6").val(eventData["6"]);
        $("#event-7").val(eventData["7"]);
        $("#event-8").val(eventData["8"]);
        $("#event-9").val(eventData["9"]);
        // checkColor();
    }

    //calling renderdata function 
    renderData();

    //Storing data after the save button click
    $(".saveBtn").click(function (event) {
            console.log("$(this)"+$(this).attr("id"));
            eventData[$(this).attr("id")] = $(`#event-${$(this).attr("id")}`).val();
            console.log("eventData[event.target.id]"+eventData[$(this).attr("id")]);
            localStorage.setItem("eventData", JSON.stringify(eventData));
    });

    //Color highlight change every second
    setInterval(checkColor, 1000);

    //Function to highlight color based on the current time
function checkColor(){
    for (i=0;i<10;i++){
    if (moment().hour()>time[i]) {
        textAreaToHighlight[i].addClass("past");
    }
    else if (moment().hour() == time[i]) {
        textAreaToHighlight[i].addClass("present");
    }
    else {
        textAreaToHighlight[i].addClass("future");
    }
}
}
})
