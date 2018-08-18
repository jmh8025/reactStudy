import * as React from 'react';


class Second extends React.Component{
    
    
    public render(){
        return (
            <div className="Second">
               {
                   1 + 1 === 3
                   ? '맞다'
                   : '틀리2다!'
               }
            </div>
        );
    }
}


export default Second;