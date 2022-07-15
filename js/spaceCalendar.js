var today = new Date();
var year = today.getFullYear();

astroEventParser();

//astro event parser
async function astroEventParser(){
  let yearAstroEvent = await getAPI('localhost:8000',`app/astro-info/${year}`);
  let yearAstroEventRes = yearAstroEvent.result;
  let astroEventsParams = new Array();

  for(const property in yearAstroEventRes){
    if(property >0 && yearAstroEventRes[property].content == yearAstroEventRes[property-1].content) continue;
    let eventObj = new Object();

    let title = yearAstroEventRes[property].content;
    let start = yearAstroEventRes[property].date.substr(0,10);
    let description=null;
    if(yearAstroEventRes[property].time)
    {
      
      description = `${start}시작. ${title}`
    }
    else
    {
      description = `${title}`
    }
    
    eventObj.title = title;
    eventObj.start = start;
    eventObj.description = description;

    astroEventsParams.push(eventObj);
  }
  console.log(astroEventsParams)
  var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'interaction', 'dayGrid' ],
      editable: false,
      eventLimit: false , // allow "more" link when too many events
      eventDidMount: function(info) {
        var tooltip = new Tooltip(info.el, {
          title: 'hihi',
          placement: 'top',
          trigger: 'hover',
          container: 'body'
        });
      },
      //events: [astroEventParser()]
      events: astroEventsParams
    });

  calendar.render();
}

//get API AS JSON
async function getAPI(host, path, headers = {}) {
  const url = `http://${host}/${path}`;
  console.log(url);
  const options = {
    method: "GET"
  };
  const res = await fetch(url, options);
  const data = res.json();
  // console.log(res)
  // console.log(data)
  if (res.ok) {
    return data;
  } else {
    throw new Error(data);
  }
}

