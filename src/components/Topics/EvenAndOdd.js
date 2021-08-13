import React, { Component } from 'react'

export default class EvenAndOdd extends Component {

    state = {
    evenArr: [],
    oddArr: [],
    userInput: ""
}

    onChange(val) {
    this.setState({ userInput: val })
}

    assignEvenAndOdds(userInput) {
    let arr = userInput.split(',')
    let evens = []
    let odds = []

    for (let i = 0; i < arr.lenght; i++){
        if (arr[i] % 2 === 0) {
            evens.push( parseInt(arr[i], 10) )
        } else {
            odds.push( parseInt(arr[i], 10) )
        }
    }
    this.setState({ evenArr: evens, oddArr: odds})
}

    render() {
    return (
        <div className='puzzleBox evenAndOddPB'>
            <h4>Even and Odds</h4>
            <input type="text" className='inputLine' onChange={ (e) => this.handleChange(e.target.value)}/>
            <button className='confirmationButon' onClick={ () => { this.assignEvenAndOdds(this.state.userInput) }}>Split</button>
            <span className='resultsBox'> Evens: { JSON.stringify(this.state.evenArr) }</span>
            <span className='resultsBox'> Odds: { JSON.stringify(this.state.oddArr) }</span>
        </div>
        )
    }

}