import React from './node_modules/react';

function Button(props){

    console.log(props);
    return(
        <a href={props.href} className={props.className}>
            Novo filme 
        </a>
    );
}

export default Button;