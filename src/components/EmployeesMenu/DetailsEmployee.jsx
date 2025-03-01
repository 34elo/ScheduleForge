import React from "react";
import {Button} from "@mui/material";
import {Box} from "@mui/system";

export default function DetailsEmployee({ nameEmployee }) {

    function handleDelete() {
        console.log(nameEmployee, ' delete');
    }

    return (
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h2 style={{margin: 0, marginTop: '10px', marginBottom: '10px'}}>Информация о сотруднике</h2>
            {nameEmployee}
            <Button variant="contained" onClick={handleDelete} sx={{backgroundColor: '#c1c1c1', marginTop: '100px', marginBottom: '10px'}}>
                Удалить сотрудника
            </Button>

        </Box>
    )
}