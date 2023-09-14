import React, { useEffect, useState } from "react";
import { SERVER_URL } from "../constans";
import { DataGrid } from "@mui/x-data-grid";
import { Snackbar } from "@mui/material";
import AddCar from "./AddCar.js";

function Carlist() {
    const [cars, setCars] = useState([]);
    const [open, setOpen] = useState(false);
    const columns = [
        { field: "brand", headerName: "Brand", width: 200 },
        { field: "model", headerName: "Model", width: 200 },
        { field: "color", headerName: "Color", width: 200 },
        { field: "year", headerName: "Year", width: 200 },
        { field: "price", headerName: "Price", width: 200 },
        {
            field: "_links.self.href",
            headerName: "",
            sortable: false,
            filterable: false,
            renderCell: (row) => (
                <button onClick={() => onDelClick(row.id)}>Delete</button>
            ),
        },
    ];
    const fetchCars = () => {
        fetch(SERVER_URL + "api/cars")
            .then((response) => response.json())
            .then((data) => setCars(data._embedded.cars))
            .catch((err) => console.error(err));
    };
    // 삭제 버튼 함수
    const onDelClick = (url) => {
        if (window.confirm("삭제하시겠습니까?")) {
            fetch(url, { method: "DELETE" })
                .then((response) => {
                    if (response.ok) {
                        fetchCars();
                        setOpen(true);
                    } else {
                        alert("삭제 실패");
                    }
                })
                .catch((err) => console.error(err));
        }
    };

    // 추가 버튼 함수
    const addCar = (car) => {
        fetch(SERVER_URL + "api/cars", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(car),
        })
            .then((response) => {
                if (response.ok) {
                    fetchCars();
                } else {
                    alert("추가에 실패했습니다!");
                }
            })
            .catch((err) => console.error(err));
    };

    // 편집 버튼 함수
    const updateCar = (car) => {
        
    }

    useEffect(() => {
        fetch(SERVER_URL + "api/cars")
            .then((response) => response.json())
            .then((data) => setCars(data._embedded.cars))
            .catch((err) => console.error(err));
    }, []);

    useEffect(() => {
        fetchCars();
    }, []);

    return (
        <React.Fragment>
            <AddCar addCar={addCar} />

            <div style={{ height: 500, width: "100%" }}>
                <DataGrid
                    rows={cars}
                    columns={columns}
                    disableRowSelectionOnClick={true}
                    getRowId={(row) => row._links.self.href}
                />
                <Snackbar
                    open={open}
                    autoHideDuration={2000}
                    onClose={() => setOpen(false)}
                    message="Car deleted"
                />
            </div>
        </React.Fragment>
    );
}

export default Carlist;
