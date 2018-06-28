import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from '../../sharedComponents/Icon';
import { colors, grayscaleColors } from '../../sharedStyles';

export default class Footer extends Component {
    constructor() {
        super();
        this.getIconAttrs = this.getIconAttrs.bind(this);
    }
    getIconAttrs(item) {
        if (this.props.selected === item.name)
            return {
                name: item.iconSelected,
                style: styles.itemSelected,
            }
        else
            return {
                name: item.icon,
                style: styles.item,
            }
    }
    render() {
        const { children, items, onItemPress, selected } = this.props;
        return (
            <View style={styles.container}>
                {items.map((item, index) => {
                    const iconAttrs = this.getIconAttrs(item);
                    return (
                        <TouchableOpacity key={index} style={styles.itemContainer} onPress={() => onItemPress(item.name)}>
                            <Icon name={iconAttrs.name} size={item.iconSize} style={iconAttrs.style} />
                        </TouchableOpacity>
                    )
                })}
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        height: 45,
        borderTopWidth: 1,
        borderTopColor: grayscaleColors.accent,
        backgroundColor: grayscaleColors.white,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    itemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    item: {
        color: grayscaleColors.secondary,
    },
    itemSelected: {
        color: colors.primary,
    }
})
