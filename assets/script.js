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
  // Apply the past, present, or future class to each time block
  // Get the current hour 
  // Loop through each time-block
  // Compare the hour to the current hour and apply the appropriate class
  // Call the function to update hour classes
  // Get any user input saved in localStorage and set the textarea values
  // Display the current date in the header of the page
});