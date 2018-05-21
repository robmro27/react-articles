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
                <h1 className="mt-5">Articles</h1>

                <div>
                    <Article title="Title" subtitle="subtitle..." content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
                    <Article title="Title" subtitle="subtitle..." content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
                </div>
                <div className="clearfix"></div>

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