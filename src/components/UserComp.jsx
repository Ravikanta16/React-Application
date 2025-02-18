import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TextField, Button, Typography, Paper, Container } from '@mui/material';

const UserComp = () => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        email: '',
        phone: '',
    });
    const [isFormDirty, setIsFormDirty] = useState(false);

    useEffect(() => {
        const handleBeforeUnload = (e) => {
            if (isFormDirty) {
                e.preventDefault();
                e.returnValue = '';
            }
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [isFormDirty]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        setIsFormDirty(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const userId = uuidv4();
        const userData = { ...formData, id: userId };
        localStorage.setItem('userData', JSON.stringify(userData));
        setIsFormDirty(false);
        alert('User data saved successfully!');
    };

    return (
        <Container maxWidth="sm" className="flex justify-center items-center min-h-screen">
            <Paper elevation={6} className="p-8 mt-10 rounded-xl shadow-xl bg-white w-full">
                <Typography variant="h4" component="h2" className="text-center text-blue-600 font-bold mb-8">
                    User Data Form
                </Typography>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col gap-4 space-y-4">
                        <TextField
                            fullWidth
                            label="Name"
                            name="name"
                            variant="outlined"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="bg-gray-100 rounded-lg mb-4"
                        />
                        <TextField
                            fullWidth
                            label="Address"
                            name="address"
                            variant="outlined"
                            value={formData.address}
                            onChange={handleChange}
                            required
                            className="bg-gray-100 rounded-lg mb-4"
                        />
                        <TextField
                            fullWidth
                            label="Email"
                            name="email"
                            type="email"
                            variant="outlined"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="bg-gray-100 rounded-lg mb-4"
                        />
                        <TextField
                            fullWidth
                            label="Phone"
                            name="phone"
                            type="text"
                            variant="outlined"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="bg-gray-100 rounded-lg mb-4"
                        />
                    </div>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        className="py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700 rounded-lg"
                    >
                        Save
                    </Button>
                </form>
            </Paper>
        </Container>
    );
};

export default UserComp;
