import { Component } from 'react'

class Comic extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.comic.titulo}</h2>
                <p>{this.props.comic.descripcion}</p>
                <img src={this.props.comic.imagen} style={{width:'100px',height:'150px'}}></img>
                <button onClick={()=>{this.props.seleccionarFavorito(this.props.comic)}}>Seleccionar Favorito</button>
                <button onClick={()=>{this.props.eliminarComic(this.props.index)}}>Eliminar Comic</button>
            </div>
        )
    }
}

export default Comic