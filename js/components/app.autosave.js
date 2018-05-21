class Autosave extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            autoSaveIn: Number(props.autoSaveIn),
        }
    }

    render() {
        return (
            <p className="card-text">Auto Save in: {this.state.autoSaveIn}s</p>
        )
    }

    componentDidMount() {
        this.timerId = window.setInterval(this.onUpdateAutoSave.bind(this), 1000);
    }

    componentWillUnmount() {
        window.clearInterval(this.timerId);
    }

    onUpdateAutoSave() {
        this.setState(prevState => {

            let autoSaveIn = 60;
            if (prevState.autoSaveIn > 1) {
                autoSaveIn = prevState.autoSaveIn - 1;
            }

            return {
                autoSaveIn: autoSaveIn
            }
        })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.autoSaveIn != this.state.autoSaveIn) {
            this.setState({
                autoSaveIn: nextProps.autoSaveIn
            })
        }
    }
}