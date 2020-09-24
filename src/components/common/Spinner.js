import styled, {keyframes} from 'styled-components';



const rotation = keyframes`
                            from{
                                transform: rotate(0deg);
                            }
                            to{
                                transform: rotate(360deg);
                            }`


const Spinner = styled.div`
                height:50px;
                width: 50px;
                border : 2px solid #f8049c;
                border-radius:50%;
                border-top: none;
                border-right: none;
                margin: 16px auto;
                animation: ${rotation} 1s linear infinite;
                `

    export {Spinner};