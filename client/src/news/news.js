// import React from 'react';

// class News extends React.Component {

//     constructor(props) {
//         super(props);
      
//     }

//  // News section function
//             let newsBox = $<Text>this.props.</Text>;
//  let newsUrl = 'https://newsapi.org/v2/everything?' +
//      'q=' + newName + '&' + 'pageSize=5&' +
//      'sortBy=popularity&' +
//      'apiKey=04246e4aed574328b298927d89b9985a';

//  $.ajax({
//      url: newsUrl,
//      method: "GET"
//      }).done(function(response) {
//      console.log('this is the repsonse');
//      console.log(response);
//      newsBox.html('');
//          $.each(response.articles, function(index, element) {
//              var date = new Date(element.publishedAt).toISOString().slice(0,10);
//              var author = element.author ? element.author : ' ';
//              var li = '<li><h3><a href="'+element.url+'" target="_blank">'+element.title+'</a></h3><span class="date">'+date+'</span><span class="author">'+author+'</span><p>'+element.description+'</p><img src="'+element.urlToImage+'" /></li>'
//              newsBox.append(li);
//              $('#news-section').append(newsBox);
//          });
//       });


//     updateApiCall() {
//         this.props.player1News(this.state.player1)
//     }

//     render() {
//         let newsObject = [];
//         if (!!this.props.data.articles) {
//             this.props.data.articles.map((x, i) => {
//                 newsObject.push(
//                     <div className="card mb-3" key={i}>
//                         <h4>{x.headline}</h4>
//                         {/* The line below crashes the app */}
//                         {/* {!!x.images &&
//                             <img width="300px" src={x.images[0].url} />
//                         } */}
//                     </div>
//                 );
//             });
//         }

//         return (
//             <div style={{ marginTop: '10px' }} className="container">
//                 {newsObject}
//             </div>
//         );
//     }
// }

// export default News;