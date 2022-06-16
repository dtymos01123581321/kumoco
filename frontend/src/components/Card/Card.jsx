import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.scss';
import noImage from '../../media/img/noimageavailable.png';

class Card extends Component {
  render() {
    const { image, name, email, count } = this.props;

    return (
      <div className="card">

        <div className="card_info-box">
          <div className="card_title">
            <span>Name:</span> {name}
            <br/>
            <span>Email address:</span> {email}
          </div>

          <div className="card_image">
            <img src={image === 'N/A' ? noImage : image} alt="#"/>
          </div>

          <div className="card_description">
            <span>View count:</span> {count}
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  count: PropTypes.number,
};

export default Card;
