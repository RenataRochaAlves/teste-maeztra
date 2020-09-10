function getPhotos(){

    let headers = new Headers();

    fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=6de28cdacebe45efc00045457435c80c&tags=dog&per_page=6&format=json',{
        method:'get',
        headers: headers
    }).then(
        function(response){
            return response.text();
        }
    ).then(
        function(content){
            eval(content);
        }
    )
}

function jsonFlickrApi(obj){
    showPhotos(obj);
}

function showPhotos(flickrObj){
    var object = flickrObj.photos.photo;
    console.log(object);
    var body = document.querySelector('body');

    object.forEach(element => {
        var image = document.createElement('img');
        image.setAttribute('src', 'https://www.flickr.com/photos/' + element.owner + '/' + element.id);

        body.appendChild(image);
    });
}

getPhotos();

