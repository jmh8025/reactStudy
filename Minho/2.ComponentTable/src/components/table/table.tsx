import Button from '@material-ui/core/Button';
import * as React from "react"
import "./table.css";


interface tableProp<T>{
    memberInfo : T[],
}

export interface memberModelProps{
    name : string,
    age : number,
    phoneNum : string
}

class Mytable extends React.Component<tableProp<memberModelProps>, memberModelProps>{
    constructor(props : tableProp<memberModelProps>){
        super(props);
        this.state = {
            name : "",
            age : 0,
            phoneNum : ""
        };
    }
    
    public AddclickHandler = () => {
        this.setState((preState, props)=>{
            return {
                 name : "동",
                 age : 40,
                 phoneNum : "01055555555"    
                };
        })
    }

    public render(){
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th colSpan={3}>
                                스터디 멤버 정보
                            </th>
                        </tr>
                        <tr>
                            <th id="name">이름</th>
                            <th id="age">나이</th>
                            <th id="phone">전화번호</th>
                        </tr>
                        {
                            this.props.memberInfo.map(((member, index) => {
                                return(
                                    <TableRow 
                                        name={member.name} 
                                        age={member.age} 
                                        phoneNum={member.phoneNum}
                                    />
                                )
                            }))
                        }
                        {
                            this.state.name!=="" && 
                            <tr>
                                <td>{this.state.name}</td>
                                <td>{this.state.age}</td>
                                <td>{this.state.phoneNum}</td>
                            </tr>
                        }
                    </tbody>
                </table>
                <Button onClick={event => this.AddclickHandler()}  variant="contained"  color="primary">Add</Button>
            </div>
        )
    }
}

const TableRow : React.SFC<memberModelProps> = (props) => {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.age}</td>
            <td>{props.phoneNum}</td>
        </tr>
    )
}
export default Mytable;