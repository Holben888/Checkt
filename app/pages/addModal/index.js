import React, { Component } from 'react';
import { StyleSheet, Dimensions, KeyboardAvoidingView } from 'react-native';
import { Backdrop, InputBox } from './Components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from './actions';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

class AddModal extends Component {
    componentDidMount() {
        this.props.getDetailPhraseData();
    }
    render() {
        const { onCollapse, loading, detailPhraseData, detailLabelData } = this.props;
        return (
            <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
                <Backdrop onCollapse={onCollapse} />
                <InputBox loading={loading} detailPhraseData={detailPhraseData} detailLabelData={detailLabelData} />
            </KeyboardAvoidingView>
        )
    }
};

function mapStateToProps(state, props) {
    return {
        loading: state.addReducer.loading,
        detailPhraseData: state.addReducer.detailPhraseData,
        detailLabelData: state.addReducer.detailLabelData,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddModal);

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: SCREEN_HEIGHT,
        width: SCREEN_WIDTH,
    },
});