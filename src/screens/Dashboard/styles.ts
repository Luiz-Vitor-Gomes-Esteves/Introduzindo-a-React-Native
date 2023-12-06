import styled from 'styled-components/native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Ionicons from '@expo/vector-icons/Ionicons';
import { FlatList } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
//importar tipagem
import {DataListProps} from '.'; //da propria pasta




export const Container = styled.View`
    flex:1;
    //background-color: ${(props)=>props.theme.colors.primary};
    background-color: ${({theme})=>theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    background-color: ${({theme})=>theme.colors.primary};
    height: ${RFPercentage(40)}px;
`;
export const Top_Header = styled.View`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    margin-top: 40px;
`;
export const UserInfo = styled.View`
    justify-content: end;
    margin-left: 40px;
    display: flex;
    flex-direction: row;
`;

export const Photo = styled.Image`
    height:  ${RFValue(55)}px;
    width: ${RFValue(55)}px;
    border-radius: 100px;
`;
export const UserContent = styled.View`
    padding-left:20px;
    font-family: ${({theme})=>theme.fonts.bold};
`;
export const UserGreeting = styled.Text`
    font-size: ${RFPercentage(2)}px;
`;
export const UserName = styled.Text`
    font-size: ${RFPercentage(3)}px;
    font-weight: bold;
    color: ${({theme})=>theme.colors.button};
`;
export const Icon = styled(Ionicons)`
    color: ${({theme})=>theme.colors.button};
    font-size: 50px;
    padding: 20px;
`;
export const HighlightCards = styled.ScrollView.attrs({ // acessa as propriedades do escrollView
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle:{paddingHorizontal: 24},
})`
    width: 100%;
    position: absolute;
    margin-top: ${RFPercentage(20)}px;

`;
export const Transections = styled.View`
    flex: 1%; /**ocupa todo o resto da tela */
    padding: 0 24px;
    margin-top: ${RFPercentage(12)}px;
`;
export const Title = styled.Text`
    font-size: ${RFPercentage(2)}px;
    font-family: ${({theme})=>theme.fonts.bold};

`;
export const TransectionsList = styled(
    FlatList as new () => FlatList<DataListProps>
    ).attrs({ 
    showsVerticalScrollIndicator: false,
    contentContainerStyle:{
        paddingBottom: getBottomSpace()
    }
})
``;