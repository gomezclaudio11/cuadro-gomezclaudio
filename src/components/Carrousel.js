import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';

const StyledTitulo = styled.h2`
  color: white;
  `

const StyledParrafo = styled.p`
color: white
`

function Carrousel() {
    
  return (
    <Carousel variant="dark">
    <Carousel.Item>
      <img
        className="img-fluid w-100"
        src="https://i.postimg.cc/MHfyFFG4/cuadro1.jpg"
        alt="cuadro1"
      />
      <Carousel.Caption>
        <StyledTitulo>Tienda de Marcos</StyledTitulo>
        <StyledParrafo className=" text-bg-primary h3">Hace tu pedido, diseños a medidas, imprimimos tu idea</StyledParrafo>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="img-fluid w-100"
        src="https://i.postimg.cc/5tkgKv3X/cuadro2.jpg"
        alt="cuadro2"
      />
      <Carousel.Caption>
      <StyledTitulo>Paga en cuotas</StyledTitulo>
        <StyledParrafo className=" text-bg-primary h3">Aceptamos todos los medios de pago, hace tu consulta</StyledParrafo>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="img-fluid w-100"
        src="https://i.postimg.cc/FRQLFVhd/cuadro3.jpg"
        alt="cuadro3"
      />
      <Carousel.Caption>
      <h2>Envios a todo el pais</h2>
        <p className=" text-bg-primary h4">Mediante mercado flex</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default Carrousel