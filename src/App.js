import React, { useState } from 'react';
import Input from './components/Input';
import {Dimensions, StatusBar} from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import { theme } from './theme';
import Task from './components/Task';

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

const List = styled.ScrollView`
  flex: 1;
  width: ${({ width }) => width - 40 }px;
`;

const taskData = [
    {
        id: 1, text: 'Hanbit', completed: false
    },
    {
        id: 2, text: 'React Native', completed: true
    },
    {
        id: 3, text: 'React Native Sample', completed: false
    },
    {
        id: 4, text: 'Edit TODO Item', completed: false
    }
];


const App = () => {
    const [task, setTask] = useState(taskData);

    const [newTask, setNewTask] = useState('');

    const textChangeHandler = (text) => {
        setNewTask(text);
    };

    const addTaskHandler = () => {
        const ids = task.map((t) => Number(t.id));
        const id = Math.max(...ids) + 1;
        const data = {
            id: id,
            text: newTask,
            completed: false
        };
        console.log('task: ',task);
        setTask([...task, data]);
        setNewTask('');
    };

    const deleteTaskHandler = (id) => {
        console.log('id: ',id);
        setTask(task.filter((t) => t.id !== id));
    };

    const confirmTaskHandler = (id) => {
        console.log('id: ',id);
        const confirmTask = task.map((t) => {
            return {
                id: t.id,
                text: t.text,
                completed: t.id === id ? !t.completed : t.completed
            }
        });
        console.log('confirmTask: ',confirmTask);
        setTask(confirmTask);
    };

    const [checked, setChecked] = useState(false);
    const checkboxHandler = (e) => {
        console.log('e: ',e);
    };

    const width = Dimensions.get('window').width;

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <StatusBar
                    barStyle={'light-content'}
                    backgroundColor={theme.background}
                />
                <Title>TODO LIST!</Title>
                <Input
                    placeholder={'+ Add a Task'}
                    value={task}
                    onChangeText={textChangeHandler}
                    onSubmitEditing={addTaskHandler}
                />
                <List width={width}>
                    {task.map((data) => {
                        return (
                            <Task
                                key={data.key}
                                item={data}
                                deleteTaskHandler={deleteTaskHandler}
                                confirmTaskHandler={confirmTaskHandler}
                            />
                        )
                    })}
                </List>
            </Container>
        </ThemeProvider>
    )
};

export default App;
