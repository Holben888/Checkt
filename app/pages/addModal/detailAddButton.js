import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { colors, grayscaleColors } from '../sharedStyles';
import Icon from 'react-native-vector-icons/Feather';

export default class DetailAddButton extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Icon name="arrow-right" size={19} color={colors.white} />
            </View>
        )
    }
};

const circleRadius = 23;
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        height: circleRadius,
        width: circleRadius,
        borderRadius: circleRadius,
        justifyContent: 'center',
        alignItems: 'center',
    },
})