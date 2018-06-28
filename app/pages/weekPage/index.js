import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, SectionList } from 'react-native';
import { bindActionCreators } from 'redux';
import { ListItem, SectionHeader, SectionHeaderActionable, FAB } from '../sharedComponents';
import { daysOfWeekShort, daysOfWeek, months, currentDate } from '../../res/date-resources';
import * as Actions from './actions';

class WeekPage extends Component {
    constructor() {
        super();
        this.groupByDate = this.groupByDate.bind(this);
        this.displayAddModal = this.displayAddModal.bind(this);
        this.state = {
            showAddModal: false,
        }
    }
    componentWillMount() {
        this.props.getTodoList();
    }
    groupByDate(data) {
        const map = new Map();
        data.forEach((item) => {
            const date = new Date(item.dateTime);
            const key = (date.getTime() >= currentDate.getTime()) ? date.toLocaleDateString() : 'Overdue';
            const collection = map.get(key);
            collection ? map.set(key, [...collection, item]) : map.set(key, [item]);
        });
        return [...map.entries()];
    }
    displayAddModal() {
        this.setState({
            showAddModal: true,
        })
    }
    getSectionHeaderText(title) {
        const date = new Date(title);
        const month = months[date.getMonth()];
        const dateNum = date.getDate();
        const headerAttrs = {};
        if (dateNum === currentDate.getDate()) {
            const day = daysOfWeekShort[date.getDay()];
            headerAttrs.primary = 'Today';
            headerAttrs.secondary = `${day} ${month} ${dateNum}`;
        } else if (dateNum === currentDate.getDate() + 1) {
            const day = daysOfWeekShort[date.getDay()];
            headerAttrs.primary = 'Tomorrow';
            headerAttrs.secondary = `${day} ${month} ${dateNum}`;
        } else {
            headerAttrs.primary = daysOfWeek[date.getDay()];
            headerAttrs.secondary = `${month} ${dateNum}`;
        }
        return headerAttrs;
    }
    render() {
        const { loading, todoListData, onFabPress } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <SectionList
                    renderItem={({ item, index }) => (<ListItem key={index} {...item} />)}
                    renderSectionHeader={({ section: { title, data } }) => {
                        if (title === 'Overdue')
                            return (<SectionHeader primary={title} count={data.length} type={title} />);
                        else
                            return (<SectionHeaderActionable {...this.getSectionHeaderText(title)} count={data.length} icon="ios-add" style={{ marginTop: -1 }} />);
                    }
                    }
                    sections={this.groupByDate(todoListData).map((item) => {
                        return { title: item[0], data: item[1] }
                    })}
                    keyExtractor={(item, index) => index.toString()} />
                <FAB onPress={onFabPress} />
            </View>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        loading: state.weekPageReducer.loading,
        todoListData: state.weekPageReducer.data,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WeekPage);
