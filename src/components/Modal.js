import React from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

class SimpleModal extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {

    return (
      <div>
        <Button onClick={this.handleOpen}>Open Modal</Button>
        <Modal
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={{width:'300px', height:'300px', background: 'green'}}>
            <p>aerfsdlifasdfsadulhfisadfgasdfgsadf;isdfishdfisodhfsdf</p>
            <button onClick={this.handleClose}>click</button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default SimpleModal;