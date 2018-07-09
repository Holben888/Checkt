import React, { Component } from 'react';
import { Header, Footer } from './sharedComponents';
import WeekPage from './weekPage';
import AllPage from './allPage';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AddModal from './addModal';
import * as Actions from './actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Page extends Component {
    constructor() {
        super();
        this.footerPressHandler = this.footerPressHandler.bind(this);
        this.fabEventHandler = this.fabEventHandler.bind(this);
        this.getPageByTitle = this.getPageByTitle.bind(this);
        this.state = {
            ...this.state,
            title: 'Week',
            phrasesFlattened: [],
            phraseData: {},
            displayAddModal: false,
        }
    }
    componentWillMount() {
        this.props.getTodoList();
    }
    footerPressHandler(itemName) {
        this.setState({
            title: itemName,
        })
    }
    fabEventHandler() {
        const fabToggled = !this.state.displayAddModal;
        this.setState({
            displayAddModal: fabToggled,
        });
    }
    getPageByTitle(title) {
        if (title === 'All')
            return <AllPage />
        else if (title === 'Week')
            return <WeekPage onFabPress={this.fabEventHandler} />
        else
            return <AllPage />
    }
    getFooterAttrs() {
        return [
            {
                icon: 'list-ios',
                iconSelected: 'list-ios-selected',
                iconSize: 14,
                name: 'All',
            }, {
                icon: 'week-ios',
                iconSelected: 'week-ios-selected',
                iconSize: 18,
                name: 'Week',
            }, {
                icon: 'calendar-ios',
                iconSelected: 'calendar-ios-selected',
                iconSize: 19,
                name: 'Month',
            }, {
                icon: 'collections-ios',
                iconSelected: 'collections-ios-selected',
                iconSize: 23,
                name: 'Collections',
            }
        ]
    }
    openProfile() {
        console.log('Profile opened!');
    }
    render() {
        const footerAttrs = this.getFooterAttrs();
        const { title, displayAddModal } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <Header
                    left={<Icon name="ios-menu" size={24} onPress={this.openProfile} />}
                    body={<Text style={{ fontFamily: 'OpenSans-Bold' }}>{title}</Text>} />
                {this.getPageByTitle(title)}
                <Footer selected={title} items={footerAttrs} onItemPress={this.footerPressHandler} />
                {displayAddModal && <AddModal onCollapse={this.fabEventHandler} />}
            </View>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        loading: state.pageReducer.loading,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
