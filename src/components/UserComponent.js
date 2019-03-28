import React, { Component } from 'react';

class UserComponent extends Component {
    users = [{name: 'John'}, {name:'Jane'}, {name:'Dani'}];


    render() {
        const ids = users.map((user) => {
        retrun user;
        })

    }
}

export default UserComponent;