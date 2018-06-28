import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import priorityColors from './priorityColors';
import { grayscaleColors } from '../../sharedStyles';
import DurationButton from './durationButton';

const circleRadius = 15;

class ListItem extends Component {
    render() {
        const { title, priority, duration, isOngoing, dateTime, useTime } = this.props;
        const date = new Date(dateTime);
        return (
            <View style={styles.container}>
                <View style={[styles.checkCircle, { borderColor: priorityColors[priority] }]}></View>
                <View style={styles.infoContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>{title}</Text>
                        {useTime && <Text style={styles.time}>{date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Text>}
                    </View>
                    {duration && <DurationButton duration={duration} style={styles.durationButton} />}
                </View>
            </View>
        );
    }
}

export default ListItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingLeft: 15,
        minHeight: 75,
        alignItems: 'center',

    },
    checkCircle: {
        width: circleRadius,
        height: circleRadius,
        borderRadius: circleRadius,
        borderWidth: 2,
        borderColor: priorityColors[4],
        marginRight: 15,
    },
    infoContainer: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        flex: 1,
        marginRight: 45,
        borderBottomWidth: 1,
        borderBottomColor: priorityColors[4],
    },
    textContainer: {
        justifyContent: 'center',
    },
    title: {
        fontFamily: 'OpenSans-Regular',
        fontSize: 15,
        color: grayscaleColors.primary,
    },
    time: {
        marginTop: 5,
        fontSize: 13,
        fontFamily: 'OpenSans-Bold',
        color: grayscaleColors.primary,
    },
    durationButton: {
        marginLeft: 5,
    }
})
