import React from 'react';
import styled from 'styled-components';
import logo from './images/Logo.jpg';
import Code from './images/code2.webp';

const Header = () => {
    return (
        <Wrapper>
            <header>
                <div className='logo'>
                    <img src={logo} alt="Logo" />
                    <h2>Shukhratov</h2>
                </div>
                <nav>
                    <a href="https://github.com/Sorrybro802/code-learn">CSS Code</a>
                    <a href="https://github.com/Sorrybro802/code-learn">JS Code</a>
                    <a href="https://github.com/Sorrybro802/code-learn">HTML code</a>
                </nav>
            </header>
            <main>
                <h1>
                    Salom bu yerda siz xarhil kodlarni ko'rib o'rganishingiz mumkin
                </h1>
                <img src={Code} alt="info" />

            </main>

        </Wrapper>
    );
}

export default Header;
const Wrapper = styled.div`
      
    header{
        width: 100%;
        height: 80px;
        padding: 15px 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #1a1a84;
        .logo{
            display: flex;
            align-items: center;
            gap: 10px;
            img{
                width: 60px;
                height: 60px;
                border-radius: 50%;
            }

            h2{
            font-size: 40px;
            color: white;
        }
        }
        nav{
            width: 50%;
            display: flex;
           justify-content: center;
            align-items: center;
            gap: 36px;
            a{
                text-decoration: none;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                font-size: 18px;
                font-weight: 500;
                color: white;
                background-color: #2626c8;
                border: 1px solid #3f3fa1;
                padding: 12px 16px;
                border-radius: 20px;
                animation-name: boxAnimate;
                animation-duration: 2s;
                animation-iteration-count: infinite;
                transition: all .4s linear;
            
                &:hover{
                    background-color: #2EE59D;
                    box-shadow: 1px 5px 20px 0px rgb(46 229 157 / 60%);
                    color: #005afe;
                    transform: translateY(-3px);
                    animation: none;
                  }
            }
        }
    }

            main{
            width: 100%;
            height: 100%;
            padding: 130px 200px 100px;
            display: flex;
            justify-content: space-between;
            align-items: center;
                img{
                    width: 400px;
                    border-radius: 27%;
                }
                h1{
                    width: 45%;
                    font-size: 44px;
                    font-family: sans-serif;
                    color: white;
                }

            }



    @keyframes boxAnimate{
                    0%,100%{box-shadow: 0px 2px 14px 0px rgb(19 116 234 / 43%)}
                    20%{box-shadow: 0px 2px 14px 3px rgb(19 116 234 / 43%)}
                    40%{box-shadow: 0px 2px 14px 5px rgb(19 116 234 / 43%)}
                    60%{box-shadow: 0px 2px 14px 4px rgb(19 116 234 / 43%)}
                    80%{box-shadow: 0px 2px 14px 2px rgb(19 116 234 / 43%)}
    }
`
