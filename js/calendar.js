document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    headerToolbar: {
      left: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
      center: 'title',
      right: "prev,next"
    },
    navLinks: true,
    buttonText: {
      dayGridMonth: 'Month',
      timeGridWeek: 'Week',
      timeGridDay: 'Day',
      listWeek: 'List week'
    },
    height: 300,
    initialView: 'timeGridWeek',
    height: '100%',
    dayHeaders: true,
    initialDate: "2021-02-15",
    editable: true,
      eventContent: function( arg ) {
      return { html: arg.event.title };
   },
    events: [
      {
        id: 1,
        title: 'Conference<ul><li>Morning Committee Meetings</li><li>Networking Brunch</li><li>Concurrent Sessions</li><li>Evening Network Reception</li><li>Conference Closing</li></ul>',
        start: '2021-02-15 07:00:00',
        end: '2021-02-15 12:00:00'
      },
      {
        id: 2,
        title: 'Another <b>Entry with HTML</b>',
        start: '2021-02-16 07:00:00',
        end: '2021-02-16 08:00:00'
      },
            {
        id: 3,
        title: '<i>Third Entry with HTML</i>',
        start: '2021-02-16 09:00:00',
        end: '2021-02-16 10:00:00'
      }
    ]

  });

  calendar.render();
});
