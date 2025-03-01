import React from "react";
import {Box} from "@mui/system";
import {Card, CardActionArea, CardContent, Typography} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function CardsEmployees({cards, selectedCard, setSelectedCard, setAddEmployeeCards}) {
    function handleCardClick(id) {
        setSelectedCard(id);
        setAddEmployeeCards(false);
    }

    function handleAddEmployeeClick() {
        setSelectedCard(-1); // Выделение кнопки добавления
        setAddEmployeeCards(true);
    }

    return (
        <>
            <h2 style={{paddingBottom: "10px", margin: 0}}>Информация о сотруднике</h2>
            <Box
                sx={{
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(min(100px, 100%), 1fr))",
                    gap: 2,
                }}
            >
                {cards.map((card) => (
                    <Card
                        key={card.id}
                        sx={{
                            borderRadius: "20px",
                            boxShadow: "none",
                            backgroundColor: selectedCard === card.id ? "action.selected" : "white",
                        }}
                    >
                        <CardActionArea
                            onClick={() => handleCardClick(card.id)}
                            sx={{
                                height: "100%",
                                "&:hover": {backgroundColor: "action.selectedHover"},
                            }}
                        >
                            <CardContent sx={{height: "100%"}}>
                                <Typography>{card.title}</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
                <Card
                    sx={{
                        borderRadius: "20px",
                        width: "50px",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "background-color 0.3s ease",
                        boxShadow: "none",
                        backgroundColor: selectedCard === -1 ? "action.selected" : "white",
                    }}
                >
                    <CardActionArea
                        onClick={handleAddEmployeeClick}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                            height: "100%",
                            "&:hover": {backgroundColor: "action.selectedHover"},
                        }}
                    >
                        <CardContent sx={{display: "flex", justifyContent: "center", alignItems: "center", padding: 0}}>
                            <AddIcon sx={{fontSize: 24, color: "black", opacity: 0.7}}/>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Box>
        </>
    );
}
