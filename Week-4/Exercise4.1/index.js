
const getNumber = function () {
  return parseInt(Math.random() * 100, 10)
}

function CustomPromise(_executor) {
  let onResolve, onReject, onFinally;
  let currentState = '';
  let finallyCalled = false;

  this.then = function (callBack) {
    onResolve = callBack;
    return this
  }
  this.catch = function (callBack) {
    onReject = callBack;
    return this
  }
  this.finally = function (callBack) {
    onFinally = callBack;
    finallyCalled = true
    currentState = 'stopped'
  }

  function resolve(_value) {
    if (this.currentState === 'pending') {
      return
    }
    if (typeof onResolve == 'function') {
      this.currentState = 'fulfilled'
      onResolve(_value)
    }
    if (finallyCalled === true) {
      onFinally()
    }
  }

  function reject(_value) {
    if (this.currentState === 'pending') {
      return
    }
    if (typeof onReject == 'function') {
      this.currentState = 'rejected'
      onReject(_value)
    }
    if (finallyCalled === true) {
      onFinally()
    }
  }

  _executor(resolve, reject)
}

const myPromise = new CustomPromise((resolve, reject) => {
  const newGetNumber = getNumber()
  console.log('new Get Number ->> ', newGetNumber)
  setTimeout(() => {
    if (newGetNumber % 5 !== 0) {
      resolve(newGetNumber)
    } else {
      reject(newGetNumber)
    }
  }, 100);
})


myPromise
  .then((result) => {
    console.log(`Resolved With Num: ${result}`)
  })
  .catch((err) => {
    console.log(`Rejected with num :${err}`)
  })
  .finally(() => console.log(`Finally Called`));


/* 
new Get Number ->>  90
Rejected with num :90
Finally Called
*/

/* 
new Get Number ->>  17
Resolved With Num: 17
Finally Called
*/