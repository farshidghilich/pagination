import React from "react";

class Page extends React.Component {
  // this is not my own answer:
  state = {
    response: [],
    pageNumbers: [],
  };

  componentDidMount = () => {
    this.getResults(1);
  };

  getResults = (pageNo) => {
    fetch(`https://jsonmock.hackerrank.com/api/articles?page=${pageNo}`)
      .then((resp) => resp.json())
      .then((resp) => {
        let filteredResponse =
          resp.data && resp.data.filter((res) => res.title);
        this.setState({
          articles: filteredResponse,
          pageNumbers: resp.total_pages,
        });
      });
  };

  // state = {

  //   titles: []
  // }

  // fullURL = "https://jsonmock.hackerrank.com/api/articles?page=1"
  // url = "https://jsonmock.hackerrank.com/api/articles?page="
  // totalPages = 0

  // componentDidMount = () => {
  //   fetch(`${this.fullURL}`, {
  //     method: 'GET',
  //     headers: {
  //         "Content-Type": "application/json",
  //         "Accept": "application/json"
  //       },
  //     body: JSON.stringify()
  // })
  //   .then(resp => {
  //     return resp.json()
  //     // console.log(resp.json())
  //   })
  //   .then(json => {
  //     console.log(json)
  //     return (this.totalPages = json.total_pages)
  //   })
  //   console.log(this.totalPages)
  //   this.callNextFetch()
  // }

  // callNextFetch = () => {
  //   console.log('and here', this.totalPages)
  //   // debugger
  //   // let i
  //   // console.log("here", `${this.url}`)
  //   // for (i = 1; i <= this.state.totalPages; i++) {
  //   //   console.log("and here", `${this.url}` + i)
  //   //   fetch(`${this.url}` + i, {
  //   //     method: 'GET',
  //   //     headers: {
  //   //         "Content-Type": "application/json",
  //   //         "Accept": "application/json"
  //   //       },
  //   //     body: JSON.stringify()
  //   //   })
  //   //   .then(resp => {
  //   //   // return resp.json()
  //   //     console.log(resp.json())
  //   //   })

  //   // }
  // }

  render() {
    const { articles } = this.state;
    return (
      <>
        <div className="pagination">
          {[...Array(this.state.pageNumbers)].map((value, index) => (
            <button
              data-testid="page-button"
              key={"page-button-" + (index + 1)}
              onClick={() => this.getResults(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        {articles &&
          articles.map((art) => (
            <li key={art.title} data-testid="result-row">
              {art.title}
            </li>
          ))}
      </>
    );
  }
}

export default Page;
