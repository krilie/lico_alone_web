import React from "react";
import "./Icplable.css"

export default class IcpLabel extends React.Component {

    render() {
        const {name, link, label} = this.props;
        return (
            <a className="icpLabelDiv"
               title={label}
               href={link}
               target="_blank"
               rel="noopener noreferrer">{name}</a>
        );
    }
}
