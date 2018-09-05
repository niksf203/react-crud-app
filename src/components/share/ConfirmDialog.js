import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { closeConfirmDialog } from '../../actions/confirmDialog'

class ConfirmDialog extends Component {
  render() {
    const {
      open,
      close,
      cb,
      data
    } = this.props
    return (
      <Dialog open={open}>
        <DialogTitle id="alert-dialog-title">{data.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {data.content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={close}>No</Button>
          <Button
            variant="contained"
            color={!data.delete ? 'primary' : 'secondary'}
            onClick={() => cb(close())}
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}

const mapStateToProps = (state) => ({
  open: state.confirmDialog.open,
  cb: state.confirmDialog.cb,
  data: state.confirmDialog.data
})

const mapDispatchToProps = (dispatch) => ({
  close: () => dispatch(closeConfirmDialog())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmDialog)
