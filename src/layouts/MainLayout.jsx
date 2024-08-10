import React from 'react';
import classnames from 'classnames/bind'
import styles from './MainLayout.module.scss'
import {Box} from "@mui/material"
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom';


const cx = classnames.bind(styles)

// eslint-disable-next-line react/prop-types
function MainLayout() {
    return (
        <React.Fragment>
            <Header />
                <Box sx={{display: 'flex',marginTop: '60px', width: '100vw',maxWidth: '100%', justifyContent: 'space-between', alignItems: 'center', flex: '1 1 auto',}}>
                    <Sidebar />
                    <div className={cx('content')}>
                        <Outlet />
                    </div>
                </Box >
        </React.Fragment>
        
      );
}

export default MainLayout
