import React, {Component} from 'react';
import  classes from './Quiz.module.css';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

class Quiz extends Component {
    state = {
      activeQuestion: 0,
      answerState: null,
      quiz: [
        {
          question: 'Кто такой Сократ  в мировой истории?',
          rightAnswerId: 3,
          id: 1,
          answers: [
            {text: 'Врачиватель', id: 1},
            {text: 'Полководец', id: 2},
            {text: 'Философ', id: 3},
            {text: 'Вымышленная личность', id: 4}
           ]
        },
        {
          question:  'В каком году Государство Израиль получило независимость?' ,
          rightAnswerId: 2,
          id: 2,
          answers: [
            {text: '1900', id: 1},
            {text: '1948' , id: 2},
            {text: '1805', id: 3},
            {text: '1735', id: 4}
          ]
       }
    ]
 }

    onAnswerClickHandler= (answerId) => {
      const question = this.state.quiz[this.state.activeQuestion]

            this.setState({
                answerState: {[answerId]: 'success'}
            })
        if (question.rightAnswerId === answerId) {

          const timeout = window.setTimeout(()=> {
                if (this.isQuizFinished()) {
                  console.log('Finished')
                } else {
                  this.setState({
                    activeQuestion: this.state.activeQuestion + 1,
                    answerState: null
                  })
                }
            window.clearTimeout(timeout)
            }, 1000)

        } else {
          this.setState({
            answerState: {[answerId]: 'error'}
          })
        }
    }

      isQuizFinished() {
          return this.state.activeQuestion + 1 === this.state.quiz.length
      }
           render () {
          return <div className={classes.Quiz}>
                  <div className ={classes.QuizWrapper}>
                      <h1 >Ответьте на вопросы!</h1>
                      <ActiveQuiz
                        answers = {this.state.quiz[this.state.activeQuestion].answers}
                        question={this.state.quiz[this.state.activeQuestion].question}
                        onAnswerClick={this.onAnswerClickHandler}
                        quizLength={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion + 1}
                        state={this.state.answerState}
                      />
                    </div>
                </div>

    }
}

export default Quiz