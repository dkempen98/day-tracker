var timeDisplay = $('#currentDay');
var curTime = (moment().format('MMMM Do YYYY, h:mm:ss a'));
var hour = moment().format('HH');

var nineAm = $('.nine-am');
var tenAm = $('.ten-am');
var elevenAm = $('.eleven-am');
var twelvePm = $('.twelve-pm');
var onePm = $('.one-pm');
var twoPm = $('.two-pm');
var threePm = $('.three-pm');
var fourPm = $('.four-pm');
var fivePm = $('.five-pm');

var saveBtnNine = $('.saveBtn.nine-am');
var saveBtnTen = $('.saveBtn.ten-am');
var saveBtnEleven = $('.saveBtn.eleven-am');
var saveBtnTwelve = $('.saveBtn.twelve-pm');
var saveBtnOne = $('.saveBtn.one-pm');
var saveBtnTwo = $('.saveBtn.two-pm');
var saveBtnThree = $('.saveBtn.three-pm');
var saveBtnFour = $('.saveBtn.four-pm');
var saveBtnFive = $('.saveBtn.five-pm');

var formControlNine = $('.form-control.nine-am');
var formControlTen = $('.form-control.ten-am');
var formControlEleven = $('.form-control.eleven-am');
var formControlTwelve = $('.form-control.twelve-pm');
var formControlOne = $('.form-control.one-pm');
var formControlTwo = $('.form-control.two-pm');
var formControlThree = $('.form-control.three-pm');
var formControlFour = $('.form-control.four-pm');
var formControlFive = $('.form-control.five-pm');


var schedule = {
    nine: '',
    ten: '',
    eleven: '',
    twelve: '',
    one: '',
    two: '',
    three: '',
    four: '',
    five: ''
}

// Use this function and the interval below it to keep time up to date

function updateTime(){
    curTime = (moment().format('MMMM Do YYYY, h:mm:ss a'));
    timeDisplay.text(curTime);
    hour = moment().format('HH')
    hour = Number(hour);
}

setInterval(function(){
    updateTime();
    setTimeBlockColor();
},1000); 

// create function that checks if time is greater than each block and, if so, change background color and placeholder text to null

function setTimeBlockColor(){
    if (hour > 9) {
        nineAm.addClass('past');
        nineAm.attr('disabled', 'disabled');
    } else if (hour == 9) {
        nineAm.addClass('present');
    } else {
        nineAm.addClass('future');
    } 
    
    if (hour > 10) {
        tenAm.addClass('past');
        tenAm.attr('disabled', 'disabled');
    } else if (hour == 10) {
        tenAm.addClass('present');
    } else {
        tenAm.addClass('future');
    } 
    
    if (hour > 11) {
        elevenAm.addClass('past');
        elevenAm.attr('disabled', 'disabled');
    } else if (hour == 11) {
        elevenAm.addClass('present');
    } else {
        elevenAm.addClass('future');
    } 
    
    if (hour > 12) {
        twelvePm.addClass('past');
        twelvePm.attr('disabled', 'disabled');
    } else if (hour == 12) {
        twelvePm.addClass('present');
    } else {
        twelvePm.addClass('future');
    } 
    
    if (hour > 13) {
        onePm.addClass('past');
        onePm.attr('disabled', 'disabled');
    } else if (hour == 13) {
        onePm.addClass('present');
    } else {
        onePm.addClass('future');
    } 
    
    if (hour > 14) {
        twoPm.addClass('past');
        twoPm.attr('disabled', 'disabled');
    } else if (hour == 14) {
        twoPm.addClass('present');
    } else {
        twoPm.addClass('future');
    } 
    
    if (hour > 15) {
        threePm.addClass('past');
        threePm.attr('disabled', 'disabled');
    } else if (hour == 15) {
        threePm.addClass('present');
    } else {
        threePm.addClass('future');
    } 
    
    if (hour > 16) {
        fourPm.addClass('past');
        fourPm.attr('disabled', 'disabled');
    } else if (hour == 16) {
        fourPm.addClass('present');
    } else {
        fourPm.addClass('future');
    }
    
    if (hour > 17) {
        fivePm.addClass('past');
        fivePm.attr('disabled', 'disabled');
    } else if (hour == 17) {
        fivePm.addClass('present');
    } else {
        fivePm.addClass('future');
    } 
    
}

function setPlaceholders() {
    nineAm.attr('placeholder', schedule.nine);
    tenAm.attr('placeholder', schedule.ten);
    elevenAm.attr('placeholder', schedule.eleven);
    twelvePm.attr('placeholder', schedule.twelve);
    onePm.attr('placeholder', schedule.one);
    twoPm.attr('placeholder', schedule.two);
    threePm.attr('placeholder', schedule.three);
    fourPm.attr('placeholder', schedule.four);
    fivePm.attr('placeholder', schedule.five);
    
}

function createEvent(timeBlock, eventText) {
    if (timeBlock == 9) {
        schedule.nine = eventText;
        nineAm.attr('placeholder', schedule.nine);
        formControlNine.val('');
    }
    
    if (timeBlock == 10) {
        schedule.ten = eventText;
        tenAm.attr('placeholder', schedule.ten);
        formControlTen.val('');
    }
    
    if (timeBlock == 11) {
        schedule.eleven = eventText;
        elevenAm.attr('placeholder', schedule.eleven);
    formControlEleven.val('');
    }

    if (timeBlock == 12) {
    schedule.twelve = eventText;
    twelvePm.attr('placeholder', schedule.twelve);
    formControltwelve.val('');
    }

    if (timeBlock == 13) {
    schedule.one = eventText;
    onePm.attr('placeholder', schedule.one);
    formControlOne.val('');
    }

    if (timeBlock == 14) {
    schedule.two = eventText;
    twoPm.attr('placeholder', schedule.two);
    formControlTwo.val('');
    }

    if (timeBlock == 15) {
    schedule.three = eventText;
    threePm.attr('placeholder', schedule.three);
    formControlThree.val('');
    }

    if (timeBlock == 16) {
    schedule.four = eventText;
    fourPm.attr('placeholder', schedule.four);
    formControlFour.val('');
    }

    if (timeBlock == 17) {
    schedule.five = eventText;
    fivePm.attr('placeholder', schedule.five);
    formControlFive.val('');
    }

    localStorage.setItem('schedule', JSON.stringify(schedule))
}


saveBtnNine.on('click', function(){
    var eventText = formControlNine.val();
    createEvent(9, eventText);
});
saveBtnTen.on('click', function(){
    var eventText = formControlTen.val();
    createEvent(10, eventText)
});
saveBtnEleven.on('click', function(){
    var eventText = formControlEleven.val();
    createEvent(11, eventText)
});
saveBtnTwelve.on('click', function(){
    var eventText = formControltwelve.val();
    createEvent(12, eventText)
});
saveBtnOne.on('click', function(){
    var eventText = formControlOne.val();
    createEvent(13, eventText)
});
saveBtnTwo.on('click', function(){
    var eventText = formControlTwo.val();
    createEvent(14, eventText)
});
saveBtnThree.on('click', function(){
    var eventText = formControlThree.val();
    createEvent(15, eventText)
});
saveBtnFour.on('click', function(){
    var eventText = formControlFour.val();
    createEvent(16, eventText)
});
saveBtnFive.on('click', function(){
    var eventText = formControlFive.val();
    createEvent(17, eventText)
});



timeDisplay.text(curTime);
var savedSchedule = localStorage.getItem('schedule');
schedule = JSON.parse(savedSchedule);
localStorage.setItem('schedule', JSON.stringify(schedule));
setPlaceholders()
setTimeBlockColor()