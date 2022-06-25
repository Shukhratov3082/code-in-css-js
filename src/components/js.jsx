import React, { useEffect } from 'react';
import styled from 'styled-components';

const Js = () => {

    useEffect(() => {
        const elem = document.getElementById('text');
        elem.hidden = true
        console.log(elem, 'hiii');
        setInterval(() => elem.hidden = !elem.hidden, 1000)
    }, []);



    return (
        <Wrapper>
            <h2>JS Code</h2>
            <div className='Text-hidden'>
                <h3>Text hidden SetInterval</h3> 
                <div className='hiddenDiv'>
                    <p id='text'>O'chib yonuvchi text</p>
                </div>
                <div className='codeJS'>

                   <p> const text = document.getElementById('text');</p>
                    <p>text.hidden = true</p>
                    {'setInterval(() => elem.hidden = !elem.hidden, 1000)'}
                </div>
            </div>
        </Wrapper>
    );
}

export default Js;
const Wrapper = styled.div`
  box-shadow: inset 1px 1px 20px 10px #00ff95;
    padding: 130px 200px 100px;
        h2{
            font-size: 45px;
            text-align: center;
            color: white;
            margin-bottom: 40px;
        }
        .Text-hidden{
            width: 100%;
            height: 300px;
            font-size: 30px;
            border: 2px solid gray;
            padding: 15px;
            text-align: center;
            color: white;
            h3{
                margin-bottom: 30px;
            }
            .hiddenDiv{
                height:20px ;
                margin-bottom: 20px;
            }
            .codeJS{
                border: 1px solid red;
                padding: 10px; 
                text-align: start;
            }
        }
    
`
