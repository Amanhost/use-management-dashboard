import { Component } from 'react';

import UserService from '../services/user.service';
import './main.css';

type Props = {};

type State = {
  content: Record<string, any>;
  columnCount: number;
};

export default class Home extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      content: {},
      columnCount: 1,
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      (response) => {
        this.setState({
          content: response.data,
        });
      },
      (error) => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString(),
        });
      },
    );
  }
  render() {
    console.log('this.state.content', this.state.content.data);

    return (
      <div>
        <table id="customers">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Value</th>
              <th>year </th>
            </tr>
          </thead>
          <tbody>
            {this.state.content.data?.map((a: any) => (
              <tr>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>{a.pantone_value}</td>
                <td>{a.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      // <div className="container">content
      //   <header className="jumbotron">
      // <h3>{this.state.content}</h3>
      //   </header>
      // </div>
    );
  }
}
