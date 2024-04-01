import { useState } from 'react'
const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad;
  const avg = total === 0 ? 0 : (good*1 + neutral*0 + bad*-1)/total;
  const positive = total === 0 ? 0 : (good / total) *100;
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>good </td>
            <td> {good} </td>
          </tr>
          <tr>
          <td>neutral </td>
          <td> {neutral} </td>
          </tr>
          <tr>
          <td>bad </td>
          <td> {bad} </td>
          </tr>
          <tr>
          <td>all </td>
          <td> {total} </td>
          </tr>
          <tr>
          <td>average </td>
          <td> {avg} </td>
          </tr>
          <tr>
          <td>positive </td>
          <td> {positive} %</td>
          </tr>
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