import React from 'react';
import styled from 'styled-components';

const Css = () => {
    return (
        <Wrapper>
            <h2>CSS Code</h2>
            <div className='code'>

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
        </Wrapper>
    );
}

export default Css;
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    box-shadow: inset 1px 1px 20px 10px #00ff95;
    padding: 130px 200px 100px;
        h2{
            text-align: center;
            font-size: 40px;
            color: white;
        }

        .code{
            width: 100%;
            height: 315px;
            padding: 50px 20px;

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
    }

`