///form Event listener

const form = document.getElementById('interest-form');
form.addEventListener('submit', function(e){
    //Hide Results
    document.getElementById('results').style.display = 'none';

    //Show loader
    document.getElementById('loading').style.display = 'block';

    setTimeout(calculate, 2000);
    e.preventDefault();
});



///calculate Results
function calculate(){

        //UI variables
        const Principal = document.getElementById('principal').value,
            Time = document.getElementById('time').value,
            Rate = document.getElementById('rate').value,
            Answer = document.getElementById('answer');

        const calculatedInterest = (Principal * Time * Rate)/100;

        if(Principal === '' || Time=== '' || Rate ===''){
            showError('please check numbers');
            
        }

        else {
            clearInput();
            
            Answer.value = calculatedInterest;


             // Show Results
             document.getElementById('results').style.display = 'block';

             //Hide loader
             document.getElementById('loading').style.display = 'none';
        }

       
}


//Show Error

function showError(error){

    //Hide Results
    document.getElementById('results').style.display = 'none';

    //Hide loader
    document.getElementById('loading').style.display = 'none';

    //Create d div
    const errorDiv = document.createElement('div');

    //Get Elements 
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    //Add class 
    errorDiv.className = 'alert alert-danger text-center';

    //Create text node and append to errorDiv
    errorDiv.appendChild(document.createTextNode(error));

    //Insert before
    card.insertBefore(errorDiv, heading);

    //clear error after 3 seconds
    setTimeout(clearError, 3000);
}

//clear error 
function clearError(){
    document.querySelector('.alert').remove();
}


//clear Input field
function clearInput(){
    const Principal = document.getElementById('principal').value = '',
            Time = document.getElementById('time').value = '',
            Rate = document.getElementById('rate').value = '';
}