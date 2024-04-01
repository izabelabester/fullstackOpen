import { useState } from 'react'

const StatisticLine = ({ value, text }) => {
  return (
    <tr>
      <td> {text} </td>
      <td> {value} </td>
    </tr>
  );
};

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad;
  const avg = total === 0 ? 0 : (good*1 + neutral*0 + bad*-1)/total;
  const positive = total === 0 ? 0 : (good / total) *100;

  const getValue = (valueType) => {
    switch(valueType) {
      case 'good':
        return good;
        break;
      case 'neutral':
        return neutral;
        break;
      case 'bad':
        return bad;
        break;
      case 'total':
        return total;
      break;
      case 'avg':
        return avg;
      break;
      case 'positive':
        return positive + " %";
      break;
      default:
        break;
    }
  };
  return (
    <div>
      <table>
        <tbody>
        <StatisticLine text="good" value ={getValue("good")} />
        <StatisticLine text="neutral" value ={getValue("neutral")} />
        <StatisticLine text="bad" value ={getValue("bad")} />
        <StatisticLine text="total" value ={getValue("total")} />
        <StatisticLine text="average" value ={getValue("avg")} />
        <StatisticLine text="positive" value ={getValue("positive")} />
        </tbody>
      </table>  
    </div>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  );
};

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

const handleButtonClick = (feedbackType) => {
    switch(feedbackType) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };

  const anyFeedbackRecorded = good !== 0 || neutral !== 0 || bad !== 0;

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={() => handleButtonClick('good')} text="good" />
      <Button onClick={() => handleButtonClick('neutral')} text="neutral" />
      <Button onClick={() => handleButtonClick('bad')} text="bad" />

      <h1>Statistics</h1>
      {anyFeedbackRecorded ? (
        <Statistics good={good} neutral={neutral} bad={bad} />
      ) : (
        <span>No feedback recorded yet</span>
      )}
    </div>
  )
}

export default App