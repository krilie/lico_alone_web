import React from 'react';
import "./GoBackToolBar.css"
import '../common/beautons.css'

export default function GoBackToolBar(props) {
    return (
        <div className="go-back-toolbar">
            <div className="btn btn--go-back" title="返回上一级" onClick={e => props.history.goBack()}>
                <strong>⇐&nbsp;&nbsp;返回</strong></div>
        </div>
    );
}
