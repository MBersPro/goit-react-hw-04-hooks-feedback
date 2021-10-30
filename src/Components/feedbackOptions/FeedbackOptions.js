import React from 'react';
import PropTypes from 'prop-types';
import { ul, li, button } from './Feedback.module.css';

const FeedbackOptions = ({leaveFeedback, fbOptions}) => {
    return (
        <ul className={ul}>
            {fbOptions.map(item => 
                    <li className={li}>
                    <button className={button} onClick={() => leaveFeedback(item)}>{item}</button>
                    </li>
                )}
        </ul>
    );
}

FeedbackOptions.propTypes = {
    leaveFeedback: PropTypes.func.isRequired
}

export default FeedbackOptions;