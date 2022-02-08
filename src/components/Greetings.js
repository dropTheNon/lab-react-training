import React from 'react';

const Greetings = (props) => {
    let translator = {
        de: {
            greeting: "Hallo "
        },
        en: {
            greeting: "Hello "
        },
        es: {
            greeting: "Hola "
        },
        fr: {
            greeting: "Bonjour "
        }
    }

    return (
        <div>
            <p>{translator[props.lang].greeting} {props.children}</p>
        </div>
    )
}

export default Greetings;