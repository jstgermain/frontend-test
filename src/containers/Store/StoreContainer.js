import React, { Component } from 'react';
import axios from 'axios';
import { Card } from '../../components/Molecules';

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
        <a href={'/product/?item=' + index}>
          <Card image={el.images[0]} defaultImage={this.addDefaultSrc} />
        </a>
      </div>
    });

    return <div>
      <div className="flex-parent flex-wrap-wrap justify-content-center">{guitars}</div>
    </div>;
  }
}

export default StoreContainer;
