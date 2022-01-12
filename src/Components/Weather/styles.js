import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    
`

export const SearchBox = styled.div`
    width: 100%;
    max-width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    
    @media screen and (max-width: 630px){
        flex-direction: column;
    }

    input{
        width: 100%;
        max-width: 400px;
        height: 40px;
        margin-right: 10px;
        border: 1px solid #ccc;
        padding: 10px;
        font-size: 1.2rem;
        background-color: var(--color-gray-light);
    }

    button{
        width: 100px;
        height: 40px;
        font-size: 1rem;

        background-color: #87CEFA;

        @media screen and (max-width: 630px){
            margin-top: 20px;
        }
    }
`;
export const Content = styled.div`
    max-width: 500px;
    width: 100%;
    height: 500px;

    display: flex;
    flex-direction: column;

    background-color: var(--color-gray-light);
    padding: 20px;
`;

export const Title = styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 2rem;
    font-weight: bold;
    background-color: #fff;
`;

export const WeatherContainer = styled.div`
    height: 100%;
    padding: 0px 15px;
    margin-top: 20px;
    background-color: #fff;
    
`;

export const WeatherBox = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px 0px;

        h2{
            color: var(--color-yellow);
        }

        span{
            font-size: 2rem;
            font-weight: bold;

            &:nth-child(3){
                color: #222;
                font-size: 1.3rem;
               
            }
        }
`

export const Row = styled.div`
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #E8E8E8;

    font-size: 1.2rem;
    font-weight: 600;

   &:nth-child(3){
       color: var(--color-red);
   }
   &:nth-child(4){
       color: var( --color-blue);
   }
`;
