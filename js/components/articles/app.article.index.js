class Articles extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            showAdd: false,
            filteredArticles: load()
        }
    }

    render() {
        return (
            <div>

                <h1 className="mt-5">Articles</h1>

                <div className="row">
                    <div className="col-md-3">
                        <div className="form-group">
                            <input onInput={this.onFilterArticles.bind(this)} type="search" className="form-control" placeholder="Search articles..."/>
                        </div>
                    </div>
                </div>

                <ArticleList articles={this.state.filteredArticles}/>

                <a href="#" onClick={this.onToggleShowAdd.bind(this)}>{(this.state.showAdd) ? 'Hide' : 'Show'} form</a>
                {this.state.showAdd && <ArticleNew />}

            </div>
        )
    }

    onFilterArticles(event) {
        event.preventDefault();
        const text = event.currentTarget.value;
        this.getFilteredArticlesForText(text).then(filteredArticles => {
            this.setState({
                filteredArticles: filteredArticles
            })
        });


    }

    onToggleShowAdd(event) {
        event.preventDefault();
        this.setState(prevState => {
            return {
                showAdd: !prevState.showAdd
            }
        })
    }

    getFilteredArticlesForText(text) {
        return new Promise(resolve => {
            const time = (Math.random() + 1) * 250;
            setTimeout(() => {
                const filteredAtricles = load().filter(article => article.title.toLowerCase().includes(text.toLowerCase()));
                resolve(filteredAtricles);
            }, time)
        });
    }
}