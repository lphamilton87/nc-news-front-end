import React from "react";
// import { Link } from "react-router-dom";
// import TopicsBar from "./TopicsBar";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { getTopics } from "../utils/api";
import { useState, useEffect } from "react";

const NavBar = () => {
  const {loggedInUser} = useContext(UserContext);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topicsFromApi) => {
      setTopics(topicsFromApi);
    });
  }, []);
  return (
    <Navbar className="nav-style">
      <Container>
      <Nav className="flex-centred">
        <Nav.Link href="/">
          Home
        </Nav.Link>
        <Nav.Link href="/users">
          Users
        </Nav.Link>
        {topics.map(({ slug }) => {
        return (
            <Nav.Link href={`/${slug}`}>
              {slug.charAt(0).toUpperCase() + slug.slice(1)}{" "}
            </Nav.Link>     
        );
      })}
        <Image className="navImg" src="https://thedatashed.co.uk/wp-content/uploads/2019/09/northcoderlogo-3-1700x478.png"/>
        </Nav>
        <Navbar.Text>Logged in: {loggedInUser.username}</Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default NavBar;
