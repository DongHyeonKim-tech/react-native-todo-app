import React, { useState } from 'react';
import styled from 'styled-components/native';
import PropTypes from "prop-types";
import IconButton from './IconButton';
import Input from './Input';

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
  color: ${({ theme, completed }) => ( completed ? theme.done : theme.text )};
  text-decoration-line: ${({ completed }) => completed ? 'line-through' : 'none'};
`;

const Task = ({ item, deleteTaskHandler, confirmTaskHandler, updateTaskHandler }) => {

    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(item.text);

    const activateUpdateHandler = () => {
        setIsEditing(true);
    };

    const submitEditingHandler = () => {
        if (isEditing) {
            item.text = text;
            setIsEditing(false);
            updateTaskHandler(item)
        }
    };

    const onBlur = () => {
        if (isEditing) {
            setIsEditing(false);
            setText(item.text);
        }
    };

    return isEditing ? (
        <Input
            value={text}
            onChangeText={text => setText(text)}
            onSubmitEditing={submitEditingHandler}
            onBlur={onBlur}
        />
        )
        :
        (
        <Container key={item.key}>
            <IconButton
                type={item.completed ? 'check-square' : 'square-o'}
                id={item.id}
                onPressOut={confirmTaskHandler}
                completed={item.completed}
            />
            <Contents completed={item.completed}>{item.text}</Contents>
            {item.completed || <IconButton type={'pencil'} onPressOut={activateUpdateHandler}/>}
            <IconButton
                type={'trash-o'}
                id={item.id}
                onPressOut={deleteTaskHandler}
                completed={item.completed}
            />
        </Container>
    )
};

Task.propTypes = {
    item: PropTypes.object.isRequired,
    deleteTaskHandler: PropTypes.func.isRequired,
    confirmTaskHandler: PropTypes.func.isRequired,
    completed: PropTypes.bool,
};

export default Task;
