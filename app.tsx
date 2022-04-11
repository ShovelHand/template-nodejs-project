declare function require(moduleName: string): any;

var React = require('react');
var ReactDOM = require('react-dom');

export class Main extends React.Component {
    render() {
        return (
            <h1>Welcome to React!!</h1>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));