import React,{Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Links} from '../../imports/collections/link';
class LinkList extends Component {
    renderRows() {
                            //console.log("invoked");
                  return this.props.links.map( link=> {
                                const { url,token,clicks } = link;
                                const shortLink = `http://localhost:3000/${token}`;
                                return (
                                    <tr key={`Math.random().toString(36).slice(-5)${token}`}>
                                        <td>{url}</td>
                                        <td><a href={shortLink}>{shortLink} </a></td>
                                        <td>{clicks}</td>
                                    </tr>
                                );
                            });
                        }
    render() {
        return (
            <div className="container">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>URL</th>
                            <th>Short Url</th>
                            <th>Clicks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default createContainer( ()=> {
    Meteor.subscribe('links');
    return { links : Links.find({}).fetch() };
},LinkList);