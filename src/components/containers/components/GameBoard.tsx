import * as React from 'react'
import '../../../css/GameBoard.css'
import pointer from '../../../images/pointer.png';

interface BoardProps{
    x: number,
    y: number,
    d: number,
    xmax: number,
    ymax: number
}

class GameBoard extends React.Component<BoardProps>{  

    public rotateImg (d: number){
        let imageDirec = ['myObj-N','myObj-E','myObj-S','myObj-W']
        return imageDirec[d]
    }
    public createTable = () => {
        let table = []

        //  Outer loop to create parent
        for (let i = 0; i <= this.props.xmax; i++) {
            let children = []
            //Inner loop to create children
            for (let j = 0; j <= this.props.ymax; j++) {
                if(this.props.xmax-i == this.props.x && j == this.props.y){
                    children.push(<td className="square" key={j}><img src={pointer} className={this.rotateImg(this.props.d)} /></td>)
                }
                else{
                    // {this.props.xmax-i-1 +`Column ${j}`}
                    children.push(<td className="square" key={j}></td>)
                }
            }
            //Create the parent and add the children
            table.push(<tr className="success" key={this.props.xmax-i-1}>{children}</tr>)
        }
        return table
    }


    public render() {
        let direc = ['North','East','South','West']

        return(
            <div className="panel panel-default">
                <div className="panel-body">
                    <table className="table table-bordered">
                        <tbody>
                            {this.createTable()}
                        </tbody>
                    </table> 
                </div>
                <div className="panel-footer panel-warning">Current Position: ({this.props.x}, {this.props.y}, {direc[this.props.d]})</div>
            </div>
        )
    }
}

export default GameBoard