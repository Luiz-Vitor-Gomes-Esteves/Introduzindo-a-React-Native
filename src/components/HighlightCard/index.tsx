import React from 'react';

import { 
    Container,
    Title,
    Icon,
    Content,
    Amout,
    LastTransaction,
    Header,
} from './style';

interface Props{
    type: 'up' | 'down' | 'total'; //todas as opções do tipo de icone
    title: string;
    amount: string;
    lastTransaction: string;
}

const icons ={ //decidir qual icone aplicar dependendo do valor que mandar
    up: 'upcircle',
    down: 'downcircle',
    total: 'exclamationcircle',
}

export function HighlightCard({type,title,amount,lastTransaction} : Props){
    return (
        <Container type={type}>
            <Header>
                <Title>{title}</Title>
                <Icon name={icons[type]} type={type}/>{/*passando a propriedade*/}
            </Header>
            <Content>
                <Amout>{amount}</Amout>
                <LastTransaction>{lastTransaction}</LastTransaction>
            </Content>
        </Container>
    )
}
