import { createLogic } from 'redux-logic';

const TESTING = 'TESTING'
const CANCEL_TESTING = 'CANCEL_TESTING'


//a test of redux-logic to see if it would solve my need for a cancel effect on a timeout, didn't seem to help.
export const testLogic = createLogic({
  type: TESTING,
  cancelType: CANCEL_TESTING,
  process({}, dispatch, done) {
    setTimeout(() => {
      dispatch(timeout())
    }, 3000);
    done();
  }
});

const timeout = () => {
  console.log('timed out')
}

export default [
  testLogic
];