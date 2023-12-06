import styled, {css} from "styled-components/native";//css por causa do icone e definir cor
import { AntDesign } from '@expo/vector-icons'; 
import {RFValue} from 'react-native-responsive-fontsize';

interface TypeProps{
    type: 'up' | 'down' | 'total';
}

export const Container = styled.View<TypeProps>`
    width: ${RFValue(300)}px;
    border-radius: 4px;
    height: auto;
    padding: 19px 23px ${RFValue(30)}px 23px;
    margin-top: 30px;
    margin-right: 16px;
    ${(props)=>props.type ==='total' && css`
        background-color: ${({theme})=>theme.colors.attentionBackground};
    `};
    ${(props)=>props.type !=='total' && css`
        background-color: ${({theme})=>theme.colors.background2};
    `};
`;
export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`;
export const Title = styled.Text`
    font-family: 'Poppins_400Regular';
    font-size: ${RFValue(14)}px;


`;

export const Icon = styled(AntDesign)<TypeProps>` 
    font-size: ${RFValue(40)}px;
    
    ${(props)=>props.type ==='up' && css`
        color: ${({theme})=> theme.colors.succes};
    `};
    ${(props)=>props.type ==='down' && css`
        color: ${({theme})=> theme.colors.fail};
    `};
    
    ${(props)=>props.type ==='total' && css`
        color: ${({theme})=> theme.colors.attention};
    `};
`;



export const Content = styled.View`



`;
export const Amout = styled.Text`
    font-family: 'Poppins_500Medium';
    font-size: ${RFValue(32)}px;
    color: ${({theme})=>theme.colors.primary};
`;
export const LastTransaction = styled.Text`
    color: ${({theme})=>theme.colors.textHidden};
    font-size: ${RFValue(12)}px;

    
`;
