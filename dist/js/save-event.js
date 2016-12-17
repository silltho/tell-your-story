var eventNumber = 1;

function createnewEvent(){

    var newEvent = new Object();

    newEvent .name = document.getElementById('event-name').value;
    newEvent .description = document.getElementById('event-description').value;
    newEvent .from = document.getElementById('event-from').value;
    newEvent .to = document.getElementById('event-to').value;

    if(sessionStorage.events)
    {
        events= JSON.parse(sessionStorage.getItem('events'));
    }else{
        events=[];
    }
    events.push(newEvent);
   // console.log('retrievedObject: ', events);
    sessionStorage.setItem('event', JSON.stringify(events));

    // this is how you will retrive it


    var retrievedObject = JSON.parse(sessionStorage.getItem('event'));

    var result = getFields(retrievedObject, "description");
    console.log(result);

    //Gibt einzelne Properties als string zurück
    function getEventProperties(input, field) {
        var output = [];
        for (var i=0; i < input.length ; ++i)
            output.push(input[i][field]);
        return output;
    }



  // console.log('aögain: ', retrievedObject);
   // console.log('event-name: ', JSON.parse(retrievedObject));
    eventNumber++;
}

function retrieve(){

    console.log(JSON.parse(testobject['name']));
    var testobject = localStorage.getItem("event");
    document.getElementById('get-event-name').value = JSON.parse(testobject['name']);
    document.getElementById('get-event-description').value = JSON.parse(testobject['description']);
    document.getElementById('get-event-from').value = JSON.parse(testobject['from']);
    document.getElementById('get-event-to').value = JSON.parse(testobject['to']);
}


function add(){

}
