// const storage = {
//     theme: 'dark', 
//     user: 'milh',
//     price: 150,
// }


// localStorage.setItem('test', JSON.stringify(storage));


// const valueStorage = localStorage.getItem('test');
// const parcedLocalStorage = JSON.parse(valueStorage)

// console.log(parcedLocalStorage.theme)

// localStorage.removeItem('test')

//  FORM****************************************************************************************************************

const refs = {
    form: document.querySelector('.js-form'),
    textArea: document.querySelector('.js-form textarea'),
};


refs.form.addEventListener('submit', handleTextAreaInput);
refs.textArea.addEventListener('input', getTextAreaContent);

applyFeedback();


function handleTextAreaInput(event) {
    event.preventDefault();

    console.log(localStorage.getItem('feedbackMessage'));

    localStorage.removeItem('feedbackMessage')
    event.currentTarget.reset();

} 

function getTextAreaContent(event) {

    const message = event.currentTarget.value;
    localStorage.setItem('feedbackMessage',message)
};

    
function applyFeedback() {
    const feedbackText = localStorage.getItem('feedbackMessage')
    if (feedbackText) {
        refs.textArea.value = feedbackText;
    }
}