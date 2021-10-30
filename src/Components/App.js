import React, { Component } from 'react';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import Section from './section/Section';
import Statistics from './statistics/Statistics';

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };


    leaveFeedback = (name) => {
        this.setState((prev) => ({
            [name]: prev[name] + 1
        }))
    }

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state
    return good + neutral + bad
    }
    
    

    
    countPositiveFeedbackPercentage = () => {
        return Math.floor(this.state.good / this.countTotalFeedback() * 100) || 0
    }

    render() {
        return (
            <>
                <Section title={"Please Leave Feedback"}>
                    <FeedbackOptions
                        leaveFeedback={this.leaveFeedback}
                        fbOptions={["good", "neutral", "bad"]}
                    />
                </Section>
                <Section title={"Statistics"}>
                    <Statistics
                        state={Object.entries(this.state)}
                        total={this.countTotalFeedback()}
                        percentage={this.countPositiveFeedbackPercentage()}
                    />
                </Section>
            </>
        )
    };
}

export default App;