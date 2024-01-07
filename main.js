/*<><>Data Models<><>*/
var savedIdeas = [];
var idea;

/*<><>Query Selectors<><>*/
var saveButton = document.getElementById('save-button');
var ideaForm = document.getElementById('form');
var outputSection = document.querySelector('.output-area')
var titleInput = document.getElementById('title');
var bodyInput = document.getElementById('body');
var starredIdeas = document.querySelector('.starred-ideas');
var card = document.querySelector('.card')

/*<><><>Event Listeners<><>*/
ideaForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (titleInput.value && bodyInput.value) {
        saveIdea(titleInput.value, bodyInput.value);
        pushIdea();
        renderCard();
        ideaForm.reset();
    } else {
        saveButton.disabled = true;
        saveButton.style.backgroundColor = 'lightgray';
        saveButton.style.cursor = 'not-allowed'
        titleInput.addEventListener('input', handleInput);
        bodyInput.addEventListener('input', handleInput);
    }
});

saveButton.addEventListener('mouseover', changeCursor)

outputSection.addEventListener('click', (e) => {
    if(e.target.className === 'delete') {
    e.target.parentNode.parentNode.parentNode.remove();
    }
})

outputSection.addEventListener("click", (event) => {
    var favoritedID = parseInt(event.target.closest("div").id);
    console.log(favoritedID);
    for(let i = 0; i < savedIdeas.length; i++) {
        if(savedIdeas[i].id === favoritedID) {
            savedIdeas[i].isFavorited = !savedIdeas[i].isFavorited;
            if(savedIdeas[i].isFavorited) {
                event.target.src = "assets/star-active.svg";
            } else {
                event.target.src = "assets/star.svg";
            }
        }
    }
    console.log("Saved Ideas:",savedIdeas);
})

outputSection.addEventListener('click', (e) => {
    if (e.target.className === 'delete') {
        var cardToRemove = e.target.parentNode.parentNode.parentNode
        // var ideaH = cardToRemove.querySelector('h4')
        for(var i = 0; i < savedIdeas.length; i++) {
            if(savedIdeas[i].id === ) {
                savedIdeas.splice(i, 1) 
                return savedIdeas
            }
        }
        for(var i = 0; i < favoritedIdeas.length; i++) {
            if(favoritedIdeas[i].title == ideaH.innerText) {
                favoritedIdeas.splice(i, 1)
                return favoritedIdeas
            }
        }
    }
})

// starredIdeas.addEventListener('click', function(e) {
//     for (var i =0; i < savedIdeas.length; i++) {
//         if (!savedIdeas[i].isFavorited) {
//             // card.classList.add('.hide')
//             // e.target.classList.add('.hide')
//         }
//     }
//     changeAllIdeaButton();
// })

// starredIdeas.addEventListener("click", (event) => {
//     if(starredIdeas.innerText === "Show Starred Ideas") {  
//         for (var i =0; i < savedIdeas.length; i++) {
//             if (!savedIdeas[i].isFavorited) {
//                  savedIdeas.splice(i, 1);
//             }
//         }
//         console.log(savedIdeas); 
//         renderCard();   
//     } else {
//         console.log(savedIdeas); 
//         renderCard();
//     }
// })
console.log("card <>>>>", card)
/*<><>Functions<><>*/
function handleInput() {
    saveButton.disabled = false;
    saveButton.style.backgroundColor = '#1F1F3C'; 
    saveButton.style.cursor = 'pointer'; 
}

/*<><>Functions<><>*/
function saveIdea(title, body) {
    idea = {
        title: title,
        body: body,
        id: Date.now(),
        isFavorited: false
    }

console.log(idea);
return idea;
}

function pushIdea() {
    savedIdeas.push(idea);
    console.log(savedIdeas);
}

function renderCard() {
    outputSection.innerHTML = '';
    var srcSet = ""
    for (var i = Math.max(savedIdeas.length - 6, 0); i < savedIdeas.length; i++) {
        if (savedIdeas[i].isFavorited) {
            srcSet = "assets/star-active.svg"
        } else {
            srcSet = "assets/star.svg"
        }
        var currentIdea = savedIdeas[i];

        outputSection.innerHTML += 
            `<div class="card" id="${currentIdea.id}"> 
                <header>
                    <button class="star-button"><img class="star" src=${srcSet}></button>
                    <button class="delete-button"><img class="delete" src="assets/delete.svg"></button>
                </header>
                <h4>${currentIdea.title}</h4> 
                <article>${currentIdea.body}</article>    
            </div>`;}
}     


function changeCursor() {
    if(titleInput.value && bodyInput.value)
        saveButton.classList.add('pointer')
}

function changeAllIdeaButton() {
    if (starredIdeas.innerText === 'Show Starred Ideas') {
        starredIdeas.innerText = 'Show All Ideas';
    } else {
        starredIdeas.innerText = 'Show Starred Ideas';
    }
}



// need to make a filter button in the ideaBox section
// when ckicked the button should show the favorite ideas that are in the array
// the text on the button needs to change to show all ideas when it's clicked

/*When a user clicks the “Show Starred Ideas” button:
only the favorited ideas should be visible
the text on the button should change to “Show All Ideas”
When a user clicks the “Show Starred Ideas” button:
only the favorited ideas should be visible
the text on the button should change to “Show All Ideas”*/

/* loop through the array for elements that are not favorited and have a 
conditional that will add a display none to the class. 
add event listener to button to do 2 things. first will change the inner text
to show all ideas, second will loop through the array and for favorite 
is false, display none. 
add a class of display: none and remove that class on click*/


starredIdeas.addEventListener('click', function(e) {
    var cardToHide = 
    for (var i =0; i < savedIdeas.length; i++) {
        if (!savedIdeas[i].isFavorited ) {
            card.classList.add('.hide')
            e.target.classList.add('.hide')
        }
    }
    changeAllIdeaButton();
})