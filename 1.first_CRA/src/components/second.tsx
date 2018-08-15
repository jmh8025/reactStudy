import * as React from 'react';

import TextField from '@material-ui/core/TextField';

interface IFirstProps {
    name : string,
}

interface IFirstState {
    status : boolean,
}

class Second extends React.Component<IFirstProps, IFirstState>{
    constructor(props : IFirstProps){
        super(props);   
        this.state = { status : false };
    }

    
    public render(){
        return (
            <div className="Second">
               <TextField
                    id="name"
                    label="Name"
                    className="Second"
                    value={this.props.name}
                    margin="normal"
                />
            </div>
        );
    }
}


export default Second;