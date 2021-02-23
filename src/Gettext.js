class component extends React.Component {
    constructor() {
        super()

        this.state = {
            word: ''
        };
    }

    increment() {
        this.setState({
            word: this.state.word + ''
        })
    }

    handleChange(value) {
        this.setState({
            word: value
        });
    }

    render() {
        return (
            <div>
                <p>The message is: { this.state.word } </p>
                <input type="text" value={this.state.word} onChange={(event) =>this.handleChange(event.target.value)} />
                <input type="submit" value="Add Word" onClick={() => this.increment()} />
                {/*<p><input type="button" value="clear msg" onClick={() => this.eraseWord()} /></p>*/}
            </div>
        );
    }
}
