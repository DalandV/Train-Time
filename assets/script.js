$(document).ready(function () {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCdg25ZPpIbD3uO1oVsQUhoNQbLTyurID0",
        authDomain: "train-time-43114.firebaseapp.com",
        databaseURL: "https://train-time-43114.firebaseio.com",
        projectId: "train-time-43114",
        storageBucket: "train-time-43114.appspot.com",
        messagingSenderId: "57632226602"
    };
    firebase.initializeApp(config);

    var database = firebase.database();

    $("#submit-btn").on("click", function (event) {

        event.preventDefault();

        var tName = $("#train-name").val().trim();
        var tDest = $("#destination").val().trim();
        var tTime = $("#first-train-time").val().trim();
        var tFreq = $("#frequency").val().trim();

        database.ref().push({
            trainName: tName,
            trainDest: tDest,
            trainTime: tTime,
            trainFreq: tFreq
        });

    });

    database.ref().on("child_added", function (snapshot) {

        // Unfinished Portion
        // Create variables to store 'Next Arrival' and 'Minutes Away' data
        // Get the time for 'Next Arrival' by adding the 'First Train Time' to the 'frequency' and convert it from military time
        // Get a the 'Minutes Away' values by subtracting the 'Next Arrival' time from the current time 

        $("#train-sched").append("<tr><td>" + snapshot.val().trainName + "</td><td>" + snapshot.val().trainDest + "</td><td>" + snapshot.val().trainFreq + "</td></tr>");

    }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
    });


});