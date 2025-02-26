import {Button, TextField, Typography} from "@mui/material";
import { useState } from "react";
import {Box} from "@mui/system";

export default function LoginPage() {

    const [code, setCode] = useState("");
    const [error, setError] = useState(null); // Храним текст ошибки

    const checkCode = () => {
        if (code === 'user') {
            console.log('user logged in');
            setCode("");
            setError(null);
        } else if (code === 'admin') {
            console.log('admin logged in');
            setCode("");
            setError(null);
        } else {
            console.log('error logged in');
            setError("Неправильный ввод");
        }
    };

    const handleChange = (event) => {
        setCode(event.target.value);
        setError(null);
    };

    return (
        <>
        <Box // Оборачиваем весь контент в Box
            sx={{
                display: 'flex', // Используем Flexbox
                flexDirection: 'column', // Располагаем элементы друг под другом
                alignItems: 'center', // Центрируем по горизонтали
                justifyContent: 'center', // Центрируем по вертикали
                minHeight: '100vh', // Занимаем всю высоту экрана
                backgroundColor: '#f0f0f0', // Добавляем цвет фона для примера
            }}
        >
            <Typography variant="h4" gutterBottom>
                Авторизация
            </Typography>
            <TextField
                error={!!error}
                id="outlined-basic"
                label="Введите код"
                variant="outlined"
                value={code}
                onChange={handleChange}
                helperText={error}
                sx={{ marginBottom: 2, width: '300px' }}
            />
            <Button variant="contained" onClick={checkCode}>
                Войти
            </Button>
        </Box>
        </>
    );
};