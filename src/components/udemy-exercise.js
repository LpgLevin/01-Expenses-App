import React, { useState } from 'react';


import React, {useState} from 'react';

// don't change the Component name "App"
export default function App() {
    
    const [warningMessage, setWarningMessage] = React.useState(null);


    
    function handleClickDelete() {
        setWarningMessage(
            <div id="alert">
              <h2>Are you sure?</h2>
              <p>These changes can't be reverted!</p>
              <button onClick={ handleClickProceed } >Proceed</button>
            </div>
            )
    };
    
    
    function handleClickProceed() {
        setWarningMessage(null);
    };
    
    
    return (
      <div>
        <button onClick={ handleClickDelete }>Delete</button>
       {warningMessage}
      </div>    
    );
}