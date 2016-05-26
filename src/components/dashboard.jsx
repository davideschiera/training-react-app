import React from 'react';

export default class Dashboard extends React.Component {
    componentWillMount() {
        this.setState({
            name: 'Something',
            data: [1, 2, 3]
        });
    }

    render() {
        return (
            <div>
                <h3>{this.props.params.id} - {this.state.name}</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                </p>
                <strong>Loaded!</strong>
                <span>{this.state.data.join(', ')}</span>
                <button onClick={this.reload.bind(this)}>Reload!</button>
            </div>
        );
    }

    reload() {
        this.setState({
            data: this.state.data.map(val => val + 1)
        });
    }
}