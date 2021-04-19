// Form js file test
import React, {useState} from 'react';
import CreateAccount from '../CreateAccount';
import CreateAccountSuccess from '../CreateAccountSuccess';


const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false); 

    function submitForm() {                                
        setIsSubmitted(true);                              
    }

    return (
        <div>
            {!isSubmitted ? (<CreateAccount submitForm=
             {submitForm} />) : (<CreateAccountSuccess />)}
        </div>
    );
};

export default Form;