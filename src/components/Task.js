import React from 'react';
import styled from 'styled-components/native';
import PropTypes from "prop-types";
import { theme } from "../theme";
import IconButton from './IconButton';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.itemBackground};
  border-radius: 10px;
  padding: 5px;
  margin: 3px 0px;
`;

const Contents = styled.Text`
  flex: 1;
  font-size: 18px;
  color: ${({ theme }) => theme.text};
`;

const Task = ({ item, deleteTaskHandler, confirmTaskHandler }) => {
    return (
        <Container>
            <IconButton type={item.completed ? 'check-square' : 'square-o'} id={item.id} onPressOut={confirmTaskHandler}/>
            <Contents>{item.text}</Contents>
            <IconButton type={'pencil'}/>
            <IconButton type={'trash-o'} id={item.id} onPressOut={deleteTaskHandler}/>
        </Container>
    )
};

Task.propTypes = {
    text: PropTypes.string.isRequired,
    deleteTaskHandler: PropTypes.func.isRequired,
    confirmTaskHandler: PropTypes.func.isRequired,
};

export default Task;
