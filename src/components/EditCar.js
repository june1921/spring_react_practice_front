import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

function EditCar(props) {
    const [open, setOpen] = useState(false);
    const [car, setCar] = useState({
        brand: "",
        model: "",
        color: "",
        year: "",
        fuel: "",
        price: "",
    });

    // 모달 폼 열기
    const handleClickOpen = () => {
        setOpen(true);
    };

    // 모달 폼 닫기
    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        setCar({ ...car, [event.target.name]: event.target.value });
    };

    // 자동차를 업데이트하고 폼을 닫음.
    const handleSave = () => {};

    return (
        <div>
            <button onClick={handleClickOpen}>Edit</button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>EditCar</DialogTitle>
                <DialogContent>
                    <input
                        placeholder="Brand"
                        name="brand"
                        value={car.brand}
                        onChange={handleChange}
                    />
                    <br />
                    <input
                        placeholder="Model"
                        name="model"
                        value={car.model}
                        onChange={handleChange}
                    />
                    <br />
                    <input
                        placeholder="Color"
                        name="color"
                        value={car.color}
                        onChange={handleChange}
                    />
                    <br />
                    <input
                        placeholder="Year"
                        name="year"
                        value={car.year}
                        onChange={handleChange}
                    />
                    <br />
                    <input
                        placeholder="Price"
                        name="price"
                        value={car.price}
                        onChange={handleChange}
                    />
                    <br />
                </DialogContent>
                <DialogActions>
                    <button onClick={handleClose}>Cancel</button>
                    <button onClick={handleSave}>Save</button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default EditCar;