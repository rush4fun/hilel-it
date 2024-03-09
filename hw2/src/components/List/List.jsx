import React, { Component } from 'react'

export default class ListClass extends Component {
    constructor(props){
        super(props);

        this.state = {...this.props};

        setTimeout(() => {

            this.setState({
                list: [...this.state.list, 'Kyiv'],
                color: `lightpink`
            })
            
        }, 1000)
    }

    state = {...this.props};

  render() {
    const {list=[], color} = this.state;

    function random_rgba() {
        var o = Math.round, r = Math.random, s = 255;
        return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
    };

    return list.length ? <ul style={{backgroundColor: color }}>
        {list.map((item, index) => <li key={index} style={{backgroundColor: random_rgba()}}>{item}</li>)}
    </ul> : null;
  }
}