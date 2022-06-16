import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './Users.scss';
import * as usersActions from '../../utilities/redux/actions/usersActions';
import Card from "../../components/Card/Card";
import Input from '../../components/Input/Input';
import Icon from '../../components/Icon/Icon';
import Button from "../../components/Button/Button";

class Users extends Component {
  state = {
    searchValue: '',
    currentUser: 0,
    users: [],
  };

  componentDidMount() {
    const { fetchUsers } = this.props;
    fetchUsers(10);
  }

  static getDerivedStateFromProps(props, state) {
    if (state.users !== props.users) {
      return {
        users: props.users,
      };
    }
    return null;
  }

  onSelect = value => {
    const { updateUser } = this.props;
    updateUser(value);

    this.setState({
      searchValue: ''
    });
  };

  onSearch = (value) => {
    this.setState({
      searchValue: value
    });

    const { searchUser, users } = this.props;
    searchUser(value, users);
  };

  render() {
    const { searchValue } = this.state;
    const { users, user } = this.props;

    const currentUser = users && users.find( f => f.name.last === user )

    return (
      <div className="content users">
        <form className="search-documents">
          <Input
              className="search-input"
              label="Filter:"
              type="text"
              value={searchValue}
              placeholder="Write here the name of the user"
              onChange={this.onSearch}
          />
          <Icon icon="search" className="search-bt" />
        </form>
        <div className="users_pagination">
          {
            users && users.map( (user, index) =>
              <Button key={index}
                      size="s"
                      color="green"
                      text={index + 1}
                      type="button"
                      onClick={() => this.onSelect(user.name.last)} />
            )
          }
        </div>

        <div className="card-list">
          { currentUser ? <Card
            image={currentUser.picture.large}
            name={`${currentUser.name.title} ${currentUser.name.first} ${currentUser.name.last}`}
            email={currentUser.email}
            count={currentUser.count || 1}
          /> : <div className="users-card_title">User not found</div> }
        </div>
      </div>
    );
  }
}

Users.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
  searchUser: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = ({ users: { users, user } }) => ({
  users,
  user,
});

const mapDispatchToProps = {
  ...usersActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
