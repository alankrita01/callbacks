//  With Async //

function buycar() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('buy a car');
    },1000)
  })
  
}

function planatrip () {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('lets go to manali');
    },2000)
  })
  
}

function reachManali(){
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('reached manali');
    },2000)
  })
}

function gotoFamousMountain(){
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('reached mountain');
    }, 1000);
  })
}

async function fun1(){
  const arg1 = await buycar();
  console.log(arg1);
  
  const arg2 = await planatrip();
  console.log(arg2);

  const arg3 = await reachManali();
  console.log(arg3);

  const arg4 = await gotoFamousMountain();
  console.log(arg4);
}

fun1();







//  With Promises //

/* function buycar() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('buy a car');
    },1000)
  })
  
}

function planatrip () {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('lets go to manali');
    },2000)
  })
  
}

function reachManali(){
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('reached manali');
    },2000)
  })
}

function gotoFamousMountain(){
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve('reached mountain');
    }, 1000);
  })
}

buycar().then((arg1) => {
  console.log(arg1);
  planatrip().then((arg2) => {
    console.log(arg2);
    reachManali().then((arg3) => {
      console.log(arg3);
      gotoFamousMountain().then((arg4) => {
        console.log(arg4);
      })
    })
  })
})


*/




// Without PROMISES  //
/*

function buycar(cb1,cb2,cb3) {
  setTimeout(() => {
    console.log('buy a car');
    cb1(cb2,cb3);
  },1000)
}

function planatrip (cb1,cb2) {
  setTimeout(() => {
    console.log('lets go to manali')
    cb1(cb2);
  },2000);
}

function reachManali(cb){
  setTimeout(() => {
    console.log('reached manali')
    cb();
  }, 1000);
}

function gotoFamousMountain(){
  setTimeout(() => {
    console.log('reached mountain');
  }, 1000);
}

buycar(planatrip,reachManali,gotoFamousMountain);


*/


