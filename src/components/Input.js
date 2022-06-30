import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from "react-native";
import PropTypes from 'prop-types';

const StyledInput = styled.TextInput.attrs(({ theme }) => ({
    placeholderTextColor: theme.main,
}))`
    width: ${({ width }) => width - 40 }px;
    height: 60px;
    margin: 3px 0;
    padding: 15px 20px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.itemBackground};
    font-size: 25px;
    color: ${({ theme }) => theme.text};
`;

const Input = ({placeholder, value, onChangeText, onSubmitEditing}) => {
    const width = Dimensions.get('window').width;
    return (
        <StyledInput
            width={width}
            placeholder={placeholder}
            maxLength={50}
            value={value ? value : ''}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
            autoCapitalize={'none'} // 첫 글자 대문자 여부
            autoCorrect={false} // 자동 수정 기능
            returnKeyType={'done'} // 키보드 완료 버튼 설정
            // keyboardAppearance={'dark'} iOS만 가능
        />
    )
};

Input.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
    onSubmitEditing: PropTypes.func.isRequired,
};

export default Input;
