import React, { Component } from "react";
import Group from '../Group';

class Dashboard extends Component {
  state = {
    data: [],
    per: 24,
    page: 1,
    total_pages: null
  };

  uppercase = word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  loadData = () => {
    const { per, page, data } = this.state;
    const endpoint = `https://randomuser.me/api/?nat=us&results=${per}&page=${page}`;
    fetch(endpoint)
      .then(response => response.json())
      .then(json => {
        this.setState({
          data: [...data, ...json.results],
          scrolling: false,
          total_pages: json.info.results
        });
      });
  };

  loadMore = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1,
        scrolling: true
      }),
      this.loadData
    );
  };

  componentDidMount() {
    this.loadData();
  }

  render() {
    return (
		
      <div className="section relative pt-20 pb-8 md:pt-16 bg-white dark:bg-gray-800">
        <h2 class="text-2xl leading-normal mb-2 font-bold text-gray-800 dark:text-gray-100 text-center">
                <span class="font-light text-center justify-center">Our</span> Heroes (aka Hanzai Watchers):
            </h2>
        <div className="flex flex-wrap flex-row -mx-4 justify-center">
          
          {this.state.data.map(data => (
            <div className="max-w-full h-auto mx-auto rounded-full bg-gray-60 grayscale" key={data.id.value}>
              <div className="pt-6 text-center">
                <div className="pt-6 text-center">
                  <div className="relative overflow-hidden px-6">
                    <img
                      src={data.picture.large}
                      className="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale"
                      alt=""
                    />
                  </div>
                  <h5 className="text-lg leading-normal font-bold mb-1">
                    {this.uppercase(data.name.first) +
                      " " +
                      this.uppercase(data.name.last)}
                  </h5>
                  <p className="card-text">
                    {data.location.city +
                      ", " +
                      this.uppercase(data.location.state)}
                    <br />
                    <span className="phone">{data.phone}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="btn btn-light btn-block w-50 mx-auto  "
          onClick={e => {
            this.loadMore();
          }}
        >
          Load More Users
        </button>
      </div>


    );
  }
}



export default Dashboard;
