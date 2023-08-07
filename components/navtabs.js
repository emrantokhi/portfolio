import * as React from 'react';
import { styled } from '@mui/material/styles';
import styles from '../styles/Home.module.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Link from 'next/link'; import MainPage from '/pages/index.js'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const AntTabs = styled(Tabs)({
    minWidth: 50,
    borderBottom: '0px solid #e8e8e8',
    paddingLeft: "2%",
    paddingRight: "9%",
    '& .MuiTabs-indicator': {
        backgroundColor: '#ffffff',
    },
});

//had disableripple right of tab
const AntTab = styled((props) => <Tab {...props} />)(({ theme }) => ({
    textTransform: 'none',
    minWidth: 50,
    [theme.breakpoints.up('sm')]: {
        minWidth: 50,
    },
    fontWeight: theme.typography.fontWeightRegular,
    
    color: '#ffffff',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        color: '#a8a8a8',
        opacity: 1,
    },
    '&.Mui-selected': {
        color: '#a8a8a8',
        fontWeight: theme.typography.fontWeightMedium,
    },
    '&.Mui-focusVisible': {
        backgroundColor: '#a8a8a8',
    },
}));

export default function NavTabs(props) {
    const [value, setValue] = React.useState(0);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <AntTabs
            value={value}
            orientation="horizontal"
            overscroll-behavior-x="auto"
            allowScrollButtonsMobile={true}
            scrollable='on'
            variant='scrollable'
            onLoad={() => setValue(-2)}
            onChange={handleChange}
            onMouseLeave={() => setValue(-2)}
        >
            <AntTab disabled label="" value={-1} />
            <AntTab icon={<HomeRoundedIcon />} href="/" component={Link} />
            <AntTab label="Learning Academy LMS"  href="/unreal5/capybaracrush" component={Link} />

            <AntTab label="Unreal Engine 5" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
                <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                    <MenuItem onClick={handleClose}>Tester</MenuItem>
                </Menu>
            </AntTab>

            <AntTab label="Unreal Engine 4" />
            <AntTab label="C++ CLI" />
            <AntTab label="OpenGL" />
            <AntTab label="RAGE (CSUS)" />
            </AntTabs>
    );
}
