import React from "react"
import {MainContainer,Children,NameContainer,CommentContainer,ButtonsContainer} from "./styles/styles"

export const CommentCard = () =>{
    return(
        <div>
            <MainContainer>
                <Children>
                    <NameContainer>Pablo</NameContainer>
                    <CommentContainer>lorem ipsum dolor sit am
                    </CommentContainer>
                </Children>
            </MainContainer>
        </div>
    )
}