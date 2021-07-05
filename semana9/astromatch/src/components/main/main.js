import React from 'react';
import { ChooseProfile } from '../chooseProfile/chooseProfile.js';
import { ChooseButtons } from '../ChooseButtons/ChooseButtons.js';
import { ProfileCard } from '../profileCard/profileCard.js';

const Main = () =>{
return(
    <div>
        <ChooseProfile></ChooseProfile>
        <ProfileCard/>
        <ChooseButtons/>
    </div>
)
}

export{Main}