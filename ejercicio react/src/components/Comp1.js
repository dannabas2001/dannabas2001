import React, { Component } from "react";
import StylesLi, { StylesDiv } from "../Styles/styles";


export default class Component1 extends Component {
    render() {
        return (
            <section>
                <StylesDiv>
                    <h1>Mis Estudios</h1>
                    <h2>Profesional en Negocios Internacionales</h2>
                    <p> USTA Tunja - 202</p>
                </StylesDiv>
                <StylesDiv>
                    <h1>Experiencia</h1>
                    <h2>Emprendimiento - Aura Cuidado Femenino</h2>
                    <p> 2019-Presente</p>
                    <h2>Profesional Consultora de Emprendimiento - IELCO</h2>
                    <p> 2021-Presente</p>
                </StylesDiv>
                <StylesDiv>
                    <h1>Certificaciones</h1>
                    <h2>Responsive Web Design Certification</h2>
                    <p>2022</p>
                    <h2>Profesional Consultora de Emprendimiento - IELCO</h2>
                    <p> 2021-Presente</p>
                </StylesDiv>
            </section>


        )
    }
}