import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../../sharedStyles';
import Icon from 'react-native-vector-icons/Ionicons';

class DurationButton extends Component {
    formattedTime(duration) {
        if (duration % 30 == 0) {
            return duration / 60 + ' hr';
        } else {
            return duration + ' min';
        }
    }
    render() {
        const { duration, onPress, style } = this.props;
        return (
            <TouchableOpacity style={[styles.container, style]}>
                <Text style={styles.text}>{this.formattedTime(duration)}</Text>
                <Icon name="ios-stopwatch" color='#fff' size={15} style={styles.icon}></Icon>
            </TouchableOpacity>
        );
    }
}

export default DurationButton;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingVertical: 2,
        height: 25,
    },
    text: {
        fontFamily: 'OpenSans-Bold',
        justifyContent: 'center',
        color: '#fff',
        fontSize: 15,
        paddingRight: 5,
        maxHeight: 25,
    },
    icon: {
        maxHeight: 15,
    }
})
