class UserInt{
    constructor(){
        this.newsletterCard = document.getElementById('newsletter-card');
        this.successMessageCard = document.getElementById('success-message'); 
    }

    static showAlert(color, msg){
        const alertBody = document.createElement('span');
        alertBody.className = 'alert';
        alertBody.style.color = color;
        alertBody.appendChild(document.createTextNode(msg));
        userInput.style.borderColor = color;

        form.insertBefore(alertBody, userInput);
          

        setTimeout(()=>{
            alertBody.style.display = 'none';
            userInput.style.borderColor = 'hsl(231, 7%, 60%)';
        }, 2000);
    }

    
    
}


// Instantiating the UserInt class
const UI = new UserInt;
const emailRegExP = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");

// UI vars
const userInput = document.getElementById('email');
const form = document.getElementById('news-form');

// Event Listener for form submission
form.addEventListener('submit', (e) => {

    // validating user Input 
    if(userInput.value === '' || !emailRegExP.test(userInput.value)){
        // show error alert
       UserInt.showAlert('red', 'Insert valid email address!');
    }else{
        //show success alert
        document.getElementById('user-mail').innerText = `${userInput.value}`;
        // document.getElementById('success-message').style.display = 'block';
        // document.getElementById('newsletter-card').style.display = 'none';
        UI.newsletterCard.style.display = 'none';
        UI.successMessageCard.style.display = 'block';

       
    }
    // console.log('submitted');

    e.preventDefault();
});






