import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import Image from 'next/image';
import LogoImage from '/public/logo.png'
import Link from 'next/link';
import NavTabs from '/components/navtabs.js'
import { styled } from '@mui/material/styles';


var classes = {
    logo: {
        margin: 'auto',
        textAlign: 'center',
        maxWidth: '50%',
        maxHeight: '70%',
    },
    logoHorizontallyCenter: {
        position: "absolute",
        left: "50%",
        top: "35%",
        bottom: "0%",
        transform: "translate(-50%, -50%)"
    },
    tabsCenter: {
        position: "absolute",
        display: "flex",
        left: "50%",
        top: "70%",
        transform: "translate(-50%, -50%)"
    }
};

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'flex-start',
    paddingTop: "7%",
    paddingBottom: "0%",
    backgroundColor: '#1c1c1c',
    // Override media queries injected by theme.mixins.toolbar
    '@media all': {
        minHeight: 100,
    },
}));

const LogoComponent = () => (
        <Image
            src={LogoImage}
            height={60}
            width={260}
            alt="Logo"
            className={classes.logo}
        />
);

function HideOnScroll(props) {
    const { children, window } = props;

    const trigger = useScrollTrigger({
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
};

export default function NavBar(props) {
    return (
        <React.Fragment>
            <CssBaseline />
            <HideOnScroll {...props }>
                <AppBar>
                    <StyledToolbar>
                        <div style={classes.logoHorizontallyCenter}>
                            <Link href="/"><LogoComponent /></Link>
                        </div>
                        <div style={classes.tabsCenter}>
                            <NavTabs></NavTabs>
                        </div>
                    </StyledToolbar>
                </AppBar>
            </HideOnScroll>
        </React.Fragment>
    );
}