import { useState } from 'react'
import Button from "./components/Button";
import StatisticLine from "./components/StatisticLine";

const Statistics = (props) => {
    const {good, neutral, bad} = props;
    const [goodFactor, neutralFactor, badFactor] = [1, 0, -1];
    let total = 0;
    const getTotal  = () => {
        total = good + neutral + bad;
        return total;
    }
    const getAverage  = () => {
        return (good * goodFactor + neutral * neutralFactor + bad * badFactor) / total;
    }
    const getPositivePercent = () => {
        return good / total * 100;
    }

    return (
        <div>
            <h2>Statistics</h2>
            {
                getTotal() === 0
                    ? <p>No feedback given</p>
                    : <>
                    <table>
                        <tbody>
                        <StatisticLine label={'Good'} value={good}/>
                        <StatisticLine label={'Neutral'} value={neutral}/>
                        <StatisticLine label={'Bad'} value={bad}/>
                        <StatisticLine label={'All'} value={getTotal()}/>
                        <StatisticLine label={'Average'} value={getAverage()}/>
                        <StatisticLine isPercentage={true} label={'Positive'} value={getPositivePercent()}/>
                        </tbody>

                    </table>

                    </>

            }


        </div>
    )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0);

  return (
      <div>
        <h1>Give feedback</h1>
          <div>
              <Button text={'Good'} value={good} setValue={setGood}/>
              <Button text={'Neutral'} value={neutral} setValue={setNeutral}/>
              <Button text={'Bad'} value={bad} setValue={setBad}/>

          </div>
          <Statistics good={good} neutral={neutral} bad={bad}/>

      </div>
  )
}

export default App