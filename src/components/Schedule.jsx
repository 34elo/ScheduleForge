import {Tab, Tabs} from "@mui/material";
import {useState} from "react";

import TabPanel from "@mui/lab/TabPanel";
import {Box} from "@mui/system";


export default function SchedulePage() {

    const [value, setValue] = useState("1");

    function handleChange(e, newValue) {
        setValue(newValue);
    }

    return (
        <><Box
            sx={{flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224}}>
            <Tabs
                value={value}
                onChange={handleChange}
                orientation="vertical"
                variant="fullHeight"
                aria-label="Vertical tabs example"
                color="transparent"
                indicatorColor="transparent"
                sx={{
                    '& .MuiTab-root': {
                        backgroundColor: 'transparent',
                        transition: 'opacity 0.3s ease, transform 0.3s ease',
                        opacity: 0.6,
                        transform: 'scale(0.95)',
                        '&:last-child': {
                            marginRight: '0px'
                        },
                        '&.Mui-selected': {
                            backgroundColor: '#c1c1c1',
                            color: 'black',
                            borderRadius: "20px",
                            opacity: 1,
                            transform: 'scale(1)',
                        },
                    },
                }}
            >
                <Tab label="Точка 1" value="1"/>
                <Tab label="Точка 2" value="2"/>
                <Tab label="Точка 3" value="3"/>
                <Tab label="Точка 4" value="4"/>
            </Tabs>
            <TabPanel value={'1'}>
                {value}
            </TabPanel>
            <TabPanel value={'2'}>
                {value}
            </TabPanel>
            <TabPanel value={'3'}>
                {value}
            </TabPanel>
        </Box>
        </>
    )
}