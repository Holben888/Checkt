import React, { Component } from 'react';
import { View, StyleSheet, Text, Animated } from 'react-native';
import { grayscaleColors } from '../../../sharedStyles';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Detail extends Component {
    constructor() {
        super();
        this.state = {
            fadeAnim: new Animated.Value(0),
        }
    }
    getIconName(detailType) {
        switch (detailType) {
            case "day":
                return "ios-time-outline";
            case "repeat":
                return "ios-repeat";
            default:
                return "ios-information";
        }
    }
    componentDidMount() {
        Animated.timing(this.state.fadeAnim, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
        }).start();
    }
    render() {
        const { name, type } = this.props;
        const animationStyles = {
            opacity: this.state.fadeAnim,
        }
        return (
            <Animated.View style={[styles.container, animationStyles]}>
                <Text style={styles.nameText}>{`${name.charAt(0).toUpperCase()}${name.substring(1)}`}</Text>
                <Icon name={this.getIconName(type)} size={15} style={styles.icon} />
            </Animated.View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        height: 23,
        width: 'auto',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: grayscaleColors.background,
        borderRadius: 4,
        paddingHorizontal: 10,
        marginLeft: 15,
    },
    nameText: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 13,
        marginRight: 5,
        color: grayscaleColors.tertiary,
    },
    icon: {
        maxHeight: 15,
        color: grayscaleColors.primary,
    }
})
