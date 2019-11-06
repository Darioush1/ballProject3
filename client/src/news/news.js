import React from 'react';

class News extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            newName: props.player1,
            error: null,
            isloaded: false,
            news: []
        }
    }

    // News section function
    componentDidMount() {
        console.log(this.state.player1)
        let newName = this.state.player1.replace(' ', '-');
        console.log("news search name" + newName)
        let newsUrl = 'https://newsapi.org/v2/everything?' +
            'q=' + newName + '&' + 'pageSize=1&' +
            'sortBy=popularity&' +
            'apiKey=04246e4aed574328b298927d89b9985a';
        console.log(newsUrl)
        fetch(newsUrl)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isloaded: true,
                        news: result.news
                    });
                },
                (error) => {
                    this.setState({
                        isloaded: true,
                        error
                    });
                }
            )
    }


    //             var date = new Date(element.publishedAt).toISOString().slice(0, 10);
    // var author = element.author ? element.author : ' ';
    // var li = '<li><h3><a href="' + element.url + '" target="_blank">' + element.title + '</a></h3><span class="date">' + date + '</span><span class="author">' + author + '</span><p>' + element.description + '</p><img src="' + element.urlToImage + '" /></li>'
    // newsBox.append(li);
    // ('#news-section').append(newsBox);


    // updateApiCall() {
    //     this.props.player1News(this.state.player1)
    // }

    render() {

        const { newName, error, isloaded, news } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isloaded) {
            return <div>loading...</div>
        } else {
            return (
                <ul>
                    {news.articles.map(news.articles = (
                    <li key={news.articles.source.id}>
                        <li>
                            <h3>
                                <a href={news.articles.url}>
                                </a>
                            </h3>
                        </li>

                    </li>
                    )
                    )
                    }
            </ul>
            );
        }
    }
}

export default News;