import * as React from 'react';

import Button from '@material-ui/core/Button';

interface IFirstProps {
    button : string,
}

interface IFirstState {
    status : boolean,
}

class First extends React.Component<IFirstProps, IFirstState>{
    constructor(props : IFirstProps){
        super(props);
   
        this.state = { status : false };
    }

    public clickHandler = () => {
        this.setState((preState, props)=>{ 
            return { status : !preState.status };
        })
    }

    public render(){
        return (
            <div className="First">
                <Button onClick={this.clickHandler} variant="contained"  color="primary">
                    {this.props.button}
                </Button>
                {this.state.status && <h1>나왔다!!</h1>}
            </div>
        );
    }
}


export default First;