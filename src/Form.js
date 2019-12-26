import React from 'react';


class Form extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            data : 'Deep P Shah'
        }
        this.handleEvent = this.handleEvent.bind(this);
    }

    handleEvent(){
        console.log('Handle Event!!'+ this.props);
    }

    render(){
        return(
            <div className="Form"> 
                <h1> Form Display </h1>
                Name : <input type="text" value= {this.state.data}></input>
                <button onClick = {this.handleEvent} > Please Click</button>
            </div>
        );
    }

}


export default Form;