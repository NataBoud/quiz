import './index.scss'
import React from 'react'
import { useState } from 'react'


const questions = [
  {
    title: "React.js c'est...",
    variants: [
      "une bibliothèque JavaScript", 
      "un framework", 
      "une application"],
    correct: 0,
  },
  {
    title: "Component c'est...",
    variants: [
      "une application", 
      "une partie d'une application ou d'une page web", 
      'je ne sais pas'],
    correct: 1,
  },
  {
    title: "Qu’est-ce que JSX?",
    variants: [
      "Il s'agit d'un simple HTML",
      "C'est une fonction",
      'Une extension React de la syntaxe du langage JavaScript ',
    ],
    correct: 2,
  },
];


function Game({step, question, onClickVariant }) {
  const persentage = Math.round((step / questions.length) * 100)
  return (
    <>
      <div className="progress">
        <div style={ {width: `${persentage}%`} } className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {
          question.variants.map((text, index) => 
            <li onClick={() =>onClickVariant(index)} key={text}>
                {text}
            </li>)
        }       
      </ul>
    </>
  );
}

function Result({ correct }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
      <a href='/'>
        <button>Попробовать снова</button>
      </a>
    </div>
  );
}

function Result1({ correct }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/11202/11202610.png" />
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
      <a href='/'>
        <button>Попробовать снова</button>
      </a>
    </div>
  );
}

function Result2({ correct }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/11202/11202672.png" />
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
      <a href='/'>
        <button>Попробовать снова</button>
      </a>
    </div>
  );
}



function App() {
  const [step, setStep] = useState(0)
  const [correct, setCorrect] = useState(0)
  const question = questions[step]
  
  
  const onClickVariant = (index) => {
    console.log(step, index)
    setStep(step + 1)

    if (index === question.correct) {
      setCorrect(correct + 1)
    }
  }

  return (
    <div className="App">
      {
        step !== questions.length ? 
        (<Game step={step} question={question} onClickVariant={onClickVariant}/>)
        : correct  === 2 ? (<Result1 correct={correct}/>)
        : correct < 2 ? (<Result2 correct={correct}/>)
        : (<Result correct={correct}/>)
      
      }   

    </div>
  );
}

export default App





// (<Result1 correct={correct}/>)}

// Сначала вытаскиваем пер вопрос и делаем render (отображаем его)в App() (пока там статика) const [step, setStep] = useState(0)
// Потом передаем step в component <Game> - <Game question={question} />
// Потом function Game({ question }) {} и рендерим его в <h1>{question.title}</h1>
// Теперь нужно отрендерить варианты ответа в <ul> 
// C помощью map() мы пробегаемся по каждому варианту 
// и мы хотим превратить этот масссив вариатов variants [] в массив <li> - .map(text => <li>{text}</li>)
// обязательно когда мы рендерим любой список мы должны указывать ключ index

// Далее при клике на вариант ответа мне нужно переходить на след вопрос. Создаем функ кот будет понимать что произошел клик onClickVariant(получает один из вариантов - index) 
// Потом onClickVariant передаем в  <Game question={question} onClickVariant={onClickVariant}/>
// Потом передаем в  компонент Game function Game({ question, onClickVariant }) {} и передаю внутрь каждого <li>
// Теперь мы должны понять какой вариант мы выбрали для этого вытаскиваем индекс с помощью стрелочной функции и передаем внутрь нашего onClick индекс - onClick={() =>onClickVariant(index)} 


// Далее мы должны перейти на след step(question) setStep(step + 1) 
// теперь увеличиваем прогресс barre добавл step  <Game step={step} question={question} onClickVariant={onClickVariant}/> 
// и доб step в function Game({step, question, onClickVariant }) {}
// { width: `${persentage}%` }

// отображаем результат, теперь нужно узнать сколько правильных ответов для этого создаем новый state const [correct, setCorrect] = useState(0) 
// проверка if (index === question.correct) {setCorrect(correct + 1)}
// теперь в <Result /> необходимо передать колво правильн вариантов
// https://cdn-icons-png.flaticon.com/512/11202/11202610.png
