/*<><>Data Models<><>*/
var savedIdeas = [];
var idea;

/*<><>Query Selectors<><>*/
var saveButton = document.getElementById('save-button');
var ideaForm = document.getElementById('form');
var outputSection = document.querySelector('.output-area')

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
        renderCard();
        ideaForm.reset()
    }
})

/*<><>Functions<><>*/
//This function makes an idea object with the title 
function saveIdea(title, body) {
    idea = {
        title: title,
        body: body,
        id: Date.now(),
    }
console.log(idea);
return idea;
}

//This function pushes new idea objects to the data model (savedIdeas)
function pushIdea() {
    savedIdeas.push(idea);
    console.log(savedIdeas);
}

//This function makes a new element which is a card with the idea title and body 
function renderCard() {
    outputSection.innerHTML = '';
    for (var i = Math.max(savedIdeas.length - 6, 0); i < savedIdeas.length; i++) {
        var currentIdea = savedIdeas[i];
        outputSection.innerHTML += `<div class="card"> 
                                        <h4>${currentIdea.title}</h4> 
                                        <article>${currentIdea.body}</article>    
                                    </div>`;
    }     
}


//A card should appear on the screen to match the comp above. The card should show the title and body the user entered into the form.
//were going to for loop through the data model (savedIdeas)
//for each element of the data model, we will create a new element within the output box, probably a div with a header and maybe p using the bodt tag
