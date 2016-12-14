function save(){
    var event_name=document.getElementById('event-name').value;
    var event_description=document.getElementById('event-description').value;
    var event_from=document.getElementById('event-from').value;
    var event_to=document.getElementById('event-to').value;

    var event = {'name': event_name, 'description': event_description, 'from': event_from, 'to': event_to};

    localStorage.setItem("event", JSON.stringify(event)); // save the item

    var testobject =localStorage.getItem("event"); // retrieve
    console.log(JSON.parse(testobject));

}

function retrieve(){

}


function add(){

}
