import React from 'react';
import Input from './components/Input';
import { StatusBar } from 'react-native';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './theme';

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.background};
    align-items: center;
    justify-content: flex-start;
`;

const Title = styled.Text`
    font-size: 40px;
    font-weight: 600;
    color: ${({ theme }) => theme.main};
    align-self: flex-start;
    margin: 0px 20px;
`;

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <StatusBar
                    barStyle={'light-content'}
                    backgroundColor={theme.background}
                />
                <Title>TODO LIST</Title>
                <Input/>
            </Container>
        </ThemeProvider>
    )
};

export default App;
