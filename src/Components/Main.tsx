import { useContext } from "react";
import { ThemeContext } from "styled-components";
import ArrowTopRight from '../images/ArrowTopRight.svg';
import ArrowTopLeft from '../images/ArrowTopLeft.svg';
import ArrowDown from '../images/ArrowDown.svg';
import Picture1 from '../images/picture1.svg';
import Picture2 from '../images/picture2.svg';



function Main() {
    
    const theme=useContext(ThemeContext);
    
    return (
        <div style={{
            width:'1320px',
            height:'473px',

            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',

        }}>
            <div className="leftBoxMain" style={{
                display:'flex',
                flexDirection:'column',
                alignContent:'flex-start'
            }}>
                <div className="leftBoxMainTop" style={{
                    display:'flex',
                    flexDirection:'column',

                    marginBottom:'108px',
                }}>
                    <div className="leftBoxMainTopDark" style={{
                        fontFamily: 'Mulish',
                        fontStyle: 'normal',
                        fontWeight: '300',
                        fontSize: '16px',
                        lineHeight: '20px',

                        textTransform: 'lowercase',

                        color: '#807F7D',
                    }}>
                        dark theme
                    </div>
                    <div className="leftBoxMainTopLight" style={{
                        fontFamily: 'Mulish',
                        fontStyle: 'normal',
                        fontWeight: '300',
                        fontSize: '16px',
                        lineHeight: '20px',

                        textTransform: 'lowercase',

                        color: '#CFCA16',

                    }}>
                        light theme
                    </div>
                </div>
                <div className="leftBoxMainBotom">
                    <img src={Picture2} alt="Picture2" />
                </div>
            </div>
            <div className="center">
                <div className="centerTop">
                    FRONTEND DEVELOPER
                </div>
                <div className="centerBotom">
                    <div className="centerBotomRight">
                        PORTFOLIO OF PAVEL DERGAY
                    </div>
                    <div className="centerBotomLine"></div>
                    <div className="centerBotomRight">
                        DISCUSS THE PROJECT
                    </div>
                </div>
            </div>
            <div className="rightBoxMain" style={{
                display:'flex',
                flexDirection:'column'
            }}>
                <div className="rightBoxMainTop" style={{
                    marginBottom:'131px',
                }} >
                    <img src={Picture1} alt="Picture1" />
                </div>
                <div className="rightBoxMainBotom">
                    scroll down
                </div>
            </div>
        </div>
    );
}

export default Main;