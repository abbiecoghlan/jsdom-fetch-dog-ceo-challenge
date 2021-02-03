console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 

function fetchImageInfo(){
    fetch(imgUrl)
    .then( res => res.json() )
    .then( imageInfo => {
        addImagesToDOM(imageInfo)
    })
}

function addImagesToDOM(imageInfo){
    let dogContainer = document.querySelector("#dog-image-container")
    let allTheDogs = imageInfo.message.map(function(dog){
        let newImage = document.createElement('img') 
        newImage.setAttribute("src", dog)
        dogContainer.append(newImage)
    })
}

fetchImageInfo()