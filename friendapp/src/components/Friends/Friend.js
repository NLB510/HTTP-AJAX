import React from "react";
import styled from "styled-components";
import { Button } from "reactstrap";

const Friend = props => {
  const { name, age, email, id } = props.friend;

  return (
    <FriendContainer>
      <h2>{name}</h2>
      <p>
        <strong>Age:</strong> {age}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <ButtonDiv>
        <Button color="secondary">Edit</Button>
      <Button color="danger" onClick={(e) => props.deleteFriend(e, id)} >Delete</Button>
      </ButtonDiv>
    </FriendContainer>
  );
};

/*
==== Friend Component Styles
*/

const FriendContainer = styled.div`
  width: 40%;
  margin: 5% 2%;
  padding: 15px;
  border: 0.5px solid lightgrey;
  border-radius: 5px;
  -webkit-box-shadow: 2px 5px 15px -7px rgba(0, 0, 0, 0.49);
  box-shadow: 2px 5px 15px -7px rgba(0, 0, 0, 0.49);
  text-align: center;
`;

const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`

export default Friend;
