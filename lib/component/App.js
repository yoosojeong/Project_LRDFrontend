import React, {Component} from 'react';
import {connect} from "react-redux";

class App extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                Hello
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state;
};
export default connect(mapStateToProps, null)(App);