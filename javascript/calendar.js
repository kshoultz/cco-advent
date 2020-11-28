var colors = ['f1ded1', 'f0dbc9', 'eed8c2', 'edd0b3', 'eccdab', 'e9c79c', 'e7c18e', 'e5bd86', 'e4ba80', 'e2b473', 'e0ad65', 'dfab5e', 'dda858'],
    today = new Date().getDate();
    
if (today > 25 && today < 29) {
    today = 29;
}

// TODO: Use this to test the days: 
var day = document.getElementById('calendar-day-' + today);
day.classList.add('calendar-today');

var keepGoing = true,
    fade = 0,
    i = today - 1;

do {
    // Add style:
    if (document.getElementById('calendar-day-' + i)) {
        document.getElementById('calendar-day-' + i).style.backgroundColor = '#' + colors[(colors.length - fade) - 1];
    }

    fade = fade + 1;

    // Adjust count:
    i = i - 1;
    if (i <= 0 && today < 26) {
        i = 30;
    } else if (i === 26) {
        keepGoing = false;
    }
} while (keepGoing === true);