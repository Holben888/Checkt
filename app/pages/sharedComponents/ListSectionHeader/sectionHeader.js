import React, { Component } from 'react';
import getThemeStyles from './theme';
import { StyleSheet, View, Text } from 'react-native';


export default class SectionHeader extends Component {
    adjustFontSize(count) {
        if (count > 9)
            return 13;
        else
            return 15;
    }
    render() {
        const { count, primary, secondary, children, style, type } = this.props;
        const styles = getThemeStyles(type);
        return (
            <View style={[styles.container, style]}>
                {count && <View style={styles.countContainer}>
                    <Text style={[styles.countText, { fontSize: this.adjustFontSize(count) }]}>{count}</Text>
                </View>}
                <Text style={styles.titleTextPrimary}>{primary}</Text>
                {secondary && <Text style={styles.titleTextSecondary}>{secondary}</Text>}
                {children}
            </View >
        )
    }
};