import React, { useEffect } from 'react';
import styled from 'styled-components';
import scrollImg from './Images/Logo.jpg'
const Js = () => {

    useEffect(() => {
        const elem = document.getElementById('text');
        elem.hidden = true
        console.log(elem, 'hiii');
        setInterval(() => elem.hidden = !elem.hidden, 1000)

        // const Scroll = document.getElementById('scrollImage')
        // window.addEventListener('scroll', function () {
        //     let value = window.scrollY;
        //     Scroll.style.left = value * 0.5 + 'px'
        // })

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
                    {'setInterval(() => text.hidden = !text.hidden, 1000)'}
                </div>
            </div>
            <div className='Scroll'>
                <div className='scrollImg'>
                    <img id='scrollImage' src={scrollImg} alt="" />
                </div>
            </div>
        </Wrapper>
    );
}

export default Js;
const Wrapper = styled.div`
  box-shadow: inset 1px 1px 20px 10px #ffd900;
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
            margin-bottom: 50px;
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

        .Scroll{
            width: 100%;
            height: 300px;
            background-color: red;
            margin-bottom: 200px;
          .scrollImg{
            width: 100%;
            height: 150px;
            position: relative;
            img{
        
            }
          }
        }
    
`
