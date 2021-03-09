import React from 'react'
import { HomeContainer, HomeH1, HomeWrapper, HomeCard, HomeH2, HomeP, HomeHeader} from './HomeElements'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <HomeContainer>
            <HomeH1>Welcome to MyNodes!!!</HomeH1>
            <HomeHeader>Select your tasks for today</HomeHeader>
            <HomeWrapper>
                <Link to = '/todos'>
                <HomeCard>
                    <HomeH2>ToDo List</HomeH2>
                    <HomeP>Create your daily todo's here</HomeP>
                </HomeCard>
                </Link>
                <Link to = '/notes'>
                <HomeCard>
                    <HomeH2>Notes</HomeH2>
                    <HomeP>Make your important notes here</HomeP>
                </HomeCard>
                </Link>
                <Link to = '/images'>
                <HomeCard>
                    <HomeH2>Images</HomeH2>
                    <HomeP>Collect your images here</HomeP>
                </HomeCard>
                </Link>
                <Link to = '/links'>
                <HomeCard>
                    <HomeH2>Links</HomeH2>
                    <HomeP>Store your important links here</HomeP>
                </HomeCard>
                </Link>
            </HomeWrapper>
        </HomeContainer>
    )
}

export default Home