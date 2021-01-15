import React, {Component} from 'react';
import IcpLabel from "./IcpLabel";

class WebFooter extends Component {
    render() {
        return (
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "1rem 1rem 1rem",
                backgroundColor: "transparent"
            }}>
                <IcpLabel/>
            </div>
        );
    }
}

export default WebFooter;
