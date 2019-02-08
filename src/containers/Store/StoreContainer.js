import React, { Component } from "react";
import axios from 'axios';

class StoreContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    axios.get('/products.json')
      .then(result => this.setState({
        data: result.data.documents,
        isLoading: false
      }))
      .catch(error => this.setState({
        error,
        isLoading: false
      }));
  }

  addDefaultSrc(ev){
    ev.target.src = 'https://stuff.fendergarage.com/images/9/B/Z/fcwd-taxonomy-electric-guitar-custom-shop@2x.png'
  }

  render() {
    const guitars = this.state.data.map((el, index) => {
      return <div key={index}>
        <a href={'/product/?item=' + index}><img onError={this.addDefaultSrc} src={el.images[0]} /></a>
        <p>productType - {el.index}</p>
      </div>
    });

    return <div>
      <div>{guitars}</div>
    </div>;
  }
}

export default StoreContainer;
