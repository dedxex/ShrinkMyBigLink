import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/header';
import LinkCreate from './components/create_link';
import {Links} from '../imports/collections/link';
import LinkList from './components/link_list';
const App = ()=> {
  return(
    <div>
      <Header></Header>
      <LinkCreate></LinkCreate>
      <LinkList />
    </div>
  );
}
export default App;
Meteor.startup(()=> {
  ReactDom.render(<App /> , document.querySelector('.target'));
}) 