import React, { Component } from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from '../../shared/theme.less';

class Layout extends Component {

    render () {
        return (
            <React.Fragment>
                <Toolbar />
                <main>
                    {this.props.children}
                </main>
            </React.Fragment>
        );
    }
}

export default Layout;
