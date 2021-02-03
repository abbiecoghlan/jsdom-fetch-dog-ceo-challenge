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
    imageInfo.message.forEach(function(dog){
        let newImage = document.createElement('img') 
        newImage.setAttribute("src", dog)
        dogContainer.append(newImage)
    })
}


const breedUrl = 'https://dog.ceo/api/breeds/list/all' 

function fetchBreedInfo(){
    fetch(breedUrl)
    .then( res => res.json() )
    .then( breedInfo => {
        addBreedsToDOM(breedInfo)
    })
}

function addBreedsToDOM(breedInfo){
    let breedContainer = document.querySelector("#dog-breeds")
    Object.keys(breedInfo["message"]).forEach(function(dogBreed){
        let newBreed = document.createElement('li') 
        newBreed.innerText = dogBreed
        breedContainer.append(newBreed)
    })
}

function addingEventListener(){
    // let dogList = document.querySelector
}


fetchImageInfo()
fetchBreedInfo()