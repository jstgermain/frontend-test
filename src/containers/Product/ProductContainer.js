import React, { Component } from "react";
import axios from 'axios';
import queryString from 'query-string';

class ProductContainer extends Component {
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

    const values = queryString.parse(this.props.location.search);

    axios.get('/products.json')
    .then(result => this.setState({
      data: result.data.documents[values.item],
      isLoading: false
    }))
    .catch(error => this.setState({
      error,
      isLoading: false
    }));
  }

  render() {
    return <div>
      <div>{this.state.data.productNo}</div>
    </div>;
  }
}

export default ProductContainer;
