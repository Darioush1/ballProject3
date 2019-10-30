import React from 'react';

class News extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let newsObject = [];
        if (!!this.props.data.articles) {
            this.props.data.articles.map((x, i) => {
                newsObject.push(
                    <div className="card mb-3" key={i}>
                        <h4>{x.headline}</h4>
                        {/* The line below crashes the app */}
                        {/* {!!x.images &&
                            <img width="300px" src={x.images[0].url} />
                        } */}
                    </div>
                );
            });
        }

        return (
            <div style={{ marginTop: '10px' }} className="container">
                {newsObject}
            </div>
        );
    }
}

export default News;