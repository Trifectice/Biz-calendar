$(function() {
    // Add a listener for click events on the save button
    $(".saveBtn").on("click", function() {
      // Get the user input description from the textarea
      var description = $(this).siblings(".description").val().trim();
  
      // Get the id of the containing time-block
      var timeBlockId = $(this).parent().attr("id");
  
      // Save the user input in local storage using the time-block id as the key
      localStorage.setItem(timeBlockId, description);
    });
  
    // Function to update the hour classes of time blocks
    function updateHourClasses() {
      // Get the current time
      var currentTime = dayjs(); // Use the Day.js library to handle date/time operations
      var currentHour = currentTime.hour();
  
      // Loop through each time-block
      $(".time-block").each(function() {
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
  
    // Call the function to update the hour classes immediately on page load
    updateHourClasses();
  
    // Function to update the hour classes every minute
    function updateHourClassesPeriodically() {
      // Call the updateHourClasses function
      updateHourClasses();
  
      // Schedule the next update after 1 minute
      setTimeout(updateHourClassesPeriodically, 60000);
    }
  
    // Call the function to update the hour classes periodically
    updateHourClassesPeriodically();
  
    // Retrieve saved descriptions from local storage and populate the textareas
    $(".time-block").each(function() {
      var timeBlockId = $(this).attr("id");
      var description = localStorage.getItem(timeBlockId);
  
      if (description) {
        $(this).find(".description").val(description);
      }
    });
  
    // Display the current date and time
    $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY, h:mm A"));
  });
  