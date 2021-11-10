import React, { useState } from "react";
import FeedbackOptions from "./feedbackOptions/FeedbackOptions";
import Section from "./section/Section";
import Statistics from "./statistics/Statistics";

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const App = () => {
  const [state, setState] = useState({ ...initialState });

  const leaveFeedback = (name) => {
    setState((prev) => ({...prev, 
      [name]: prev[name] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = state;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.floor((state.good / countTotalFeedback()) * 100) || 0;
  };

  return (
    <>
      <Section title={"Please Leave Feedback"}>
        <FeedbackOptions
          leaveFeedback={leaveFeedback}
          fbOptions={Object.keys(state)}
        />
      </Section>
      <Section title={"Statistics"}>
        <Statistics
          state={Object.entries(state)}
          total={countTotalFeedback()}
          percentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </>
  );
};

export default App;
