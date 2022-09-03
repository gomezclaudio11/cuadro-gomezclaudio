import React, { useContext, useEffect, useState } from 'react'
import ItemCount from './ItemCount';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext"
import Figure from 'react-bootstrap/Figure';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsPip, BsTag, BsTruck } from "react-icons/bs";



const ItemDetail = ({item}) => {
  const { addToCart } = useContext (CartContext)

  const navigate = useNavigate();
  const [contador, setContador] = useState(0)
  console.log({item})
  
  const onAdd = (quantityToAdd) =>{
    console.log(`agregaste items al carrito: `, quantityToAdd);
    setContador (quantityToAdd)
    addToCart (item, quantityToAdd)
    navigate ("/cart")
  }
  useEffect (() =>{
    console.log ({ contador })
  }, [contador])

  return (
    <div >
    <Container>
      <Row className="justify-content-md-center">
        <Col>
          <Figure>
            <Figure.Image
              width={250}
              height={240}
              alt="250x240"
              src= {item.img} 
              />
            </Figure>
        </Col>
        <Col>
          <ListGroup as="ul">
            <ListGroup.Item as="li" variant="dark">
            <strong>
            {item.name}
            </strong>
            </ListGroup.Item>
            <ListGroup.Item as="li">{item.description}</ListGroup.Item>
            <ListGroup.Item as="li"> Precio: $ {item.price}</ListGroup.Item>
            <ListGroup.Item as="li">{item.subtitle}</ListGroup.Item>
            <ListGroup.Item as="li">Medidas: {item.size}</ListGroup.Item>
            <ListGroup.Item as="li"><ItemCount initial= "1" stock={item.stock} onAdd={onAdd}/></ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row className= "m-4">
        <Col>
          <p>El set incluye cuadro enmarcados tipo BOX con marco color a lección en madera natural, blanco o negro ,  lleva lámina impresa en alta calidad,  vidrio y ganchito ¡LISTOS PARA COLGAR!
            enmarcado directo en medida mencionada 
            Somos fabricantes y nuestros enmarcados hacen la diferencia.
            Cada pedido lo realizamos especialmente para vos , el tiempo de producción aproximado es de 10 -15 días . 
            Precios retirando por el local . Fecha y horario a convenir . 
            Escribinos a enMarcados@gmail.com para coordinar envíos a todo el país.
            Para diseños personalizados realizar la consulta previamente. Podés también enviarnos tus imágenes en buena calidad para realizar el trabajo.
            *Las imágenes son ilustrativas
          </p>        
        </Col>
      </Row>
      <Row className= "m-4">
        <Col>
          <BsTag />
          <h5><strong>10% DE DESCUENTO POR TRANSFERENCIA </strong></h5> 
        </Col>
        <Col>
          <BsPip/>
          <h5><strong>TARJETAS DE CRÉDITO O DÉBITO</strong></h5>
          <h6> 6 CUOTAS SIN INTERÉS</h6>
        </Col>
        <Col>
          <BsTruck/>
          <h5><strong>ENVIOS A TODO EL PAIS</strong></h5>
          <h6>Tus datos siempre protegidos</h6>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default ItemDetail