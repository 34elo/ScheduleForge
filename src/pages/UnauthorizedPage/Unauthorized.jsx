import {Typography, Container} from '@mui/material';

export default function Unauthorized() {
    return (
        <Container maxWidth="md">
            <Typography variant="h4" component="h1" gutterBottom>
                Unauthorized
            </Typography>
            <Typography variant="body1">
                You do not have permission to access this page.
            </Typography>
        </Container>
    );
}
