import React, { Component } from 'react';
import { Card, Avatar } from 'antd';

import classes from './Card.module.less';


const card = (props) => {

    return (
        <div className={classes.Card}>
            <Card>
                <Avatar size="large" icon="user" />
                <p>Name: { props.firstname + ' ' + props.lastname }</p>
                <p>Birthday: { props.bday}</p>
                <p>Phone: { props.phone }</p>
            </Card>
        </div>
    );
    
}

export default card;
