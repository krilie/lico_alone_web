
import './App.css';
import 'bulma/css/bulma.css'
import React from "react";
import IcpLabel from "./components/IcpLabel";

class App extends React.Component {

    render() {
        return (
            <div className="viewer">
                <div className="container">
                    <div className="tile is-ancestor">
                        <div className="tile is-vertical is-8">
                            <div className="tile">
                                <div className="tile is-parent is-vertical">
                                    <article className="tile is-child box">

                                    </article>
                                    <article className="tile is-child box">

                                    </article>
                                </div>
                                <div className="tile is-parent">
                                    <article className="tile is-child box">

                                    </article>
                                </div>
                            </div>
                            <div className="tile is-parent">
                                <article className="tile is-child box">

                                </article>
                            </div>
                        </div>
                        <div className="tile is-parent">
                            <article className="tile is-child box">

                            </article>
                        </div>
                    </div>
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
