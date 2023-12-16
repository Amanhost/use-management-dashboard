import { Component } from 'react';

import UserService from '../services/user.service';
import EventBus from '../common/EventBus';

type Props = {};

type State = {
  content: string;
};

export default class BoardAdmin extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      content: '',
    };
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>{this.state.content}</h3>
        </header>
      </div>
    );
  }
}
