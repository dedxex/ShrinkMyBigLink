import React,{ Component } from 'react';
class LinkCreate extends Component{
    constructor(props){
        super(props);
        this.state = { errors : 'enter your BIG URL here' };
    }
    formHandler(event){
        event.preventDefault();
        Meteor.call('links.insert',this.refs.link.value,(error) => {
            if(error) {
                this.refs.link.value = '';
                //this.refs.link.placeholder="sorry that url is not valid";
                this.setState( { errors : 'sorry that url is not valid' } );
            }
            else {
                //this.refs.link.placeholder="enter your BIG URL here";
                this.setState( { errors : 'enter your BIG URL here' } );
                this.refs.link.value = '';
            }

        });
    }
    render() {
        return(
            <div className="container">
                <form onSubmit={this.formHandler.bind(this)}>
                    <div className="form-group">
                        <input ref="link" className="form-control" placeholder={this.state.errors} />
                    </div>
                        <button className="btn btn-primary">create</button>
                </form></div>
            
        );
    }
} 
export default LinkCreate;