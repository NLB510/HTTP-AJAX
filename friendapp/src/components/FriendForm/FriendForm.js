import React from "react";
import styled from "styled-components";
import { Button } from "reactstrap";

const FriendForm = props => {

  function handleSubmit(e) {
    e.preventDefault();

    props.isUpdating ? props.updateFriend() : props.addFriend()

  }

  return <FormContainer>
      <AddFriendForm onSubmit={handleSubmit}>
        <TitleContainer>
          <h2>{props.isUpdating ? 'Update Friend' : 'Add A Friend'}</h2>
        </TitleContainer>
        <FormItemsContainer>
          {/* <FormLabel>Name:</FormLabel> */}
          <FormInput type="text" placeholder="Enter Name" name="name" value={props.friend.name} onChange={props.handleChanges} required />
          {/* <FormLabel>Age:</FormLabel> */}
          <FormInput type="number" placeholder="Enter Age" name="age" value={props.friend.age} onChange={props.handleChanges} required />
          {/* <FormLabel>Email:</FormLabel> */}
          <FormInput type="text" placeholder="Enter Email" name="email" value={props.friend.email} onChange={props.handleChanges} required />
          <ButtonDiv>
            <Button type="submit" color="primary" size="lg">{props.isUpdating ? 'Update' : 'Add'}</Button>
            {props.isUpdating ? <Button color="secondary" size="lg" onClick={e => props.cancelUpdate(e)} >Cancel</Button> : null}
          </ButtonDiv>
          {/* <FormButton type="submit">Add Friend</FormButton> */}
          
        </FormItemsContainer>
      </AddFriendForm>
    </FormContainer>;
};

/* 
==== Component Styles ====
*/

const FormContainer = styled.div`
  width: 60%;
  margin: 5% auto;

  box-shadow: 5px 5px 15px -5px rgba(0, 0, 0, 0.21);
  ${"" /* border: 1px solid lightgrey; */}
`;

const TitleContainer = styled.div`
  background-color: #c0dfd9;
  width: 100%;
  height: 100%;
  ${"" /* margin-top: -20px; */}

  padding-top: 1%;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  text-align: center;
`;

const AddFriendForm = styled.form`
  display: flex;
  flex-direction: column;
  ${"" /* justify-content: center; */}

  ${"" /* margin: 2% auto; */}
`;

const FormInput = styled.input`
  width: 70%;
  padding: 15px;
  background: transparent;
  border: none;
  border-bottom: 1px solid lightgrey;

  margin: 2% auto;
`;

// const FormButton = styled.button`
//   width: 20%;
//   margin: 2% auto;
//   padding: 1%;
//   background: #c0dfd9;
//   ${"" /* color: white; */}
//   border-radius: 5px;
// `;

const ButtonDiv = styled.div`
  width: 100%;
  margin: 2% auto;
  display: flex;
  justify-content: space-evenly;
`

const FormLabel = styled.label`
  font-weight: bold;
  margin-left: %;
`;

const FormItemsContainer = styled.div`
  background-color: #fdfdfd;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default FriendForm;
