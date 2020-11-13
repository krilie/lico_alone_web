import React, {Component} from 'react';
import IcpLabel from "./IcpLabel";

class WebFooter extends Component {
    render() {
        return (
            <footer style={{
                padding: "1rem 1rem 1rem",
                backgroundColor: "#ffffff"
            }}>
                <div className="content has-text-centered">
                    <IcpLabel/>
                </div>
            </footer>
        );
    }
}

export default WebFooter;