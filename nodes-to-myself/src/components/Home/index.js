import React, {useEffect} from 'react'
import { HomeContainer, HomeH1, HomeWrapper, HomeCard, HomeH2, HomeP, HomeHeader} from './HomeElements'

const pages = ["/todos", "/notes", "/images", "/links"]

const Home = () => {
    const [value, setValue] = React.useState()
    return (
        <HomeContainer>
            <HomeH1>Welcome to MyNodes!!!</HomeH1>
            <HomeHeader>Select your tasks for today</HomeHeader>
            <HomeWrapper>
                <HomeCard>
                    <HomeH2>ToDo List</HomeH2>
                    <HomeP>Create your daily todo's here</HomeP>
                </HomeCard>
                <HomeCard>
                    <HomeH2>Notes</HomeH2>
                    <HomeP>Make your important notes here</HomeP>
                </HomeCard>
                <HomeCard>
                    <HomeH2>Images</HomeH2>
                    <HomeP>Collect your images here</HomeP>
                </HomeCard>
                <HomeCard>
                    <HomeH2>Links</HomeH2>
                    <HomeP>Store your important links here</HomeP>
                </HomeCard>
            </HomeWrapper>
        </HomeContainer>
    )
}

export default Home