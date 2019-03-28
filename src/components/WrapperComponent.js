import React, { Component } from 'react';
import styles from './ModuleStyling.module.css';

class WrapperComponent extends Component {
    render() {
        return (
            <div className={styles.card}>
                <h1>Hello</h1>
                <hr/>
                <button className={styles.button}>Show content</button>
            </div>
        )
    }
}

export default WrapperComponent;