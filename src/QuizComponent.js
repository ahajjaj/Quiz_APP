import React, { Component } from 'react'
import {QuizData} from './QuizData'
import Pic from './pic_man.png'

class QuizComponent extends Component {
state = {
    userAnswer:null,
    currentIndex:0,
    options: [],    
    quizEnd: false,
    score: 0,
    disabled: true
}
    

    // Quiz actuel
    loadQuiz = () => {
        const {currentIndex} = this.state
        this.setState(() => {
            return {
                question: QuizData[currentIndex].question,
                options : QuizData[currentIndex].options,
                answer: QuizData[currentIndex].answer          
            }
        }
        )
    }

    // Gère l'événement Click pour le bouton suivant
    nextQuestionHander = () => {
        const {userAnswer, answer, score} = this.state
        this.setState({
            currentIndex: this.state.currentIndex + 1
        })

        // Vérifiez la réponse correcte et le score d'augmentation
        if(userAnswer === answer){
            this.setState({
                score: score + 1
            })
        }
    }

    // Chargez le quiz une fois le composant monté
    componentDidMount(){
        this.loadQuiz();
    }

    // Mettre à jour le composant
    componentDidUpdate(prevProps, prevState){
        const{currentIndex} = this.state;
        if(this.state.currentIndex !== prevState.currentIndex){
            this.setState(() => {
                return {
                    disabled: true,
                    question: QuizData[currentIndex].question,
                    options : QuizData[currentIndex].options,
                    answer: QuizData[currentIndex].answer          
                }
            });

        }
    }

    // Vérifiez la réponse
    checkAnswer = answer => {
        this.setState({
            userAnswer: answer,
            disabled:false
        })
    }

    finishHandler =() => {
        if(this.state.currentIndex === QuizData.length -1){
            this.setState({
                quizEnd:true
            })
        }
    }

    logout() {
        this.props.history.push('/logout/');
    }

    render() {
        const {question, options, currentIndex, userAnswer, quizEnd} = this.state    
        if(quizEnd) {
            const {username} = this.props.match.params
            return (           
                <div>
                <h1>Welcome <i>{username}</i> 😃 </h1>
                <button onClick={this.logout.bind(this)}>Logout</button>
                <br />  
                    <h1>Jeu terminé. Le score final est : {this.state.score} points 🤪</h1>
                    <p>Les bonnes réponses pour le quiz sont :</p>
                    <ul>
                        {QuizData.map((item, index) => (
                            <li className='options'
                                key={index}>
                                    {item.answer}
                            </li>
                     ))}
                    </ul>
                </div>
            )
        }
        const {username} = this.props.match.params
        return (
            <div>
               <h1>Welcome : <i>{username}</i> 😃</h1>
               <button onClick={this.logout.bind(this)}>Logout</button>
               <br />
               <h2>{question} 🤔</h2>
                <span>{`Question ${currentIndex+1} of ${QuizData.length}`}</span>
                <img class="fit-picture" src={Pic} />
                {options.map(option => (
                    <p key={option.id} 
                    className={`options ${userAnswer === option ? "selected" : null}`}
                    onClick= {() => this.checkAnswer(option)}>
                        {option}
                    </p>
                ))}
                {currentIndex < QuizData.length -1 &&  
                // Le bouton Suivant ne s'affiche que si ce qui précède est vrai
                <button 
                    className="ui inverted button" 
                    disabled = {this.state.disabled}
                    onClick = {this.nextQuestionHander}
                 >Suivante</button>
                }
                 {currentIndex === QuizData.length -1 &&
                    <button
                    className="ui inverted button"
                    disabled = {this.state.disabled}
                    onClick = {this.finishHandler}
                    >Fin 😎</button>
                 }
            </div>
        )
    }
}

export default QuizComponent