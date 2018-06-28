import React, { Component } from 'react';
import { View, Animated, StyleSheet, TouchableWithoutFeedback, Dimensions } from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

export default class Backdrop extends Component {
    constructor() {
        super();
        this.onCollapse = this.onCollapse.bind(this);
        this.state = {
            fadeAnim: new Animated.Value(0),
        }
    }
    componentDidMount() {
        Animated.timing(this.state.fadeAnim, {
            toValue: 0.8,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }
    onCollapse() {
        Animated.timing(this.state.fadeAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start(this.props.onCollapse);
    }

    render() {
        const { fadeAnim } = this.state;
        const animatedStyles = {
            opacity: fadeAnim,
        }
        return (
            <TouchableWithoutFeedback onPress={this.onCollapse}>
                <Animated.View style={[styles.container, animatedStyles]} />
            </TouchableWithoutFeedback>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#525151',
        flex: 1,
    }
})