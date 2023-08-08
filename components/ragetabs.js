import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Link from 'next/link';


const AntTabs = styled(Tabs)({
    minWidth: 50,
    borderBottom: '1px solid #e8e8e8',
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

export default function RageTabs() {
    const [value, setValue] = React.useState(0);

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
            <AntTab label="Warrior's End" href="/rage/warriorsend" component={Link} value={-1} />
            <AntTab label="Dolphin Conqueror" href="/rage/dolphin" component={Link} />
        </AntTabs>
    );
}