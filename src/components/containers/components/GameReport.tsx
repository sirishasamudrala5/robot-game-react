import * as React from 'react'

interface ReportProps {
    x:number, 
    y:number, 
    d:number,
    xmax:number,
    ymax:number,
    onSetPos:  (x:number, y:number, d:number) => void
}

interface ReportState {
    xp:number, 
    yp:number, 
    dp:number,
    xmax:number,
    ymax:number
}

class GameReport extends React.Component<ReportProps, ReportState> {
    constructor(props: ReportProps){
        super(props)
        this.state={
            xp: this.props.x,
            yp: this.props.y,
            dp: this.props.d,
            xmax:this.props.xmax,
            ymax:this.props.ymax
        }
    }
    public handleChange = (event  : any) =>{
        if(event.target.value>4 || event.target.value<0){ 
            alert("Invalid Input!")
        }
        this.setState<never>({[event.target.name] : event.target.value})
    }

    public handleClick = (event: any) =>{
        
        var newx = this.state.xp
        var newy = this.state.yp
        var newd = this.state.dp

        switch(event.target.value){
            case 'move': 
                // 0 - N - yplus
                //  1- E - xplus
                // 2-S - y minus
                // 3-W - xminus
                // based on direction updated the position
                switch(newd){
                    case 0: if(newx < this.props.xmax){newx++}; break; 
                    case 1: if(newy < this.props.ymax){newy++}; break;
                    case 2: if(newx > 0 ){ newx--}; break;
                    case 3: if(newy > 0 ){ newy--}; break;
                } 
            break;
            case 'right': if(newd == 3){ newd =0 } else {newd++} ; break;
            case 'left': if(newd == 0){ newd = 3} else{newd--} ; break;
        }

        // set state is async , so do the parent state change in callback
        this.setState<never>({dp : newd , xp: newx, yp: newy}, ()=>{
            this.props.onSetPos(this.state.xp, this.state.yp, this.state.dp)
        }) ;
        event.preventDefault();
    }
    render(){
        return(
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">Game plan</h3>
                </div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-sm-6 form-group">
                            <div className="input-group">
                                <span className="input-group-addon">X</span>
                                <input type="number" min="0" max="4" pattern="[0-4]{1}" title="Invalid input" className="form-control" name="xp" onChange={this.handleChange} value={this.state.xp}></input>
                            </div>
                        </div>
                        <div className="col-sm-6 form-group">
                            <div className="input-group">
                                <span className="input-group-addon">Y</span>
                                <input type="number" min="0" max="4" pattern="[0-4]{1}" title="Invalid input" className="form-control" name="yp" onChange={this.handleChange} value={this.state.yp}></input>
                            </div>
                        </div>
                        <div className="col-sm-8 form-group">
                            <div className="input-group">
                                <span className="input-group-addon">Face</span>
                                <select className="form-control" name="dp" onChange={this.handleChange}>
                                    <option value="0">North</option>
                                    <option value="1">East</option>
                                    <option value="2">South</option>
                                    <option value="3">West</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-3 form-group">
                            <button className="btn btn-success" value="place" onClick={this.handleClick}>Place</button>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col-md-4" ><button className="btn btn-success" value="left" onClick={this.handleClick}>Left</button></div>
                        <div className="col-md-4"><button className="btn btn-success" value="move" onClick={this.handleClick}>Move</button></div>
                        <div className="col-md-4" ><button className="btn btn-success" value="right" onClick={this.handleClick}>Right</button></div>
                    </div>
                    <br/>
                    <div className=" row well">
                        INSTRUCTIONS:
                        <br/>
                        <ul>
                            <li>Move: To move a step forward in current direction</li>
                            <li>Right: Turn right while staying in same position</li>
                            <li>Left: Turn left while staying in same position</li>
                            <li>Place: Enter some value for x,y, direction and click place to change the position</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default GameReport;