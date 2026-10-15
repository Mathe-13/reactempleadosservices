import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Global from '../Global';

export default class MenuComponent extends Component {
    url = Global.urlApiEmpleados

    state = {
        empleados: []
    }

    loadEmpleados = () => {
        let request = "api/empleados";
        console.log(this.url + request);
        axios.get(this.url + request).then((reponse) => {
            console.log("Cargando empleados");
            this.setState({
                empleados: reponse.data
            })
        })
    }

    componentDidMount = () => {
        this.loadEmpleados();
    }


    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Inicio

                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/ejemplos">Ejemplos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/doctores/22">Doctores</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/createhospital">Nuevo Hospital</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/hospitales">Hospitales</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Hospitales
                                </NavLink>
                                <ul className="dropdown-menu">
                                    {
                                        this.state.oficios.map((empleado, index) => {
                                            return (<li key={index}>
                                                <NavLink className="dropdown-item"
                                                    to={"doctores/" + hospital.idHospital}>
                                                    {hospital.nombre}
                                                </NavLink>
                                            </li>)
                                        })
                                    }
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Buscar</button>
                        </form>
                    </div>
                </div>
            </nav>
        );
    }
}