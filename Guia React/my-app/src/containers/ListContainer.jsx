import React, { Component } from 'react'
import Cards from '../components/Cards'

export default class ListContainer extends Component {
    constructor(){
        super()
        this.state={
            peli:[]
        }
    }
        async componentDidMount(){
           const url = 'http://localhost:3004/peliculas'
            const res = await fetch(url)
            const data =await res.json()
            this.setState({peli:data})
        }
        render(){
            return(
                <div>
                    {
                        this.state.peli.map(movie,index)=>{
                            return(
                                <h3 key={index}>title:{movie.Title}</h3>
                            )
                        }
                    }
               
                <Cards/>
                </div>
            )
        }
    
    }

