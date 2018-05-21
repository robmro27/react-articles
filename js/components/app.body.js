class AppBody extends React.Component
{
    constructor() {
        super()
        this.state = {
            showAdd: false
        }
    }

    render() {
        return (
            <main role="main" className="mainContainer container">

                <Articles />

                <a href="#" onClick={this.onToggleShowAdd.bind(this)}>{(this.state.showAdd) ? 'Hide' : 'Show'} form</a>
                {this.state.showAdd && <ArticleNew />}

            </main>
        )
    }

    onToggleShowAdd(event) {

        event.preventDefault();

        this.setState(prevState => {
           return {
               showAdd: !prevState.showAdd
           }
        })
    }

}