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
        }}>
            <div className="leftBoxMain" style={{
                
            }}>
                <div className="leftBoxMainTop">
                    <div className="leftBoxMainTopDark">
                        dark theme
                    </div>
                    <div className="leftBoxMainTopLight">
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
            <div className="rightBoxMain">
                <div className="rightBoxMainTop">
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