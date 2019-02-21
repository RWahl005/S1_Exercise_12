"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Tutorial Case

   Author: Ryan Wahl
   Date:  2.19.19

   Filename:   lht_calendar.js  

   Function List:
   createCalendar(calDate)
      Creates the calendar table for the month specified in the
      calDate parameter. The current date is highlighted in 
      the table.

   calCaption(calDate)
      Writes the caption of the calendar table

   calWeekdayRow()
      Writes the weekday title rows in the calendar table

   daysInMonth(calDate)
      Returns the number of days in the month from calDate

   calDays(calDate)
      Writes the daily rows in the calendar table, highlighting calDate
	
*/

/* Set the date displayed in the calender */
var thisDay = new Date("August 24, 2018");

// White the calender to the element with the id "calender".
document.getElementById("calendar").innerHTML = createCalendar(thisDay);

// Function to generate the calenda table
function createCalendar(calDate) {
      var calendarHtml = "<table id='calendar_table'>";
      calendarHtml += calCaption(calDate);
      calendarHtml += "</table>";
      return calendarHtml;
}

// Function to write the calendar caption

function calCaption(calDate) {
      // monthname array contains the list of month names
      var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

      // Determine the current month
      var thisMonth = calDate.getMonth();

      // Determine the current year.
      var thisYear = calDate.getFullYear();
      // Write the caption
      return "<caption>" + monthName[thisMonth] + " " + thisYear + "</caption>";
}