import styled from 'styled-components'

export const MainBox = styled.div`
    width:100%;
    height:100%;

    display:flex;
    flex-direction:column;
    align-items: center;

    ${props=>props.theme==="Dark"
        ?`background-color:#181817;`
        :`background-color: #F9F7F3;`
}`

export const MenuBox = styled.div`
    width:1010px;
    height:20px;
    
    margin-top:65px;

    display:flex;
    flex-direction:row;
    justify-content:space-between;
`

export const  MenuLink = styled.div`
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    
    text-align: justify;
    text-transform: lowercase;

    ${props=>props.theme==="Dark"
        ?`color: #FFFFFF;`
        :`color: #000000;`
}`
