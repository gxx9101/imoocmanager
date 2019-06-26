import React from 'react'

export default class Child extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentWillMount(){
    console.log("will mount")
  }

  componentDidMount()
  {
    console.log("did mount")
  }
  componentWillReceiveProps(newProps){
    console.log("will props" + newProps)
  }
  shouldComponentUpdate(){
    console.log("should update")
    return true;
  }

  componentWillUpdate(){
    console.log("will update")
  }

  componentDidUpdate(){
    console.log("did update")
  }
  render() {

    return <div>
      <p>这里是子组件，用于测试组件的生命周期</p>
          <p>这个是动态参数{this.props.name}</p>
      <p>{this.state.count}</p>
    </div>
  }
}