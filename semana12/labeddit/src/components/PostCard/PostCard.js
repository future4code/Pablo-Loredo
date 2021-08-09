import React from "react"
import {MainContainer,Children,NameContainer,CommentContainer,ButtonsContainer} from "./styles/styles"
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Icon from '@material-ui/core/Icon';
export const PostCard = () =>{
    return(
        <div>
            <MainContainer>
                <Children>
                    <NameContainer>Pablo</NameContainer>
                    <CommentContainer>lorem ipsum dolor sit am
                    <ButtonsContainer>
                    <Button
                       variant="contained"
                         color="primary"
                       startIcon={<FavoriteIcon/>}
                     >
                        
                        </Button>
                        0
                    <Button
                       variant="contained"
                         color="primary"
                       startIcon={<FavoriteBorderIcon/>}
                     >
                        
                        </Button>
                        
                    </ButtonsContainer>
                    </CommentContainer>
                </Children>
            </MainContainer>
        </div>
    )
}