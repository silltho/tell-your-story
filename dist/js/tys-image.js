function submitFunc() {
    var file = document.getElementById('file').files[0];

    console.log(file);
    var filename = file.name;

    var fileRef = firebase.storage().ref().child(filename);

    fileRef.put(file).then(function (snapshot) {
        console.log("Hallo");
    });

}

function showFunc() {
    var info = firebase.storage().ref().bucket;
    console.log(info);

    for(var i = 1;i<3;i++)
    {
        var starsRef = firebase.storage().ref().child("Image"+i+".png");

        // Get the download URL
        starsRef.getDownloadURL().then(function(url) {
            var img = $('<img id="pic">'); //Equivalent: $(document.createElement('img'))
            img.attr('src', url);
            img.appendTo('#output');
        }).catch(function(error) {
            switch (error.code) {
                case 'storage/object_not_found':
                    // File doesn't exist
                    break;

                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;

                case 'storage/canceled':
                    // User canceled the upload
                    break;

                case 'storage/unknown':
                    // Unknown error occurred, inspect the server response
                    break;
            }
        });
    }
}