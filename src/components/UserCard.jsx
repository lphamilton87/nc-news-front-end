import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";

const UserCard = ({ user }) => {
  console.log(user)
  const userValue = useContext(UserContext);

  return (
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card className="user-div">
            <Card.Body>
              <Card.Title className="card-label"> {user.username}</Card.Title>
            <Card.Img className='userImg' src={user.avatar_url} />
            </Card.Body>
              <Button onClick={() => userValue.setLoggedInUser(user)}>Log in </Button>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';

// function GridExample() {
//   return (
//     <Row xs={1} md={2} className="g-4">
//       {Array.from({ length: 4 }).map((_, idx) => (
//         <Col>
//           <Card>
//             {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
//             <Card.Body>
//               <Card.Title>{user.username}</Card.Title>
//               <Card.Text>
//                 This is a longer card with supporting text below as a natural
//                 lead-in to additional content. This content is a little bit
//                 longer.
//               </Card.Text>
//               <Button onClick={() => userValue.setLoggedInUser(user)}>Log in here </Button>
//             </Card.Body>
//           </Card>
//         </Col>
//       ))}
//     </Row>
//   );
// }

// export default GridExample;

export default UserCard;