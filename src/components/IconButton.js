import React from 'react';
import { TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from "prop-types";

const IconButton = ({ type, onPressOut, id }) => {

    return (
        <TouchableOpacity onPressOut={() => onPressOut(id)}>
            <Icon name={type} size={18} color={'#FFFFFF'}/>
        </TouchableOpacity>
    );
};

IconButton.prototype = {
    type: PropTypes.string.isRequired,
    onPressOut: PropTypes.func,
};

export default IconButton;
