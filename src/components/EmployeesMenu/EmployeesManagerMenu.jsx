import React, { useState } from "react";
import { Box, Typography } from "@mui/material"; // Импортируем Typography для текста
import CardsEmployees from "./CardsEmployees.jsx";
import DetailsEmployee from "./DetailsEmployee.jsx";
import NotificationEmployee from "./NotificationEmployee.jsx";

const cards = [
    {
        id: 0,
        title: 'Вася Пупкин',
        description: 'Plants are essential for all life.',
    },
    {
        id: 1,
        title: 'Астафьев Павел',
        description: 'Animals are a part of nature.',
    },
    {
        id: 2,
        title: 'Цветков Владимир',
        description: 'Humans depend on plants and animals for survival.',
    },
    {
        id: 3,
        title: 'Астафьев Павел',
        description: 'Animals are a part of nature.'
    },
    {
        id: 4,
        title: 'Астафьев Павел',
        description: 'Animals are a part of nature.'
    },
    {
        id: 5,
        title: 'Астафьев Павел',
        description: 'Animals are a part of nature.'
    },
    {
        id: 6,
        title: 'Астафьев Павел',
        description: 'Animals are a part of nature.'
    },
];

const styles = {
    borderRadius: '20px',
    maxHeight: '70%',
    overflowY: 'scroll',

}

export default function EmployeesManagerMenu() {
    const [selectedCard, setSelectedCard] = useState(cards.length > 0 ? cards[0].id : null);


    const selectedName = cards.find(card => card.id === selectedCard)?.title || 'Описание отсутствует';

    return (
        <>
            <Box sx={{ display: 'flex', height: '100%', padding: 2, minHeight: '550px', maxHeight: '650px' }}>
                <Box sx={{minWidth: '150px', width: '66.66%', bgcolor: '#f1f1f1', padding: 2, marginRight: 2, ...styles }}>

                    <CardsEmployees
                        selectedCard={selectedCard}
                        setSelectedCard={setSelectedCard}
                        cards={cards}
                    />
                </Box>
                <Box sx={{ width: '33.33%', bgcolor: '#f1f1f1', padding: 2, ...styles, minWidth: '200px'}}>
                    <DetailsEmployee description={selectedName} />
                    <NotificationEmployee></NotificationEmployee>
                </Box>
            </Box>
        </>
    );
}