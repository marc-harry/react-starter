import React, { Component } from 'react';

class ItemComponent extends Component {
    constructor() {
        super();
        this.state = {
            message: ''
        };
    }

    componentWillMount() {
        fetch("/api/message")
            .then(resp => resp.json())
            .then(json => this.setState({ message: json }));
    }

    render() {
        let { number } = this.props;
        if (!number) {
            number = 0;
        }

        return (
            <div>
            Item here! {number} - {this.state.message}
            </div>
        );
    }
}

export default ItemComponent;