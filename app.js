// querySelectors
const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector("#searchButton");
const searchForm = document.querySelector("#searchForm");
const mainDiv = document.querySelector("#mainDiv")
// to make the imageData variable global
let imageData;
let userInput;

// to create img
function imgCreate() {
    let img = document.createElement("img");
    img.src = imageData
    mainDiv.append(img) 
}
// to make an apiCall
function apiCall() {
    fetch(`http://api.tvmaze.com/search/shows?q=${userInput}`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data)
            imageData = data[0].show.image.medium;
            imgCreate()
        })
        .catch((e) => {
            console.log("err", e)
        })
}

searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    userInput = searchInput.value;
    apiCall();     
})
