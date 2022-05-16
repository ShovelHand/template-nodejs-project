declare function require(moduleName: string): any;

var React = require('react');
var ReactDOM = require('react-dom');
import JellicleCatsList from "./components/jellicleCatsList";
export class Main extends React.Component {
    render() {
        return (
            <JellicleCatsList/>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));