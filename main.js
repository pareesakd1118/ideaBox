/*<><>Data Models<><>*/
var savedIdeas = [];
var idea;

/*<><>Query Selectors<><>*/
var saveButton = document.getElementById('save-button');
var ideaForm = document.getElementById('form');

/*<><><>Event Listeners<><>*/
ideaForm.addEventListener('submit', (e) => {
    e.preventDefault();
    var titleInput = document.getElementById('title');
    var bodyInput = document.getElementById('body');
    if(titleInput.value == "" || bodyInput.value == "") {
        alert('Error');
    }
    else {
        saveIdea(titleInput.value, bodyInput.value);
        pushIdea();
    }
})

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
