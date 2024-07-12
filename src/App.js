import logo from './logo.svg';
import './App.css';

import { Component } from "react";
import ConfirmButton from './ConfirmButton';

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      isToggleOn: !this.state.isToggleOn
    });
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? '켜짐' : '꺼짐'}
      </button>
    );
  }
}

// function Toggle(props) {
//   const [isToggleOn, setIsToggleOn] = useState(true);
//   const handleClick = () => {
//     setIsToggleOn(!isToggleOn);
//   }
//   return (
//     <button onClick={handleClick}>
//       {isToggleOn ? '켜짐' : '꺼짐'}
//     </button>
//   )
// }

function MyButton(props) {
  const handleInsert = (title, content) => {
    console.log(`입력: ${title}, ${content}`)
  };
  const handleDelete = (number) => {
    console.log(`삭제: ${number}`)
  };

  const handleClick = (value) => {
    alert('클릭' + value);
  };

  return (
    <div>
      <button onClick={() => handleInsert("제목", "내용")}>입력</button>
      <button onClick={() => handleDelete(10)}>삭제</button>

      <button onClick={handleClick}>버튼</button>
      <button onClick={() => { handleClick(1000); }}>버튼</button>
      <button onClick={handleClick.bind(this, 2000)}>버튼</button>
    </div>
  );
}

// function MyButton(props) {
//   const btns = [1, 2, 3, 4];
//   const handleEvent = (event) => {
//     console.log(event.target.innerHTML);
//   };
//   return (
//     <div>
//       <div>
//         {
//           btns.map((btn) => {
//             return (
//               <button onClick={(event) => handleEvent(event)}>{btn}</button>
//             )
//           })
//         }
//       </div>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <Toggle />
      <MyButton />
      <ConfirmButton />
    </div>
  );
}

export default App;
