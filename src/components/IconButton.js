import React from 'react';
import { TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from "prop-types";
import { theme } from '../theme';

const IconButton = ({ type, onPressOut, id, completed }) => {

    return (
        <TouchableOpacity onPressOut={() => onPressOut(id)}>
            <Icon name={type} size={18} color={'#FFFFFF'} style={{tintColor: completed ? theme.done : theme.text}}/>
        </TouchableOpacity>
    );
};

IconButton.prototype = {
    type: PropTypes.string.isRequired,
    onPressOut: PropTypes.func,
};

export default IconButton;
