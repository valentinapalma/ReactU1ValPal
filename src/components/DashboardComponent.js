import React, { Component } from 'react';
import styles from './ModuleStyling.module.css';
import WrapperComponent from './WrapperComponent';


class DashboardComponent extends Component {
    render() {
        return (
            <div className={styles.dashboard}>
                <WrapperComponent /> 
                <WrapperComponent />
            </div>
        )
    }
}

export default DashboardComponent;