import React,{useState,useEffect} from "react"
import styled from "styled-components"
import { useHistory } from "react-router-dom";
import axios from "axios"

const MainContainer = styled.div`
  height: 130vh;
  background-color: #12110d;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #5c0382;
  width: 100%;
`;

const ItensContainer =styled.div`
  border:shadow;
  background-color: #1c1c1b;
  display: flex;
  align-items: center;
  width: 180vh;
  height: 120vh;
  padding: 0.1vh;
  border-radius: 17px;
  flex-direction: column;
`;
const StyledButtons = styled.button`
--c:  black;
    color: var(--c);
    font-size: 12px;
    border: 0.3em solid var(--c);
    border-radius: 0.5em;
    width: 17em;
    height: 3em;
    text-transform: uppercase;
    font-weight: bold;
    font-family: sans-serif;
    letter-spacing: 0.2em;
    text-align: center;
    z-index: 1;
    transition: 0.3s;
    background-color: #5c0382;
    cursor: pointer;
    padding: 2px;
    margin-top: 8px;


    :hover{
      background-color:black ;
      color: whitesmoke;
    }
`;
const TripCard = styled.div`
background-color:#302e30;
height: 90vh;
width: 100vh;
color:#5c0382;
border-radius: 17px;
display: flex;
flex-direction: column;
padding: 40px;
margin-top:5px;

p{
    color: whitesmoke;
    font-size :1rem;
}
`;

export const TripsList = () => {
        const [tripslist,setTripslist] = useState([])
        const history = useHistory()
        const backToHomePage =()=>{
            history.push("/")
        }
         const goToApplyList =()=>{
             history.push("/ApplyToTrips")
         }
        const url ="https://us-central1-labenu-apis.cloudfunctions.net/labeX/pablo-loredo-molina/trips"
        const headers ={
            Authorization:{
                headers:"pablo-loredo-molina"
            }
        }
        const GetTripList=()=>{
            axios.get(url,headers)
            .then(res=>{
                setTripslist(res.data.trips)
            console.log(res.data)})
            .catch(err =>{
                console.log(err)
            })}
            
        useEffect(GetTripList,[])

    return(
        <div><MainContainer>
                <ItensContainer>
                    <h1>Viagens</h1>
                    {tripslist.map((trips)=>{
                 return <TripCard key={trips.id}>
                    <p>Nome:{trips.name}</p>
                    <p>Descrição:{trips.description}</p>
                    <p>Planeta:{trips.planet}</p>
                    <p>Duração:{trips.durationInDays}</p>
                    <p>Data:{trips.date}</p>
                    </TripCard>
        })}
                    <StyledButtons onClick={backToHomePage}>Voltar</StyledButtons>
                    <StyledButtons onClick={goToApplyList}>Aplicar para Viagens</StyledButtons>
                </ItensContainer>
        </MainContainer>
        </div>
    )
}
