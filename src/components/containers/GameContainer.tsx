import * as React from 'react'
import GameBoard from './components/GameBoard'
import GameReport from './components/GameReport'

interface GameState{
    x: number,
    y: number,
    d: number,
    xmax: number,
    ymax: number
}

class GameContainer extends  React.Component {
    public state: GameState = {
        x: 0,
        y: 0,
        d: 0,
        xmax: 4,
        ymax : 4
    }

    public clickHandler = (xp: number, yp: number, dp: number) => {
        return this.setState({
            x: xp,
            y:yp,
            d:dp
        })
    }


    public render(){
        return(
            <div className="row">
                <div className="col-md-5 col-md-offset-2"><GameBoard x={this.state.x} y={this.state.y} d={this.state.d} xmax={this.state.xmax} ymax={this.state.ymax} /></div>
                <div className="col-md-3"><GameReport x={this.state.x} y={this.state.y} d={this.state.d} xmax={this.state.xmax} ymax={this.state.ymax} onSetPos={this.clickHandler}/></div>
            </div>
        )
    }   
}

export default GameContainer;