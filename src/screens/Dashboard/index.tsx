import React from 'react';
import { View } from 'react-native';
import {
    Container,
    Header,
    UserInfo,
    Photo,
    UserContent,
    UserGreeting,
    UserName,
    Icon,
    Top_Header,
    HighlightCards,
    Transections,
    Title,
    TransectionsList,
 } from './styles';
import { HighlightCard } from '../../components/HighlightCard';
import { TransecticonCard, TransecticonCardProps } from '../../components/TransectionCard';

export interface DataListProps extends TransecticonCardProps{
    id: string;
}


export function Dashboard(){
    const data: DataListProps[] = [
        { //simplificar
            id: '1',//não dar erro de tipagem
            title:'Desenvolvimento do app',
            amount:'R$ 42.000,00',
            //category:{
                name:'Dev',
                icon:'attach-money',
                key: '1',
            //},
            date:  '12/12/12',
            type: 'positive',
        },
        { //simplificar
            id: '2',//não dar erro de tipagem
            title:'Desenvolvimento do app do Banco do Brasil',
            amount:'R$ 12.000,00',
            //:{
                name:'Dev',
                icon:'attach-money',
                key: '2',
            //},
            date:  '22/11/24',
            type: 'negative',
        },
        { //simplificar
            id: '3',//não dar erro de tipagem
            title:'Desenvolvimento do app do Banco do Brasil',
            amount:'R$ 12.000,00',
            //category:{
                name:'Dev',
                icon:'attach-money',
                key: '3',
            //},
            date:  '22/11/24',
            type: 'negative',
        },
        { //simplificar
            id: '4',//não dar erro de tipagem
            title:'Desenvolvimento do app do Banco do Brasil',
            amount:'R$ 12.000,00',
            //category:{
                name:'Dev',
                icon:'attach-money',
                key: '4',
            //},
            date:  '22/11/24',
            type: 'positive',
        },
];

    return(
        <Container>
            <Header>
                <Top_Header>
                    <UserInfo>
                        <Photo source={{uri: 'https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png'}}/>
                        <UserContent>
                            <UserGreeting>Bem vindo, </UserGreeting>
                            <UserName>Luiz</UserName>
                        </UserContent>
                    </UserInfo>
                    <Icon name='close'/>
                </Top_Header>
            </Header>
            <HighlightCards>
                <HighlightCard 
                    type='up'
                    title='Entradas' 
                    amount='R$ 200,00' 
                    lastTransaction='Ultima entrada dia 20 de 2003'
                />
                <HighlightCard 
                    type='down'
                    title='Saidas' 
                    amount='R$ 40,00' 
                    lastTransaction='Ultima entrada dia 20 de 2005'
                />
                <HighlightCard 
                    type='total'
                    title='Total' 
                    amount='R$ 160,00' 
                    lastTransaction='Ultima entrada dia 20 de 2005'
                />
            </HighlightCards>
            <Transections>
                <Title>Listagem</Title>
                <TransectionsList 
                    data={data}
                    keyExtractor={item=>item.id}
                    renderItem={({item})=> <TransecticonCard data={item}/>}
                />
            </Transections>
        </Container>
    )
}

