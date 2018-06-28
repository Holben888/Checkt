import React, { Component } from 'react';
import { View, StyleSheet, NativeModules } from 'react-native';
import { grayscaleColors } from '../../sharedStyles';

const { StatusBarManager } = NativeModules;
class Header extends Component {
    constructor() {
        super();
        this.state = {
            statusBarHeight: 15,
        }
    }
    async onComponentDidMount() {
        await StatusBarManager.getHeight(({ height }) => {
            this.setState({
                statusBarHeight: height,
            })
        })
    }
    render() {
        const { left, body, right } = this.props;
        return (
            <View style={[styles.container, { paddingTop: this.state.statusBarHeight }]}>
                <View style={styles.left}>
                    {left}
                </View>
                <View style={styles.body}>
                    {body}
                </View>
                <View style={styles.right}>
                    {right}
                </View>
            </View>
        );
    }
}

export default Header;

const styles = StyleSheet.create({
    container: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: grayscaleColors.white,
        borderBottomColor: grayscaleColors.accent,
        borderBottomWidth: 1,
    },
    left: {
        paddingTop: 15,
        position: 'absolute',
        left: 15,
    },
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    right: {
        paddingTop: 15,
        position: 'absolute',
        right: 15,
    }
})
