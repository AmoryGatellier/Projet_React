import React, { useState } from 'react';

function Toggle() {
    const [Status, setStatus] = useState('on');

    return (
        <div>
            <p>{Status}</p>
            <button onClick={() => {if(Status == 'on' ){
                setStatus('off')}else{
                    setStatus('on')
                }}}>
            ON / OFF
            </button>
        </div>
  );
}
export default Toggle;