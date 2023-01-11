import React from "react";
import PropTypes from 'prop-types';

export const FirstApp = ({ title, paragraph}) => {
    return (
        <>
            <h1>{ title }</h1>
            <p>{ paragraph }</p>
        </>
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    paragraph: PropTypes.number.isRequired,
}

FirstApp.defaultProps = {
    title: 'No hay titulo',
    subtitle: 0
}