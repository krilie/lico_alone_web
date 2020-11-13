
import './App.css';
import 'bulma/css/bulma.css'
import React from "react";
import IcpLabel from "./components/IcpLabel";

class App extends React.Component {

    render() {
        return (
            <div className="viewer">
                <div className="container">
                    o
                </div>
                <footer className="footer">
                    <div className="content has-text-centered">
                        <IcpLabel/>
                    </div>
                </footer>
            </div>
        );
    }
}

export default App;
