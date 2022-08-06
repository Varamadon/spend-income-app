import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Button from '@mui/material/Button';
import Container from "@mui/material/Container";

export default function SpendInput() {
    const [value, setValue] = React.useState<Date | null>(
        new Date(),
    );

    const handleChange = (newValue: Date | null) => {
        setValue(newValue);
    };

    return (
        <Container maxWidth="xs">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3}>
                    <DesktopDatePicker
                        label="Date of spending"
                        inputFormat="dd/MM/yyyy"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="category"
                        label="Category of spending"
                        type="text"
                        id="category"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="amount"
                        label="Amount of spending"
                        type="number"
                        id="amount"
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        name="comment"
                        label="Commentary"
                        type="text"
                        id="comment"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Submit
                    </Button>
                </Stack>
            </LocalizationProvider>
        </Container>
    );
}
