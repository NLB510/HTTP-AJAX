import React from "react";
import styled from "styled-components";

import Friend from "./Friend";

const FriendsList = props => {
  const friend = props.friendsData.map(friend => {
    return (
      <Friend
        key={friend.id}
        friend={friend}
        deleteFriend={props.deleteFriend}
        populateForm={props.populateForm}
      />
    );
  });

  return (
    <FriendMainContainer>
      <FriendListTitle>Friends List</FriendListTitle>
      <FriendListContainer>{friend}</FriendListContainer>
    </FriendMainContainer>
  );
};

/*
==== FriendList Component Styles =====
*/

const FriendMainContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`

const FriendListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  margin: 0 auto;
`;

const FriendListTitle = styled.h2`
  text-align: center;
  text-decoration: underline;
`;




export default FriendsList;
