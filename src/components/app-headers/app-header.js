import React, {Component} from "react";
import './app-header.css';

export  default class AppHeader extends Component{
    render() {
        const {liked, allPost} = this.props
        return(
            <div className = "app-header d-flex">
                <h1>Facebook App</h1>
                <h2> {allPost} записей, из них понравилось {liked}</h2>
            </div>

        )
    }
}
