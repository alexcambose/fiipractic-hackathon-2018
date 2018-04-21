import React, { Component } from 'react'

import FontAwesomeIcon from '@fortawesome/react-fontawesome';


export default class Rating extends Component {

    render() {
        let score = this.props.score;
       
        let totalScore = 5;
        let negativeScore = totalScore - score;

        let arr = [];
        while (score) {
            arr = [...arr, (<FontAwesomeIcon className="box-star-active" icon="star" />)];
            score--;
        }

        while (negativeScore) {
            arr = [...arr, (<FontAwesomeIcon className="box-star" icon="star" />)];
            negativeScore--;
        }


        return arr;
        
      
    }

}