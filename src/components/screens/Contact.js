import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Main from "../include/Main";
import user from "../assets/images/image4.svg";
import axios from "axios";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

export default function Contact({ match }) {
  const [users, setUsers] = useState([]);
  const { userData } = useContext(UserContext);

  useEffect(() => {
    console.log(userData.data);
    axios
      .get(`http://saaskit.tegain.com/api/contact/?page=2`, {
        headers: {
          Authorization: `Bearer ${userData.data.access}`,
        },
      })
      .then((response) => {
          setUsers(response.data.data.results);
      })

      .catch((error) => {
        console.log(error);
      });

  }, []);

  console.log(users);
  let renderItems = () => {
    return(
       users.map((user)=> 
      <>
      <UlList >
        <LiList><Input type="checkbox" name="select" /></LiList>
        <LiList to="/single">{user.name}</LiList>
        <LiList>{user.email}</LiList>
        <LiList>{user.company_name}</LiList>
        <LiList>{user.role}</LiList>
        <LiList>{user.forecast}</LiList>
      </UlList>
    </>
      )
    );
  };

  return (
    <div>
      <Main />
      <Body>
        <Container>
          <Button>Add Products</Button>
          {renderItems()}
          {/* <UlList>
            <LiList to="/single"><Input type="checkbox" name="select" /><ImageContainer><Image src={user} alt="Image" /></ImageContainer> Listndey Stroud</LiList>
            <LiList>fg@example.com</LiList>
            <LiList>Hatchbuck</LiList>
            <LiList>Manager</LiList>
            <LiList>50%</LiList>
            <LiList>5 minutes</LiList>
          </UlList>
          <UlList>
            <LiList to="/single"><Input type="checkbox" name="select" /><ImageContainer><Image src={user} alt="Image" /></ImageContainer> Listndey Stroud</LiList>
            <LiList>fg@example.com</LiList>
            <LiList>Hatchbuck</LiList>
            <LiList>Manager</LiList>
            <LiList>50%</LiList>
            <LiList>5 minutes</LiList>
          </UlList>
          <UlList>
            <LiList to="/single"><Input type="checkbox" name="select" /><ImageContainer><Image src={user} alt="Image" /></ImageContainer> Listndey Stroud</LiList>
            <LiList>fg@example.com</LiList>
            <LiList>Hatchbuck</LiList>
            <LiList>Manager</LiList>
            <LiList>50%</LiList>
            <LiList>5 minutes</LiList>
          </UlList>
          <UlList>
            <LiList to="/single"><Input type="checkbox" name="select" /><ImageContainer><Image src={user} alt="Image" /></ImageContainer> Listndey Stroud</LiList>
            <LiList>fg@example.com</LiList>
            <LiList>Hatchbuck</LiList>
            <LiList>Manager</LiList>
            <LiList>50%</LiList>
            <LiList>5 minutes</LiList>
          </UlList>
          <UlList>
            <LiList to="/single"><Input type="checkbox" name="select" /><ImageContainer><Image src={user} alt="Image" /></ImageContainer> Listndey Stroud</LiList>
            <LiList>fg@example.com</LiList>
            <LiList>Hatchbuck</LiList>
            <LiList>Manager</LiList>
            <LiList>50%</LiList>
            <LiList>5 minutes</LiList>
          </UlList> */}
        </Container>
      </Body>
    </div>
  );
}

const Body = styled.div`
  position: relative;
`;
const Container = styled.div`
  box-shadow: 9px 6px 46px -24px rgba(0, 0, 0, 0.75);
  position: absolute;
  padding: 20px 25px;
  left: 22%;
  top: 150px;
  width: 70%;
`;
const Button = styled.button`
  cursor: pointer;
  display: block;
  position: absolute;
  right: 2%;
  top: -48px;
  border: none;
  padding: 10px 20px;
  background: #0e9af1;
  color: #fff;
`;
const Input = styled.input``;
const UlList = styled.ul`
  /* display: flex;
  justify-content: space-between; */
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid grey;
`;
const LiList = styled(Link)`
 margin-left: 20px;
  
`;
const ImageContainer = styled.div`
  margin-right: 10px;
  margin-left: 10px;
`;
const Image = styled.img`
  border-radius: 50%;
`;
