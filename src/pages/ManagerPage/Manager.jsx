import { useState } from "react";
import { Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import Box from "@mui/material/Box";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import SchedulePage from "../../components/Schedule.jsx";

export default function ManagerPage() {
    const [value, setValue] = useState("1");

    function handleChange(e, newValue) {
        setValue(newValue);
    }

    return (
        <>
            <h3>Manager Menu</h3>
            <TabContext value={value}>
                <Box>
                    <TabList
                        onChange={handleChange}
                        value={value}
                        textColor="primary"
                        centered={true}
                        indicatorColor="transparent"
                        sx={{
                            '& .MuiTab-root': {
                                backgroundColor: 'transparent',
                                transition: 'opacity 0.3s ease, transform 0.3s ease',
                                opacity: 0.6,
                                transform: 'scale(0.95)',
                                padding: '1px 15px',
                                marginRight: '25px',
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
                        <Tab label="Расписание" value="1" />
                        <Tab label="Отчеты" value="2" />
                        <Tab label="Сотрудники" value="3" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <SchedulePage></SchedulePage>
                </TabPanel>
                <TabPanel value="2">Отчеты</TabPanel>
                <TabPanel value="3">Сотрудники</TabPanel>
            </TabContext>
        </>
    );
}