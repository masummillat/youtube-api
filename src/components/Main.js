import React from 'react';
import CreatePlayList from "./CreatePlayList";

class Main extends React.Component {
    render() {
        return (
            <div>
                <h1>Main Page</h1>
                <CreatePlayList/>
            </div>
        );
    }
}

export default Main;