import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../../sharedStyles';
import Icon from 'react-native-vector-icons/Ionicons';

export default class FAB extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Icon name="ios-add" size={30} color={colors.white} style={styles.icon} />
            </View>
        )
    }
};

const circleRadius = 50;
const styles = StyleSheet.create({
    container: {
        height: circleRadius,
        width: circleRadius,
        position: 'absolute',
        bottom: 15,
        right: 15,
        elevation: 3,
        backgroundColor: colors.primary,
        borderRadius: circleRadius,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        maxHeight: 30,
    }
})
