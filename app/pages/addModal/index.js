import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, KeyboardAvoidingView } from 'react-native';
import Backdrop from './backdrop';
import { colors, grayscaleColors } from '../sharedStyles';
import DetailAddButton from './detailAddButton';
import Icon from 'react-native-vector-icons/Ionicons';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const phrasesToFind = ['today', 'tomorrow'];
export default class AddModal extends Component {
    constructor() {
        super();
        this.checkForDetailPhrases = this.checkForDetailPhrases.bind(this);
        this.state = {
            input: '',
            foundPhrase: '',
            textInputHeight: 0,
        }
    }
    applySpacing(text) {
        if (text)
            return text + ' ';
        else
            return '';
    }
    onTextInputHeightChange(event) {
        if (event && event.nativeEvent && event.nativeEvent.contentSize) {
            const height = event.nativeEvent.contentSize.height;
            const { textInputHeight, textInputHeightAnim } = this.state;

            this.setState({
                textInputHeight: height,
            });
        }
    }
    checkForDetailPhrases(input) {
        if (!input.length)
            return;
        input = input.trimRight();

        const lastWord = input.substring(input.lastIndexOf(' ')).trim();
        const restOfInput = input.substring(0, input.lastIndexOf(' '));
        const detailPhraseFound = phrasesToFind.includes(lastWord.toLowerCase());

        if (detailPhraseFound && lastWord !== this.state.detailPhrase) {
            this.setState({
                input: this.applySpacing(restOfInput),
                detailPhrase: lastWord,
            })
        } else if (!detailPhraseFound && this.state.detailPhrase) {
            this.setState({
                input: input,
                detailPhrase: '',
            })
        }
    }
    render() {
        const { onCollapse } = this.props;
        const { textInputHeight, input, detailPhrase, textInputHeightAnim } = this.state;
        return (
            <KeyboardAvoidingView style={styles.container} behavior="height" enabled>
                <Backdrop onCollapse={onCollapse} />
                <View style={[styles.inputContainer, { height: textInputHeight + 70 }]}>
                    <TextInput autoFocus style={styles.textInput}
                        keyboardType="twitter"
                        spellCheck={false}
                        multiline={true}
                        onContentSizeChange={(event) => this.onTextInputHeightChange(event)}
                        onChangeText={(input) => this.checkForDetailPhrases(input)}>
                        <Text>{input}</Text>
                        <Text style={{
                            textDecorationLine: 'underline',
                            textDecorationColor: colors.primary
                        }}>
                            {detailPhrase}
                        </Text>
                    </TextInput>
                    <View style={styles.buttonContainer}>
                        <Icon name="md-more" size={30} style={{ height: 30, paddingRight: 15 }} color={grayscaleColors.tertiary} />
                        <DetailAddButton disabled={!detailPhrase} />
                    </View>
                </View>
            </KeyboardAvoidingView>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: SCREEN_HEIGHT,
        width: SCREEN_WIDTH,
    },
    inputContainer: {
        backgroundColor: colors.white,
        minHeight: 90,
        paddingHorizontal: 15,
        paddingTop: 10,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        marginTop: -5,
    },
    textInput: {
        fontFamily: 'OpenSans-Regular',
        minHeight: 20,
        fontSize: 15,
        color: grayscaleColors.primary,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    }
})
