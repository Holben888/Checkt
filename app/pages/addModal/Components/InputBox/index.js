import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet, LayoutAnimation } from 'react-native';
import DetailAddButton from './detailAddButton';
import DetailSection from './detailSection';
import { colors, grayscaleColors } from '../../../sharedStyles';

export default class InputBox extends Component {
    constructor() {
        super();
        this.checkForDetailPhrases = this.checkForDetailPhrases.bind(this);
        this.addDetailPhrase = this.addDetailPhrase.bind(this);
        this.state = {
            userInput: '',
            detailPhrase: null,
            addedDetails: [],
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
        LayoutAnimation.configureNext({
            duration: 100,
            update: {
                type: LayoutAnimation.Types.linear,
                property: LayoutAnimation.Properties.ScaleXY,
            },
        });
        if (event && event.nativeEvent && event.nativeEvent.contentSize && event.nativeEvent.contentSize.height) {
            this.setState({
                textInputHeight: event.nativeEvent.contentSize.height,
            });
        }
    }
    onToggleShowMore(event) {
        LayoutAnimation.configureNext({
            duration: 100,
            update: {
                type: LayoutAnimation.Types.linear,
                property: LayoutAnimation.Properties.ScaleXY,
            },
        });
    }
    checkForDetailPhrases(input) {
        const detailPhraseData = this.props.detailPhraseData || [];

        input = input.trimRight();

        const lastWord = input.substring(input.lastIndexOf(' ')).trim();
        const restOfInput = input.substring(0, input.lastIndexOf(' '));
        const matchingData = detailPhraseData.find(data => data.phrase === lastWord.toLowerCase());

        if (matchingData && lastWord !== this.state.detailPhrase) {
            this.setState({
                userInput: this.applySpacing(restOfInput),
                detailPhrase: { userInput: lastWord, data: matchingData },
            });
        } else if (!matchingData && this.state.detailPhrase) {
            this.setState({
                userInput: input,
                detailPhrase: null,
            });
        }
    }
    addDetailPhrase() {
        const { addedDetails, detailPhrase } = this.state;
        let newAddedDetails = [...addedDetails];
        let updatedDetail = false;

        for (let index in newAddedDetails) {
            if (newAddedDetails[index].type === detailPhrase.data.type) {
                newAddedDetails[index] = detailPhrase.data;
                updatedDetail = true;
                break;
            }
        }
        if (!updatedDetail)
            newAddedDetails = [...newAddedDetails, detailPhrase.data];

        this.setState({
            detailPhrase: null,
            addedDetails: newAddedDetails,
        })
    }
    render() {
        const { textInputHeight, userInput, detailPhrase, addedDetails } = this.state;
        const { detailLabelData } = this.props;
        const detailLabels = detailLabelData ? detailLabelData.map(data => data.label) : [];

        return (
            <View style={styles.container}>
                <TextInput autoFocus style={styles.textInput}
                    keyboardType="twitter"
                    spellCheck={false}
                    multiline={true}
                    onContentSizeChange={(event) => this.onTextInputHeightChange(event)}
                    onChangeText={(input) => this.checkForDetailPhrases(input)}>

                    <Text>{userInput}</Text>

                    {detailPhrase && <Text style={styles.detailText}>
                        {detailPhrase.userInput}
                    </Text>}

                </TextInput>
                <DetailSection addedDetails={addedDetails} detailLabels={detailLabels}>
                    <DetailAddButton disabled={!detailPhrase} onPress={this.addDetailPhrase} />
                </DetailSection>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'column',
        backgroundColor: colors.white,
        paddingHorizontal: 15,
        paddingTop: 10,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        marginTop: -5,
    },
    detailText: {
        // color: colors.primary,
        textDecorationLine: 'underline',
        textDecorationColor: colors.primary,
    },
    textInput: {
        fontFamily: 'OpenSans-Regular',
        minHeight: 20,
        marginBottom: 5,
        fontSize: 15,
        color: grayscaleColors.primary,
    },
})
