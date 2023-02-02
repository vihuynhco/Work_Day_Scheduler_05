// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// = reference to important DOM elements
var saveButtonEl =  $('#save_button'); 
var timeDisplayEl = $('#time-display');
var saveBtn = $('.saveBtn');

var textCenter=$('.text-center')
var textArea = $('.textarea')

var currentTime = dayjs().hour()
console.log(currentTime)


 //Use array for past, present and furture color code
 


  //Use array for past, present and furture color code


//display the current time & date from Day.JS//

$(document).ready (function() {
  console.log("Ready")


function displayTime() {
  var CurrentDate = dayjs().format('MMM DD, YYYY');
  console.log(CurrentDate)
  timeDisplayEl.text(CurrentDate); 

}


//$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // if clicked document.getElementById(var hours array).innerHTML text and store in local storage

    
    saveBtn.on ('click',function(){
      console.log(this)

      var currentNote = $(this).siblings('.description').val(); //this is to get the 'value' for local storage
      var hourId = $(this).parent().attr('id') //this is to get the 'key' for local storage
      localStorage.setItem('hourId','currentNote');

    })
    
    //keep at the end of JS, want to load the page first before running displaytime fxn every second.
    displayTime();
    setInterval(displayTime, 100000);


  })


  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
    

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
//});


// AS AN employee with a busy schedule
// I WANT to add important events to a daily planner
// SO THAT I can manage my time effectively

//pseudocode
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
    //--Use DayJS to display current date.
          //--GO TO THE DOCKS
          //--WANT TO SET THE FORMAT
          //--mAKE SURE TO STORE THE DAY.JS; SET THE FORMAT: HH:MM:SS
      //-- Set the current time an element in the HTML
        
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
    //-- NEED TO COMPLETE THE REST OF THE TIME BLOCK
    //remove past, preset and future classes. 
    //find a way to programatically and or remove the appropriate class
    //NOTE: function is going to declare, if your less than grey, current i want you to be green and greater than I want you to be red.
          //MAYBE use WHILE LOOP??
          //how do we set standard business hours. 
            //in JS can accoutn for buisness hours. 
            //in JS you can slice off the minutes. 
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
    //-- INSIDE THE 'P' TAG 
    //-- USE MILITARY TIME FOR MACRO, BUT DISPLAY IN STANDARD TIME
    //--COMPARE TIME BLOCK AGAINST THE CURRENT TIME FORM DayJs() THEN APPLY THE CORRECT CLASS BASED ON COMAPRISON OF TIME.
// WHEN I click into a timeblock
// THEN I can enter an event
  
//--GRAB TEXT INPUT (TEXT AREA)
    
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
    // --EVENTLISTENER ON THE SAVE BUTTON 
     //-- great a variable, (can be local) get the value
    //-- set it to local storage (what will the data in local storage look like?)
      //
    // WHEN I refresh the page
// THEN the saved events persist ( confirms that data was entered into localStorage)
    // --getting from LOCAL STORAGE
    //--parse data from local stoarge to convert back into an object(if trhe data was stored as JSON)
    //to have it displayed as the string is was entered. 