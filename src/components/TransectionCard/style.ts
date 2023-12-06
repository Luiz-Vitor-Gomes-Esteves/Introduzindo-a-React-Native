import styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons'; 
import {RFValue} from 'react-native-responsive-fontsize';

interface TransectionsTypeProps{
    type: 'positive' | 'negative';
}

export const Container = styled.View`
   background-color: ${({theme})=>theme.colors.background2};
   border-radius: 5px;
   padding: 17px 24px;
   margin-bottom: 20px;
`;

export const Title = styled.Text`
   font-size: ${RFValue(14)}px;
   font-family: ${({theme})=>theme.fonts.regular};
`;

export const Amount = styled.Text<TransectionsTypeProps>`
    font-size: ${RFValue(20)}px;
    margin-top: 2px;
    color: ${({theme, type})=> type === 'negative' ? theme.colors.fail : theme.colors.succes};
`;

export const Footer = styled.View`
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   margin-top: 19px;
`;

export const Category = styled.View`
   flex-direction: row;
   align-items: center;
`;

export const CategoryName = styled.Text`
   font-size: ${RFValue(14)}px;
   color: ${({theme})=>theme.colors.textHidden};
   margin-left: 17px;
`;

export const Icon = styled(MaterialIcons)`
    font-size: ${RFValue(20)}px;
    color: ${({theme})=>theme.colors.textHidden};
`;

export const Date = styled.Text`
   font-size: ${RFValue(14)}px;
   color: ${({theme})=>theme.colors.textHidden};
`;

