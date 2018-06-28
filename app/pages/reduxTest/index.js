import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, ActivityIndicator } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from './actions';

class ReduxTest extends Component {
    constructor(props) {
        super();
        this.renderItem = this.renderItem.bind(this);
    }
    componentDidMount() {
        this.props.getTestData();
    }
    renderItem({ item, index }) {
        return (
            <View style={styles.row}>
                <Text style={styles.title}>
                    {(parseInt(index) + 1)}{". "}{item.title}
                </Text>
                <Text style={styles.description}>
                    {item.description}
                </Text>
            </View>
        );
    }
    render() {
        if (this.props.loading) {
            return (
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator animating={true} />
                </View>
            );
        } else {
            return (
                <View style={styles.dataListView}>
                    <FlatList
                        ref='listRef'
                        data={this.props.data}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index.toString()} />
                </View>
            );
        }
    }
}

function mapStateToProps(state, props) {
    return {
        loading: state.reduxTestReducer.loading,
        data: state.reduxTestReducer.data,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxTest);

const styles = StyleSheet.create({
    activityIndicatorContainer: {
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    dataListView: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingTop: 20,
    }
})
