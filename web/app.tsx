declare function require(moduleName: string): any;

import React from 'react';
//const css =  require('./styles/styleSheet.module.css'); 
var ReactDOM = require('react-dom');
import JellicleCatsList from "./components/jellicleCatsList";
import CatForm from "./components/inputs/CatForm";

export class Main extends React.Component {
    render() {
      return (
          <div id="jellicleCats">
            <JellicleCatsList />
            <CatForm />
          </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));