import React from 'react';
import { 
    Container,
    Title,
    Amount,
    Footer,
    Category,
    CategoryName,
    Icon,
    Date,
} from './style';

export interface TransecticonCardProps{
    name: string;
    key: string; //comparar as categorias
    icon: string;
    title: string;
    amount: string;
    date: string;
    type: 'positive' | 'negative';
}

interface Props{
    data: TransecticonCardProps;
}

export function TransecticonCard({data}:Props){
    return(
        <Container>
            <Title>{data.title}</Title>
            <Amount type={data.type}>{data.type ==='negative' ? ' - '+data.amount: data.amount}</Amount>
            <Footer>
                <Category>
                    <Icon name='attach-money'/>
                    <CategoryName>{data.name}</CategoryName>
                </Category>
                <Date>{data.date}</Date>
            </Footer>
        </Container>
    )
}