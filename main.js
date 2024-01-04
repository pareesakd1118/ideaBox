/*<><>Data Models<><>*/
var savedIdeas = []
/*<><>Query Selectors<><>*/
var saveButton = document.querySelector('#save-button')
var titleInput = document.querySelector('#title')
var bodyInput = document.querySelector('#body')
/*<><><>Event Listeners<><>*/
saveButton.addEventListener('click', saveIdea)
/*<><>Functions<><>*/
function saveIdea() {
    if(titleInput.value.length > 0 && bodyInput.value.length > 0) {
        var idea = {
            title: titleInput.value,
            body: bodyInput.value,
            id: Date.now(),
        }
    console.log(idea)
}
}

// function pushIdea(idea) {
// savedIdeas.push(idea)
// }

