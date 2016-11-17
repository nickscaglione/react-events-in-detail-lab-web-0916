const React = require('react')

class DelayedButton extends React.Component {
  constructor(props){
    super(props);

    this.timeOut = this.timeOut.bind(this)
  }

  timeOut(event) {
    event.persist()
    window.setTimeout(this.props.onDelayedClick(event), this.props.delay)
  }

  render() {
    return(
      <button onClick={this.timeOut} />
    )
  }

}

module.exports = DelayedButton
