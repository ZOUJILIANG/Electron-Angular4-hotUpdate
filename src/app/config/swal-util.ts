import Swal from 'sweetalert2';

export class SwalUtil {

  static swalSuccess(msg) {
    return new Promise(resolve => {
      Swal({
        text: msg,
        type: 'success',
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(() => {
        resolve()
      }, () => {
      });
    });
  }

  static swalError(msg) {
    return new Promise(resolve => {
      Swal({
        text: msg,
        type: 'error',
        confirmButtonText: '确定',
      }).then(() => {
        resolve()
      }, () => {
      })
    });
  }

  static swalTitleError(msg) {
    return new Promise(resolve => {
      Swal({
        title:'作业保存失败',
        text: msg,
        type: 'error',
        confirmButtonText: '确定',
      }).then(() => {
        resolve()
      }, () => {
      })
    });
  }

  static swalWarning(msg) {
    return new Promise(resolve => {
      Swal({
        text: msg,
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(() => {
        resolve()
      }, () => {
      });
    });
  }

  static swalMsg(msg) {
    return new Promise(resolve => {
      Swal({
        title:'作业被打回原因',
        text: msg,
        type: 'question',
        width : '600px',
        animation: false,
        padding : 20,
        confirmButtonText: '确定',
      }).then(() => {
        resolve()
      }, () => {
      });
    });
  }
}
