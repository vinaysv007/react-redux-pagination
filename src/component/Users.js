import React, { Component } from 'react';
import { connect } from 'react-redux';
import { usersRequest, gotoNextPage } from '../action/Users';
import Loading from './Loading';
import Error from './Error';
import UserData from './userdata/UserData';

class Users extends Component {

    state = {
        currentPage: 0,
        numItemsToDisplay: 5,
        response: null,
        slicedItems: null,
        pageNum: null,
        error: null,
        totalItems: 0
    }

    componentDidMount() {
        this.props.usersRequest();
    }

    getSlicedItems = (page, displayItems, response) => {
        let start = page * displayItems;
        let end = start + displayItems;
        let slicedItems = response.slice(start, end);
        return slicedItems;
    }

    componentWillReceiveProps(nextProps) {
        const { currentPage, numItemsToDisplay, response } = this.state;
        if (nextProps.response != null) {
            let slicedItems = this.getSlicedItems(currentPage, numItemsToDisplay, nextProps.response);
            this.setState({
                response: nextProps.response,
                slicedItems: slicedItems,
                totalItems: nextProps.response.length
            })
        }
        if (nextProps.pageNum != null) {
            let slicedItems = this.getSlicedItems(nextProps.pageNum, numItemsToDisplay, response);
            this.setState({
                currentPage: nextProps.pageNum,
                slicedItems: slicedItems,
                pageNum: nextProps.pageNum
            })
        }
    }

    render() {
        const { response, gotoNextPage, pageNum, error } = this.props;
        const { slicedItems, numItemsToDisplay, totalItems, currentPage } = this.state;

        if (response == null && pageNum == null && error == null) {
            return (
                <React.Fragment>
                    <Loading />
                </React.Fragment>
            )
        } else if ((response !== null || pageNum != null) && error == null) {
            return (
                <React.Fragment>
                    <UserData slicedItems={slicedItems}
                        totalItems={totalItems}
                        numItemsToDisplay={numItemsToDisplay}
                        gotoNextPage={gotoNextPage}
                    />
                </React.Fragment>
            )
        }
        else if (response == null && pageNum == null && error != null) {
            return (
                <React.Fragment>
                    <Error />
                </React.Fragment>
            )
        } else {
            return null;
        }
    }
}
const mapStateToProps = (state) => ({
    response: state.users.response,
    error: state.users.error,
    pageNum: state.users.pageNum
})

const mapDispatchToProps = {
    usersRequest, gotoNextPage
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);