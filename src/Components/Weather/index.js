import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Container, Content, Row, SearchBox, Title, WeatherContainer, WeatherBox } from './styles';

function Weather() {
    const [state, setState] = useState('')
    async function getWeather() {
        try {
            const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${process.env.API_KEY}&units=metric`)
            setState(response.data)
        } catch (error) {
            alert(error)
            console.log(error)
        }
    }


    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) => {
            let lat = pos.coords.latitude;
            let long = pos.coords.longitude;
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${process.env.API_KEY}&units=metric`)
                .then(response => { setState(response.data) })
        });

    }, [])
    return (
        <Container>
            <SearchBox>
                <input onChange={e => setState(e.target.value)} type="text" placeholder='Busque por uma cidade...'/>
                <button onClick={getWeather} >Pesquisar</button>
            </SearchBox>
            <Content>
                <Title>Previsão do Tempo</Title>
                <WeatherContainer>
                    <WeatherBox>
                        <h2> Tempo agora em, {state.name}</h2>
                        <span>{Math.round(state.main?.temp)}º</span>
                        <span>Sensação {Math.round(state.main?.feels_like)}º</span>
                    </WeatherBox>
                    <Row>Umidade <span>{state.main?.humidity}%</span></Row>
                    <Row>Maxima <span>{Math.round(state.main?.temp_max)}º</span></Row>
                    <Row>Minima: <span>{Math.round(state.main?.temp_min)}º</span></Row>
                </WeatherContainer>
            </Content>
        </Container>
    );
}

export default Weather;