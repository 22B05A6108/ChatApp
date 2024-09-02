import React from 'react';

const InputText = () => {
    return (
        <div className="inputtext_container"> 
            <textarea name="message" id="message" rows="6"></textarea>
            <button>Send</button>
        </div>
    );
}

export default InputText;
