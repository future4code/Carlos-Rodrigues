import axios from 'axios';
import React, {useEffect, useState} from 'react';
import MatchButtons from './MatchButtons';
import ProfileCard from './ProfileCard';

export default function FindMatch() {

    const [profile, setProfile] = useState({})

    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/carlos-rodrigues-paiva/person"


    useEffect(() => {
        const getProfile = () => {
            axios.get(url)
            .then((res) =>{
                setProfile(res.data)
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
        }
        getProfile()
    }, [setProfile, url])

    console.log(profile.name)
    return (
        <div>
            <ProfileCard/>
            <MatchButtons/>
        </div>
    )
}