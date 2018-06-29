import React, { Component } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Animated } from 'react-native';
import { colors, grayscaleColors } from '../sharedStyles';
import Icon from 'react-native-vector-icons/Feather';

export default class DetailAddButton extends Component {
    render() {
        const { disabled } = this.props;
        return (
            <TouchableWithoutFeedback disabled={disabled}>
                <View style={[styles.container, styles.disabled]}>
                    <Icon name="arrow-right" size={19} color={grayscaleColors.accent} />
                    {!disabled && <EnabledButton />}
                </View>
            </TouchableWithoutFeedback>
        )
    }
};

const circleRadius = 23;
class EnabledButton extends Component {
    constructor() {
        super();
        this.state = {
            sizeAnim: new Animated.Value(0),
        }
    }
    componentDidMount() {
        Animated.spring(this.state.sizeAnim, {
            toValue: 1,
            useNativeDriver: true,
        }).start();
    }
    async componentWillUnmount() {
        await Animated.timing(this.state.sizeAnim, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
        }).start();
    }

    render() {
        const { sizeAnim } = this.state;
        const animatedStyles = {
            transform: [
                { scaleX: sizeAnim },
                { scaleY: sizeAnim },
            ],
        }
        return (
            <Animated.View style={[styles.container, styles.enabled, animatedStyles]}>
                <Icon name="arrow-right" size={19} color={colors.white} />
            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        height: circleRadius,
        width: circleRadius,
        borderRadius: circleRadius,
        justifyContent: 'center',
        alignItems: 'center',
    },
    enabled: {
        position: 'absolute',
    },
    disabled: {
        backgroundColor: grayscaleColors.background,
    },
})