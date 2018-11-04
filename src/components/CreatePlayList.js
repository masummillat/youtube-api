import React, {Component} from 'react';
import {connect} from "react-redux";
import {requestVidoes} from "../actions";

class CreatePlayList extends Component {


    componentDidMount() {
        this.props.fetchYoutubeVideo();
    }

    render() {
        console.log(this.props.items);
        return (
            <div>
                Helodflksdaflkjdfsaljk
            </div>
        )
    }
}

const mapStateToProps = state => ({
    items: state.youtube.items
});

const mapDispatchToProps = dispatch => ({
    fetchYoutubeVideo: () => dispatch(requestVidoes())
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePlayList);