import React from 'react';
import PropTypes from "prop-types";

const Section = ({ children, title }) => {
    console.log({children})
    return (
        <section>
            <h2>{title}</h2>
            {children}
        </section>
    );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.func.isRequired
}

export default Section;