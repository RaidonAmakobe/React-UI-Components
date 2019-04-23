import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import './Header.css';
import moment from 'moment';
const time = moment();

const HeaderTItle = () => {
    return (
        <div className = "header-title-wrapper">
            <div className = "header-title">
                Lambda School
                <span className = "time-stamp">{time.format('MMM Do ')}</span>
                <Headercontent />
            </div>
        </div>
    );
};
 
