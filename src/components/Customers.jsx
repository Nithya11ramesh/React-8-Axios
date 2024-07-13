/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useState, useContext } from "react";
import { deleteRes } from "./Api.js";
import Header from "./Header.jsx";
import EditData from "./EditData.jsx";
import { ResDataContext } from "./ContextFile.jsx";

function Residents() {

    const [occupied, setOccupied] = useContext(ResDataContext);
    const [edit, setEdit] = useState([]);

    const openModal = (flats) => {
        setEdit(flats);
    };


    const deleteFlat = async (id) => {
       
        const data = await deleteRes(id);
        setOccupied(occupied.filter((flats) => flats.id !== id));
    };

    return (
        <>
            <div>
                <Header />
                <div className="d-sm-flex row gap-4 ms-3">
                    {occupied.map((flat) => (
                        <div
                            key={flat.id}
                            className="card text-dark bg-secondary mb-3 mt-3"
                            style={{ maxWidth: "18rem" }}
                        >
                            <div className="card-header text-white "style={{fontWeight:"bolder"}}>Customer</div>
                            <div className="card-body">
                                <h5 className="card-title">Customer ID: {flat.id}</h5>
                                <ul className="card-text" style={{ listStyle: "none" }}>
                                    <li>
                                        <b>Name :</b> {flat.name}
                                    </li>
                                    <li>
                                        <b>Username:</b> {flat.username}
                                    </li>
                                    <li>
                                        <b>Company: </b> {flat.company}
                                    </li>
                                    <li>
                                        <b>Email: </b> {flat.email}
                                    </li>
                                   
                                    <li>
                                        <b>Phone: </b> {flat.phone}
                                    </li>

                                    <li>
                                        <b>Website: </b> {flat.website}
                                    </li>

                                </ul>
                                <div className="d-sm-flex mt-3 gap-3">
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => {
                                            deleteFlat(flat.id);
                                        }}
                                    >
                                        Delete
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        onClick={() => openModal(flat)}
                                    >
                                        Edit
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}


                    {edit && <EditData id={edit.id} updatedRes={edit} />}
                </div>
            </div>
        </>
    );
}

export default Residents;