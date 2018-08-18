import * as React from "react";

export interface iFirst { compiler: string; framework: string; }


export class Hello extends React.Component<iFirst, {}> {
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}
