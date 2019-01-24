import React from "react";
import styled from "styled-components"

import Friend from "./Friend"


const FriendsList = props => {
  const friend = props.friendsData.map(friend => {
    return <Friend key={friend.id} friend={friend} deleteFriend={props.deleteFriend} />
  })

  return (
    <div>
      <FriendListTitle>Friends List</FriendListTitle>
      <FriendListContainer>
        {
          friend
        }
      </FriendListContainer>
    </div>
    
  )
}

/*
==== FriendList Component Styles =====
*/ 


const FriendListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 60%;
  margin: 0 auto;

`

const FriendListTitle = styled.h2`
  text-align: center;
  text-decoration: underline;
`




export default FriendsList;