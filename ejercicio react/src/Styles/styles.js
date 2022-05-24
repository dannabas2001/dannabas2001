import styled from "styled-components";

export const StylesDiv1 = styled.div`
border:2px solid green;
text-align: center
background-color:#9e5281
display:flex;
flex-direction:row;
justify-conten:center;
align-items:center;
padding:2rem;`
export const StylesDiv2 = styled.div`
border:2px solid green;
text-align: center;
background-color:#FFFFFF
margin:1rem;
padding:1rem;`
export const Section1 = styled.section`
background:#9e5281;
display:flex;
text-align:center;
color:white;
`
export const Section2 = styled.section`
background:#FFFFFF;

`
export const Body = styled.body`
display:grid;
grid-template-columns 1fr 3fr;

@media(max-width:768px){
    display:flex;
    flex-direction:column;
}`
    ;

export const GitH = styled.img`
height:20%;
width:40%`
export const Barra = styled.div`
height:5px;
width:150px;
margin-left:auto;
margin-right:auto;
border: 2pt solid #9e5281;
display:block;
position:relative;
border-radius:25px;
padding:10px`

export const Progreso1 = styled.span`
display: block;
height: 10px;
border-radius: 25px;
background-color: #9e5281;
position: relative;
margin-top:-0.2rem;
width:80%;


`
export const Progres2 = styled.span`
display: block;
height: 10px;
border-radius: 25px;
background-color: #9e5281;
position: relative;
margin-top:-0.2rem;
width:70%;
`
export const Progres3 = styled.span`
display: block;
height: 10px;
border-radius: 25px;
background-color: #9e5281;
position: relative;
margin-top:-0.2rem;
width:5%;`
