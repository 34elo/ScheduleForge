import React, {useState} from "react";
import {Box} from "@mui/system";
import {Card, CardActionArea, CardContent, Typography} from "@mui/material";



export default function CardsEmployees({cards, selectedCard, setSelectedCard}) {
    return (
        <>
            <h2 style={{paddingBottom: '10px', margin: 0}}>Информация о сотруднике</h2>
        <Box
            sx={{
                width: '100%',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100px, 100%), 1fr))',
                gap: 2,

            }}
        >

            {cards.map((card, index) => (
                <Card sx={{borderRadius: '20px'}}>
                    <CardActionArea
                        onClick={() => setSelectedCard(index)}
                        data-active={selectedCard === index ? '' : undefined}
                        sx={{
                            height: '100%',
                            '&[data-active]': {
                                backgroundColor: 'action.selected',
                                '&:hover': {
                                    backgroundColor: 'action.selectedHover',
                                },
                            },
                        }}
                    >
                        <CardContent sx={{ height: '100%' }}>
                            {card.title}
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}
        </Box>
        </>
    );
}