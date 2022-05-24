import React, { Component } from "react";
import { StylesDiv2, StylesDiv1, Body, GitH, Barra, Progreso1, Progres2, Progres3 } from "../Styles/styles";
import { Section2 } from "../Styles/styles";
import { Section1 } from "../Styles/styles";


export default class Component1 extends Component {
    render() {
        return (
            <Body>
            <Section1>
            <StylesDiv1>
               <img src="https://www.sanboni.edu.co/onu/wp-content/uploads/avatar-mujer.png" alt=""></img>
               <h1> Danna Carolina Bastidas Alvarado</h1>
               <h3>Profesional en Negocios Internacionales</h3>
               <h4>Desarrolladora FrontEnd (To-Be)</h4>
               <h4>Tunja, Colombia </h4>
               <a href="https://github.com/dannabas2001"><GitH src="https://www.returngis.net/wp-content/uploads/2021/01/GitHub.png" alt=""></GitH></a>
            </StylesDiv1>
            </Section1>
            <Section2>
                <StylesDiv2>
                    <h1>Mis Estudios</h1>
                    <h2>Profesional en Negocios Internacionales</h2>
                    <p> USTA Tunja - 2021</p>
                </StylesDiv2>
                <StylesDiv2>
                    <h1>Experiencia</h1>
                    <h2>Emprendimiento - Aura Cuidado Femenino</h2>
                    <p> 2019-Presente</p>
                    <h2>Profesional Consultora de Emprendimiento - IELCO</h2>
                    <p> 2021-Presente</p>
                </StylesDiv2>
                <StylesDiv2>
                    <h1>Certificaciones</h1>
                    <h2>Responsive Web Design Certification</h2>
                    <p>2022</p>
                </StylesDiv2>
                <StylesDiv2>
                    <h1>Habilidades</h1>
                    <h2>HTML</h2>
                    <Barra><Progreso1></Progreso1></Barra>
                    <h2>CSS</h2>
                    <Barra><Progreso1></Progreso1></Barra>
                    <h2>JavaScript</h2>
                    <Barra><Progres2></Progres2></Barra>
                    <h2>ReactJS</h2>
                    <Barra><Progres3></Progres3></Barra>
                    <h2>Inglés</h2>
                    <Barra><Progreso1></Progreso1></Barra>
                    <h2>Francés</h2>
                    <Barra><Progres2></Progres2></Barra>
    
                </StylesDiv2>

            </Section2>
            </Body>
        


        )
    }
}