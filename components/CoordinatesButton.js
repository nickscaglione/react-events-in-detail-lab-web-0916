const React = require('react')

class CoordinatesButton extends React.Component {
  constructor(props){
    super(props);

    this.createArray = this.createArray.bind(this)
  }

  createArray(event) {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render() {
    return(
      <button onClick={this.createArray} />
    )
  }

}

module.exports = CoordinatesButton
