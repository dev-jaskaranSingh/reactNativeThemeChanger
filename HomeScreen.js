import React from 'react';
import { StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components/native';
import { switchTheme } from './redux/themeActions';
import { darkTheme, lightTheme } from './Theme';

const HomeScreen = () => {
  const theme = useSelector(state => state.theme.theme);
  console.log('@state : ',theme)
  const dispatch = useDispatch();

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle={theme.STATUS_BAR_STYLE} />
      <Container>
        <ThemeContainer>
          <Text>Welcome to theme App</Text>
        </ThemeContainer>

        {theme.mode == 'dark' ? (
          <Button onPress={() => dispatch(switchTheme(lightTheme))}>
            <ButtonText>Switch to Light</ButtonText>
          </Button>
        ) : (
          <Button onPress={() => dispatch(switchTheme(darkTheme))}>
            <ButtonText>Switch to dark </ButtonText>
          </Button>
        )}
      </Container>
    </ThemeProvider>
  );
};

export default HomeScreen;

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
  justify-content: center;
  align-items: center;
`;

const Button = styled.TouchableOpacity`
  background-color: ${props => props.theme.PRIMARY_BUTTON_COLOR};
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
`;

const ButtonText = styled.Text`
  color: ${props => props.theme.PRIMARY_BUTTON_TEXT_COLOR};
  font-size: 18px;
`;

const ThemeContainer = styled.View`
  border: 1px solid ${props => props.theme.PRIMARY_TEXT_COLOR};
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
`;

const Text = styled.Text`
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
  font-size: 20px;
`;
