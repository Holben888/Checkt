import React, { Component } from 'react';
import SectionHeader from './sectionHeader';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, grayscaleColors } from '../../sharedStyles';
import Icon from 'react-native-vector-icons/Ionicons';

export default class SectionHeaderActionable extends Component {
    render() {
        const { icon, type, style } = this.props;
        return (
            <TouchableOpacity style={style}>
                <SectionHeader {...this.props} style={styles.container} type={type}>
                    <View style={styles.iconContainer}>
                        <Icon name={icon} size={28} color={grayscaleColors.secondary} />
                    </View>
                </SectionHeader>
            </TouchableOpacity>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        height: 45,
    },
    iconContainer: {
        flex: 1,
        paddingRight: 5,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    }
})