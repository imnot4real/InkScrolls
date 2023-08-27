import React from 'react';
import { Container, Card } from 'react-bootstrap';
import './About.css'; // Import the CSS file

const About = () => {
  return (
    <Container className="mt-4">
      <Card className="about-card">
        <Card.Body>
          <Card.Title>About Page</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
            odio. In et nulla eget eros adipiscing aliquet. Aenean cursus eget
            augue at vulputate.
          </Card.Text>
          <Card.Text>
            In et nulla eget eros adipiscing aliquet. Aenean cursus eget augue
            at vulputate. Fusce consequat dolor nec orci bibendum, et faucibus
            erat facilisis. Vestibulum vestibulum, massa nec varius cursus, odio
            dui scelerisque lorem, eget pharetra purus nunc eget orci.
          </Card.Text>
          <Card.Text>
            Ut dapibus, libero vitae laoreet sagittis, libero orci cursus dolor,
            in luctus augue purus id sem. Cras elit nisl, consequat nec ligula
            vel, bibendum malesuada velit. Aliquam non dolor risus.
          </Card.Text>
          <Card.Text>
            Vivamus cursus neque libero, sed lacinia justo lacinia ut. Donec
            tincidunt tellus sit amet justo feugiat, eget malesuada arcu
            ultrices. Sed suscipit dui nec tortor bibendum, id aliquam nunc
            facilisis. Sed semper arcu vel tincidunt egestas.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default About;
