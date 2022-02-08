import React from 'react';

const BoxColor = (props) => {
    let divStyle = { backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})` };

    function componentToHex(c) {
        let hex = c.toString(16);
        return hex.length === 1 ? '0' + hex: hex;
    }

    function rgbToHex(r, g, b) {
        return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    return (
        <div className = "box" style={divStyle}>
            <p>
                rgb({props.r}, {props.g}, {props.b})
            </p>
            <p>
                {rgbToHex(props.r, props.g, props.b)}
            </p>
        </div>
    );
};

export default BoxColor;