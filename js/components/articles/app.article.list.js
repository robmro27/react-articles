const ArticleList = ({articles}) => {
    if (articles.length > 0) {
        return (
            <div>
                {articles.map(article => <Article key={article.id} title={article.title} subtitle={article.subtitle} content={article.content}/>)}
                <div className="clearfix"></div>
            </div>
        )
    }

    return (
        <p>No results</p>
    )
}