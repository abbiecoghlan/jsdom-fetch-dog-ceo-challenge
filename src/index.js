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

let breedInformation = ""

function fetchBreedInfo(){
    fetch(breedUrl)
    .then( res => res.json() )
    .then( breedInfo => {
        breedInformation = breedInfo
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

function addingBreedListener(){
    const dogList = document.querySelector("#dog-breeds")
    dogList.addEventListener('click', function(e){
      e.target.style.color = "blue" 
      
    })
}

function addingSelectListener(){
    const dropdown = document.querySelector("#breed-dropdown")

    dropdown.addEventListener('change', function(e){
        addBreedsToDOM(breedInformation)
        let dogLis = document.querySelectorAll('ul#dog-breeds>li')

        dogLis.forEach(node => {

            if (node.innerText[0] !== e.target.value.toUpperCase()){
                node.style.display = "none"
            }
            else {
                node.style.display = ""
            }
            

        })
    })
}


fetchImageInfo()
fetchBreedInfo()
addingBreedListener()
addingSelectListener()