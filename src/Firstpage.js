import React, { Component } from 'react'
import Login from './Login';
import Registration from './Registration'

export default class Firstpage extends Component {
    render() {
        return (
            <div>
               <Registration/>
                <Login/>
            </div>
        )
    }
}
