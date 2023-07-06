$(function () {
  // Add a listener for click events on the save button
  $(".saveBtn").on("click", function () {
    //- Get the user input description from the textarea
    var description = $(this).siblings(".description").val().trim();
    //- Get the id of the containing time-block
    var timeBlockId = $(this).parent().attr("id");

    // Save the user input in local storage using the time-block id as the key
    localStorage.setItem(timeBlockId, description);
  });

  // Apply the past, present, or future class to each time block
  function updateHourClasses() {
    // Get the current hour using Day.js
    var currentHour = dayjs().format("H");

    // Loop through each time-block
    $(".time-block").each(function () {
      var hour = parseInt($(this).attr("id").split("-")[1]);

      // Compare the hour to the current hour and apply the appropriate class
      if (hour < currentHour) {
        $(this).removeClass("present future").addClass("past");
      } else if (hour > currentHour) {
        $(this).removeClass("past present").addClass("future");
      } else {
        $(this).removeClass("past future").addClass("present");
      }
    });
  }

  // Call the function to update hour classes
  updateHourClasses();

  // Get any user input saved in localStorage and set the textarea values
  $(".time-block").each(function () {
    var timeBlockId = $(this).attr("id");
    var description = localStorage.getItem(timeBlockId);

    if (description) {
      $(this).find(".description").val(description);
    }
  });

  // Display the current date in the header of the page
  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
});
