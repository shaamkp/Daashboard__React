import React, { useState,useEffect,useContext } from "react";
import styled from "styled-components";
import Main from '../include/Main';
import user from '../assets/images/image4.svg'
import axios from "axios";
import {Link} from 'react-router-dom';
import {UserContext} from "../../App"


export default function Contact() {
    const[users, setUsers] = useState([]);

    

    useEffect(() => { 
        axios.get( "http://saaskit.tegain.com/api/contact/" )
            .then(function(response){
                console.log(response);
                setUsers(response.data.data)
                console.log("war",users);
            })
            .catch(function(error){
                console.log(error);
            })
        },[])

        const renderItems = () =>{
            return users.map((user) => (
                <>
            <LiList><Input type="checkbox" name="select" /><ImageContainer><Image src={user} alt="Image" /></ImageContainer> Listndey Stroud</LiList>
            <LiList>fg@example.com</LiList>
            <LiList>Hatchbuck</LiList>
            <LiList>Manager</LiList>
            <LiList>50%</LiList>
            <LiList>5 minutes</LiList>
                </>
            ))
        }

  return (
    <div>
        
        <Main/>
      <Body>
        <Container>
            <Button>Add Products</Button>
            <UlList>{renderItems()}</UlList>
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
          </UlList>
          <UlList>
            <LiList to="/single"><Input type="checkbox" name="select" /><ImageContainer><Image src={user} alt="Image" /></ImageContainer> Listndey Stroud</LiList>
            <LiList>fg@example.com</LiList>
            <LiList>Hatchbuck</LiList>
            <LiList>Manager</LiList>
            <LiList>50%</LiList>
            <LiList>5 minutes</LiList>
          </UlList>
        </Container>
      </Body>
    </div>
  );
}

const Body = styled.div`
    position: relative;
`;
const Container = styled.div`
    box-shadow: 9px 6px 46px -24px rgba(0,0,0,0.75);
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
    top:-48px;
    border:none;
    padding: 10px 20px;
    background: #0e9af1;
    color:#fff;
`;
const Input = styled.input``;
const UlList = styled.ul`
    display: flex;
    justify-content:space-between;   
    align-items:center;
    padding: 20px;
    border-bottom:1px solid grey;
`;
const LiList = styled(Link)`
    &:nth-child(2){
        display: flex;
        align-items:center
    }
    &:nth-child(1){
        display: flex;
        justify-content:space-between;
    }
`;
const ImageContainer = styled.div`
    margin-right:10px;
    margin-left:10px;
`;
const Image = styled.img`
    border-radius:50%;
`;