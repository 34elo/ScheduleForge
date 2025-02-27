import {Tab} from "@mui/material";
import {useState} from "react";
import TabPanel from "@mui/lab/TabPanel";
import {Box} from "@mui/system";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";

const tabsData = [
    {
        id: '1',
        name: 'Point 1',
        info: {
            address: 'Address 1',
            city: 'City 1',
            state: 'State 1',
        }
    },
    {
        id: '2',
        name: 'Point 2',
        info: {
            address: 'Address 2',
            city: 'City 2',
            state: 'State 2',
        }
    },
    {
        id: '3',
        name: 'Point 3',
        info: {
            address: 'Address 3',
            city: 'City 3',
            state: 'State 3',
        }
    }
];


export default function SchedulePage() {
    const getTabInfo = () => {
        const selectedTab = tabsData.find(tab => tab.id === value);
        if (selectedTab) {
            return `${selectedTab.info.address}, ${selectedTab.info.city}, ${selectedTab.info.state}`;
        }
        return "Выберите интересующую точку";
    }
    const [value, setValue] = useState(1);

    function handleChange(e, newValue) {
        setValue(newValue);
    }


    return (
        <Box sx={{flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224}}>
            <TabContext value={value}>
                <Box sx={{
                    '& .MuiTab-root': {
                        backgroundColor: 'transparent',
                        transition: 'opacity 0.3s ease, transform 0.3s ease',
                        opacity: 0.6,
                        transform: 'scale(0.95)',

                        '&.Mui-selected': {
                            backgroundColor: '#c1c1c1',
                            color: 'black',
                            borderRadius: "20px",
                            opacity: 1,
                            transform: 'scale(1)',
                        },
                    },
                }}>
                    <TabList
                        onChange={handleChange}
                        aria-label="lab API tabs example"
                        orientation="vertical"
                        indicatorColor="transparent"
                        color='transparent'
                        textColor="primary"
                    >
                        {tabsData.map((tab) => (
                            <Tab key={tab.id} label={tab.name} value={tab.id}/>
                        ))}
                    </TabList>
                </Box>
                <TabPanel value={value} key={value}>
                    {getTabInfo()}
                </TabPanel>
            </TabContext>
        </Box>
    );
}