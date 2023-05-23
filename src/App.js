import dataQuestions from './dataQuestions'
import Question from './Questions'

const App = () => {

  return (
    <div>
        {
            dataQuestions.map((oneQuestion) => {
             return <Question key={oneQuestion.id} title={oneQuestion.title} info={oneQuestion.info}/>
            })
        }
    </div>
  )
}

export default App