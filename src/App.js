
import './App.css';
import 'bulma/css/bulma.css'
import React from "react";

class App extends React.Component {
    render() {
        return (
            <div className="viewer">
                <div className="columns">
                    <div className="column">
                        First column
                    </div>
                    <div className="column">
                        Second column
                    </div>
                    <div className="column">
                        Third column
                    </div>
                    <div className="column">
                        Fourth column
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
