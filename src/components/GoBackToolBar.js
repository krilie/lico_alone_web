import React from 'react';
import "./GoBackToolBar.css"

export default function GoBackToolBar(props) {
    return (
        <div className="go-back-toolbar">
            <div title="返回上一级"
                 onClick={e => props.history.goBack()}
                 className="go-back-button button is-light">
                <strong>⇐&nbsp;&nbsp;返回上一级</strong></div>
        </div>
    );
}
