declare function require(moduleName: string): any;

var React = require('react');
var ReactDOM = require('react-dom');
import SampleEntityList from "./components/SampleEntityList";
export class Main extends React.Component {
    render() {
        return (
            <SampleEntityList/>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));