// Initialize Firebase
var config = {
    apiKey: "AIzaSyBt6t2nLEHYvej_qpkaeq0H-BrjB5RCM04",
    authDomain: "employee-data-management-mjkt.firebaseapp.com",
    databaseURL: "https://employee-data-management-mjkt.firebaseio.com",
    projectId: "employee-data-management-mjkt",
    storageBucket: "",
    messagingSenderId: "240832011692"
};
firebase.initializeApp(config);

// Create a variable to reference the database.
var database = firebase.database();

// Creat a click event.
$("#add-employee-btn").on("click", function (event) {
    event.preventDefault();
    console.log("test");
    var nameInput = $("#employeeName-input").val();
    var role = $("#role-input").val();
    var startDate = $("#startDate-input").val();
    var monthlyRate = $("#monthlyRate-input").val();

    database.ref().push({
        name: nameInput,
        role: role,
        start: startDate,
        rate: monthlyRate,
    })

});