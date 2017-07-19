import React, { Component } from 'react';

class ItemComponent extends Component {
    render() {
        let { number } = this.props;
        if (!number) {
            number = 0;
        }

        return (
            <div>
            Item here! {number}
            </div>
        );
    }
}

export default ItemComponent;