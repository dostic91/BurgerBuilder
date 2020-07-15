import React from 'react';
import Aux from '../../hoc/Auxi';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import '../../components/Layout/Layout.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = (props) => (
    <Aux>
       <Toolbar />
       <SideDrawer />
        <main className="Content">
            {props.children}
        </main>
    </Aux>
);

export default layout;