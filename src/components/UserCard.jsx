import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";

const UserCard = ({ user }) => {
  const userValue = useContext(UserContext);

  return (
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card className="user-div">
            <Card.Body>
              <Card.Title className="card-label"> {user.username}</Card.Title>
              <Card.Img className="userImg" src={user.avatar_url} />
            </Card.Body>
            <Button onClick={() => userValue.setLoggedInUser(user)}>
              Log in{" "}
            </Button>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default UserCard;
