import React from 'react';
import styled from 'styled-components';

const Css = () => {
    return (
        <Wrapper>
            <h2>CSS Code</h2>
            <div className='code'>

                <div className='Text-align'>
                    <fieldset>
                        <legend> text-align:justify </legend>
                        <p>text align justify bu textni hammayog'iga sig'dirish</p>
                        <div className='misol'>
                            <div className='box1'>
                                <h3>Normal</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, doloremque.</p>
                            </div>
                            <div className='box2'>
                                <h3>Justify</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, reprehenderit?</p>
                            </div>
                        </div>
                    </fieldset>
                </div>

                <div className='Border-radius'>
                    <h2>Border-Radius</h2>
                    <div className='border'>
                        <a href="https://9elements.github.io/fancy-border-radius/">Link <br />  border <br /> radius gradiend</a>
                        </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default Css;
const Wrapper = styled.div`
    box-shadow: inset 1px 1px 20px 10px #00ff95;
    padding: 130px 200px 100px;
        h2{
            text-align: center;
            font-size: 40px;
            color: white;
        }

        .code{
            width: 100%;
            height: 100%;
            display: flex;
             flex-direction: column;
             gap: 140px;

            fieldset{
                color: white;
                font-size: 30px;
                display: flex;
                padding-bottom:20px;
                flex-direction:column;
                align-items: center;
                justify-content: center;
                gap: 30px;
            
                legend{
                    margin-left:30px;
                    font-size: inherit;
                    padding: 10px;
                }

                p{
                    font-size: 20px;
                }

                .misol{
                    display: flex;
                    gap: 50px;
                    color: black;
                
                     .box1,.box2{
                        width: 300px;
                        height: 120px;
                        background-color: #ffffff;
                        h3{
                             font-size: 20px;
                             text-align: center;
                             margin-bottom: 10px;
                        }
                    }
                    .box2{text-align:justify;}
                }
            }   

            .Border-radius{
                width: 100%;
                height: 100%;
                border: 2px solid gray;
                display: flex;
                padding: 15px 0;
                justify-content: center;
                align-items: center;
                gap: 40px;
                flex-direction: column;
                h2{
                    text-align: center;
                }
                .border{
                    width: 400px;
                    height: 400px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: linear-gradient(45deg, rgba(150,0,212,1) 24%, rgba(189,39,174,1) 46%, rgba(246,9,195,1) 66%);
                    border-radius:51% 49% 70% 30% / 30% 30% 70% 70%;
                    a{
                        text-align: center;
                        font-size: 45px;

                    }
                }
        }

    }
     

`