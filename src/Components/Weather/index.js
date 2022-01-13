import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";

import { Container, Content, Row, SearchBox, Title, WeatherContainer, WeatherBox } from './styles';

function Weather() {
    const [state, setState] = useState('')
    const { register, handleSubmit } = useForm({
    }); 

    async function getWeather(data) {
        try {
            const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${data.cidade}&appid=${process.env.REACT_APP_BASE_API_KEY}&units=metric`)
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
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_BASE_API_KEY}&units=metric`)
                .then(response => { setState(response.data) })
        });

    }, [])

    return (
        <Container >
            {
                (state.main?.temp > 25 && <img src='https://folhaz.com.br/wp-content/uploads/2020/09/calor-goias.jpg' alt='weather Sun' />) ||
                (state.main?.temp >= 15 && <img src='https://cdn.topmidianews.com.br/img/pc/700/700/dn_arquivo/2021/07/img-20210629-wa0000.jpg' alt='weather' />) ||
                (state.main?.temp <= 15 && <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZtYkl1697bMv3CNDeG7OLTz6w7Al7xtqGIPiEgnOq77k5Y_hotToKvSWatUK3I2bnWIo&usqp=CAU ' alt='weather' />)
            }
            <SearchBox onSubmit={handleSubmit(getWeather)}>
                <input {...register("cidade")} type="text" placeholder='Busque por uma cidade...' />
                <button type="submit" >Pesquisar</button>
            </SearchBox>
            {
                state ? <Content>
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
                </Content> : null
            }
        </Container>
    );
}

export default Weather;