import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp.js';
import Fade from '@mui/material/Fade';
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

function ScrollTop(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            '#back-to-top-anchor',
        );

        if (anchor) {
            anchor.scrollIntoView({
                block: 'center',
            });
        }
    };

    return (
        <Fade in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: 'fixed', bottom: 16, right: 16 }}
            >
                {children}
            </Box>
        </Fade>
    );
}

ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
};

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
            <Toolbar id="back-to-top-anchor" />
            <ScrollTop {...props}>
                <Fab size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </React.Fragment>
    );
}