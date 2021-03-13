import React, {Component} from 'react';
import './download-from-fetch.css';

export default class DownloadFromFetch extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
        <>
            <button
                className="button-download"
                onClick={this.props.onDownload}>
                Обновить
            </button>
        </>
        )
    }
}