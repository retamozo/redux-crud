import React from "react";
import { Container, Nav, Button } from "./styled";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <Nav>
        <h1>
          <Link to={"/"} className="text-light">
            CRUD sys with Redux and Axios
          </Link>
        </h1>
      </Nav>
      <Button primary>
        <Link to={"/products/new"}>Add new product &#43;</Link>
      </Button>
    </Container>
  );
};

export default Header;
