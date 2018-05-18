import { createLogic } from 'redux-logic';

const TESTING = 'TESTING';
const CANCEL_TESTING = 'CANCEL_TESTING';

const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';
const LOGIN_ATTEMPT = 'LOGIN_ATTEMPT';
const LOGIN_FAILED = 'LOGIN_FAILED';
const LOG_OUT = 'LOG_OUT';
const LOGGING_IN = 'LOGGING_IN';
const CANCEL_LOGIN = 'CANCEL_LOGIN';
const OTHER = 'OTHER';

export const testLogic = createLogic({
  type: TESTING,
  cancelType: CANCEL_LOGIN,
  latest: true,

  process({}, dispatch, done) {
    dispatch(start());
    setTimeout(() => {
      console.log('timeout finished')
    }, 1000);
    setTimeout(() => {
      console.log('timeout finished')
    }, 1000);
    setTimeout(() => {
      console.log('timeout finished')
    }, 1000);
    done();
  }
});

const start = () => {
  return {
    type: LOGGING_IN
  }
}

// const logItIn = () => {
//   return {
//     type: LOGIN_FAILED
//   }
// }

// export const cancelLogic = createLogic({
//   type: CANCEL_TESTING,
//   cancelType: OTHER,
//   process({}, dispatch, done) {
//     dispatch(cancelAction());
//     done();
//   }
// })

// const cancelAction = () => {
//   return {
//     type: LOG_OUT
//   }
// }

export default [
  testLogic,
];