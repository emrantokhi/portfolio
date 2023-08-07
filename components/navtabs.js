import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from 'next/link'; import MainPage from '/pages/index.js'
import CapybaraCrushPage from '/pages/unreal5/capybaracrush.js'
import ReactDOM from 'react-dom';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

const AntTabs = styled(Tabs)({
    borderBottom: '0px solid #e8e8e8',
    '& .MuiTabs-indicator': {
        backgroundColor: '#ffffff',
    },
});

//had disableripple right of tab
const AntTab = styled((props) => <Tab {...props} />)(({ theme }) => ({
    textTransform: 'none',
    minWidth: 0,
    [theme.breakpoints.up('sm')]: {
        minWidth: 0,
    },
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(1),
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

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <AntTabs value={value} allowScrollButtonsMobile scrollable='auto' variant='scrollable' onLoad={() => setValue(-2)} onChange={handleChange} onMouseLeave={() => setValue(-2)}>
            <AntTab icon={<HomeRoundedIcon />} value={-1} href="/" component={Link} />
            <AntTab label="Learning Academy LMS"  href="/unreal5/capybaracrush" component={Link} />
            <AntTab label="Unreal Engine 5"  />
            <AntTab label="Unreal Engine 4"  />
            <AntTab label="C++ CLI" />
            <AntTab label="OpenGL" />
            <AntTab label="RAGE (CSUS)" />
        </AntTabs>
    );
}
