import React from "react";
import {} from '../../../public/css/more.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export const More = () => {
  return(
    <div style={{paddingTop:'5rem'}}>
      <h2 className='green'>More</h2>
      
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>

  );
}