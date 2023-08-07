import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Link from 'next/link';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Dropdown from '@mui/base/Dropdown';
import Menu from '@mui/base/Menu';
import MenuItem from '@mui/base/MenuItem';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';

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

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    const id = open ? 'simple-popper' : undefined;

    const leavingMouseFunc = () => {
        setValue(-2);
        handleClick;
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
            onMouseLeave={leavingMouseFunc}
            onMouseOut={leavingMouseFunc }
        >
            <AntTab disabled label="" value={-1} />
            <AntTab icon={<HomeRoundedIcon />} href="/" component={Link} />
            <AntTab label="Learning Academy LMS"  href="/lms" component={Link} />


            <AntTab label="Unreal Engine 5" onMouseEnter={handleClick}></AntTab>
            <Popper id={id} open={open} anchorEl={anchorEl}>
                <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }} onMouseLeave={handleClick}>
                    The content of the Popper.
                </Box>
            </Popper>

            <AntTab label="Unreal Engine 4" />

            <AntTab label="C++ CLI" />
            <AntTab label="OpenGL" />
            <AntTab label="RAGE (CSUS)" />
            </AntTabs>
    );
}