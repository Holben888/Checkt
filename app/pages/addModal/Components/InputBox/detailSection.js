import React, { Component } from 'react';
import { View, Text, StyleSheet, LayoutAnimation } from 'react-native';
import Detail from './detail';
import { grayscaleColors } from '../../../sharedStyles';
import Icon from 'react-native-vector-icons/Ionicons';

export default class DetailSection extends Component {
    constructor() {
        super();
        this.onToggleShowMore = this.onToggleShowMore.bind(this);
        this.state = {
            showMore: false,
        }
    }
    onToggleShowMore() {
        const showMore = !this.state.showMore;
        this.setState({
            showMore: showMore,
        });
    }
    render() {
        const { addedDetails, detailLabels, children } = this.props;
        if (!this.state.showMore) {
            return (
                <View style={styles.container}>
                    <Icon name="md-more" size={30} style={styles.moreIcon} onPress={this.onToggleShowMore} />
                    {...children}
                    {addedDetails.map((detailData, index) =>
                        <Detail key={index} name={detailData.detail} type={detailData.type} />
                    )}
                </View>
            )
        } else {
            console.log(detailLabels)
            return (
                <View style={styles.containerMore}>
                    {detailLabels.map((label, index) =>
                        <Text key={index}>{label}</Text>
                    )}
                </View>
            )
        }
    }
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    containerMore: {
        // flex: 1,
        marginVertical: 10,
        flexDirection: 'column',
    },
    moreIcon: {
        height: 30,
        paddingRight: 15,
        color: grayscaleColors.tertiary,
    },
})