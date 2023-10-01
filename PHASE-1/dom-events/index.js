//event listeners
document.addEventListener('DOMContentLoaded', () => {
    //console.log('The dom is loaded');

    const submitButton= document.getElementById('Submit')
    //console.log(submitButton)

    submitButton.addEventListener('click', () => {
        //console.log('Button click')
//to add a prompt to the button, 
        const input= prompt('What is your age');
        //console.log(input);
//to add an alert to tell the user their result
        alert(`Your age is ${input}`)
        //server communication comes into play
    })

    //accessing our contact form
    const form= document.getElementById('contact-form')
    //console.log(form)
    //access the button in th contact form
    const formButton= getElementById('form-button')
    console.log(formButton)
    
});