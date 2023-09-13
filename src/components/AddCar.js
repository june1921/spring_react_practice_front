import React, { useState } from "react";
import { Dialog } from "@mui/material";
import DialogActions from "@mui/material";
import DialogContent from "@mui/material";
import DialogTitle from "@mui/material";

function AddCar(props) {
    const [open, setOpen] = useState(false);
    const [car, setCars] = useState({
        brand: "",
        model: "",
        color: "",
        year: "",
        fuel: "",
        price: "",
    });
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleChange = (event) => {
        setCars({...car, [event.target.name]: event.target.value});
    }

    return(
        <div>
            <button onClick={handleClickOpen}>New Car</button>
            <dialog open={open} onClose={handleClose}>
                <DialogTitle>New Car</DialogTitle>
                <DialogContent>
                    <input placeholder="" name="" value={car.} onChange={handleChange}/>
                    <br/>
                    <input placeholder="" name="" value={car.} onChange={handleChange}/>
                    <br/>
                    <input placeholder="" name="" value={car.} onChange={handleChange}/>
                    <br/>
                    <input placeholder="" name="" value={car.} onChange={handleChange}/>
                    <br/>
                    <input placeholder="" name="" value={car.} onChange={handleChange}/>
                    <br/>
                </DialogContent>
            </dialog>
        </div>

    ) ;
}

export default AddCar;
