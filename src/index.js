import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyList from './MyList';
import * as serviceWorker from './serviceWorker';

const toDos = [
  "Drop it low low", 
  "Eat spiders", 
  "Go to a Freestyle battle", 
  "PLay some Dota 2",
  "Stop contemplating and over exagerating execute more action taking"

]
 


ReactDOM.render(
  <React.StrictMode>
    <MyList theList={toDos}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
