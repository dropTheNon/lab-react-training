import React from 'react';
import visaLogo from '../assets/images/visa.png';
import masterCardLogo from '../assets/images/master-card.svg';

const CreditCard = (props) => {
    return (
        <div style={{backgroundColor: props.bgColor, color: props.color}}>
            <img 
                src={props.type === 'Visa' ? visaLogo : masterCardLogo}
                alt="credit card logo" 
                width="150" 
                height="75"
            />
            <p>{props.type}</p>
            <p>**** **** **** {props.number.slice(-4)}</p>
            <p>{props.expirationMonth}</p>
            <p>{props.expirationYear}</p>
            <p>{props.bank}</p>
            <p>{props.owner}</p>
        </div>
    )
}

export default CreditCard;