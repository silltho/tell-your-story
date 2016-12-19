//var eventNumber = 1;

//creates new Event if not already exists, else make array and save it in the sessionstorage object
function createNewEvent(){

    var newEvent = new Object();

    newEvent .name = document.getElementById('event-name').value;
    newEvent .description = document.getElementById('event-description').value;
    newEvent .from = document.getElementById('event-from').value;
    newEvent .to = document.getElementById('event-to').value;

    if(sessionStorage.length != 0)
    {
        events= JSON.parse(sessionStorage.getItem('event'));
        console.log(events);
    }
    else{
        events=[];
    }
    events.push(newEvent);

    for(var i = 0; i < events.length; i++)
    {
        console.log(events);
    }

   // console.log('retrievedObject: ', events);
    sessionStorage.setItem('event', JSON.stringify(events));

    // this is how you will retrive it


    var retrievedObject = retrieveElement();

    var result = getEventProperties(retrievedObject, "description");
    console.log(result);

    //eventNumber++;
    listEvents();
}


//get single properties with given name (name, description, ..)
function getEventProperties(input, field) {
    var output = [];
    for (var i=0; i < input.length ; ++i)
        output.push(input[i][field]);
    return output;
}

//should list names and description, ... in the index
function listEvents(){

    var retrieved = retrieveElement();
    var names = getEventProperties(retrieved, "name");

    console.log(names[0]);
    //var name = document.getElementsByClassName('get-name').value;
    var name = names[0];
   /* document.getElementById('get-description').value = JSON.parse(testobject['description']);
    document.getElementById('get-from').value = JSON.parse(testobject['from']);
    document.getElementById('get-to').value = JSON.parse(testobject['to']);*/
}

//gives the events from sessionstorage
function retrieveElement()
{
    return JSON.parse(sessionStorage.getItem('event'));
}

//search event with given name and trigger showEvent which shows exact data from this event with given name
function getEvent(name)
{
    var retrieved = retrieveElement();
    var names = getEventProperties(retrieved, "name");

    for (var i = 0; i < names.length; i++)
    {
        if(names[i] == name)
        {
            //do smth with the name; now you know at which entry the values are!
            console.log('found!');
            showEvent(i);
        }
    }
}

//get exact event with given name
function showEvent(index)
{
    var retrieved = retrieveElement();
    var names = getEventProperties(retrieved, "name");
    var descriptions = getEventProperties(retrieved, "description");
    var froms = getEventProperties(retrieved, "from");
    var tos = getEventProperties(retrieved, "to");

    var name = names[index];
    var description = descriptions[index];
    var from = froms[index];
    var to = tos[index];

    console.log(name);
    console.log(description);
    console.log(from);
    console.log(to);


}