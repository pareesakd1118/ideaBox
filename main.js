/*<><>Data Models<><>*/
var savedIdeas = [];
var idea;

/*<><>Query Selectors<><>*/
var saveButton = document.getElementById('save-button');
var ideaForm = document.getElementById('form');
var outputSection = document.querySelector('.output-area')
var titleInput = document.getElementById('title');
var bodyInput = document.getElementById('body');

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
    if(e.target.className === 'delete-button' || e.target.className === 'delete') {
    e.target.parentNode.parentNode.parentNode.remove();
    }
})

outputSection.addEventListener('click', (e) => {
    if (e.target.className === 'delete') {
        var cardToRemove = e.target.parentNode.parentNode.parentNode
        var ideaH = cardToRemove.querySelector('h4')
        for(var i = 0; i < savedIdeas.length; i++) {
            if(savedIdeas[i].title == ideaH.innerText) {
                savedIdeas.splice(i, 1) 
                return savedIdeas
            }
        }
    }
})


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
    for (var i = Math.max(savedIdeas.length - 6, 0); i < savedIdeas.length; i++) {
        var currentIdea = savedIdeas[i];
        outputSection.innerHTML += 
            `<div class="card"> 
                <header>
                    <button class="delete-button"><img class="delete" src="assets/delete.svg"></button>
                </header>
                <h4>${currentIdea.title}</h4> 
                <article>${currentIdea.body}</article>    
            </div>`;
    }     
}

function changeCursor() {
    if(titleInput.value && bodyInput.value)
        saveButton.classList.add('pointer')
}
