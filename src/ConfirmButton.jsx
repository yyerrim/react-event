import { Component } from "react";

class ConfirmButton extends Component {
  constructor(props) {
    super(props);
    this.state = { isConfirmed: false };
    this.handleConfirm = this.handleConfirm.bind(this);
  }
  handleConfirm() {
    this.setState({ isConfirmed: !this.state.isConfirmed });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleConfirm} disabled={this.state.isConfirmed}>
          {this.state.isConfirmed ? '확인됨' : '확인하기'}
        </button>
        <h1>{this.props.num}</h1>
      </div>
    )
  }
}
export default ConfirmButton;