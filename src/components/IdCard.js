import React from 'react';

const IdCard = (props) => {
    return (
        <div>
            <div>
                <img src={props.picture} alt=""/>
            </div>
            <div>
                <p><strong>First Name: </strong>{props.firstName}</p>
                <p><strong>Last Name: </strong>{props.lastName}</p>
                <p><strong>Gender: </strong>{props.gender}</p>
                <p><strong>Height: </strong>{props.height}m</p>
                <p><strong>Birthdate: </strong>{props.birth.toString()}</p>
            </div>
        </div>
    );
};

export default IdCard;