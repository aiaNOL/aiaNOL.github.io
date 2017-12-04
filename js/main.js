//
// days of the week
//calDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//
// months (start with Nov)
//calMonths = ['January', 'February', 'March', 'April',
//                     'May', 'June', 'July', 'August', 'September',
//                     'October', 'November', 'December'];
//
// days in each month, in order
//calDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// firstDayOfMonth = []
//
//var currMonth
//
//first day of the week
//
//leap year
//
//new Date();
//
//returns value corresponding to current time
//Date.now()
//
//event click prev or next buttons to navigate between months
//$(#prev).on('click', function() {
//    currMonth -= 1
//}
//
//$(#next).on('click', function() {
//    currMonth += 1
//}
//
$("#days td").on("click", function() {
    $(this).addClass("today");
});
$('#prev').on("click", function() {
    alert("September 2017");
});
$('#next').on("click", function() {
    alert("November 2017");
});

//dateObject for currDay, currMonth, calDaysInMonth