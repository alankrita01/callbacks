console.log('person1: shows ticket');
console.log('person2: shows ticket');

/*const promiseWifeBringingTicks =  new Promise((resolve , reject) => {
  setTimeout(() => {
    resolve('ticket');
  },3000)
});

const getPopcorn = promiseWifeBringingTicks.then((t) => {
  console.log('wife: I have the tics');
  console.log('husband we should go in');
  console.log('wife: no I am hungry');
  return new Promise((resolve, reject) => resolve(`${t} popcorn`));
});

const getButter = getPopcorn.then((t) => {
  console.log('husband I got some popcorn');
  console.log('husband: we should go in');
  console.log('wife: I need butter on my popcorn');
  return new Promise((resolve,reject) => (`${t} butter`))
});

getButter.then((t) => console.log(t)); */

const preMovie = async () => {

  const promiseWifeBringingTicks = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'),3000);
  });

  const getPopcorn = new Promise((resolve,reject) => resolve(`popcorn`));
  const addButter = new Promise((resolve,reject) => resolve(`butter`));
  const addColdDrink = new Promise((resolve,reject) => resolve(`coldDrink`));

  const getCandy = new Promise((resolve,reject) => resolve(`candy`));
  const getWater = new Promise((resolve,reject) => resolve(`water`));

  let ticket = await promiseWifeBringingTicks;

  console.log(`wife: I have the ${ticket}`);
  console.log('husband we should go in');
  console.log('wife: no I am hungry');
  

  let popcorn = await getPopcorn;

  console.log(`husband I got some ${popcorn}`);
  console.log('husband: we should go in');
  console.log('wife: I need butter on my popcorn');


  let butter = await addButter;

  console.log(`husband : I got some ${butter} on popcorn`);
  console.log(`husband : anything else darling?`);
  console.log(`wife : lets got we are getting late`);
  console.log(`husband : thank you for the reminder *grains*`);


  let coldDrink = await addColdDrink;

  console.log(`husband : Do you want ${coldDrink} with popcorn`);
  console.log(`wife : yes baby, great idea`);

  //
  let [candy, water] = await Promise.all([getCandy,getWater])
  console.log(`${candy},${water}`);


  
  return ticket;
 

}

preMovie().then((m) => console.log(`person3 : shows ${m}`));


console.log('person4 : shows ticket');
console.log('person5 : shows ticket');

const preMovieB = async () => {

  const promiseWifeBringingTicksB = new Promise((resolve, reject) => {
    setTimeout(() => reject('ticket'),3000);
  });

  let ticketB
  try {
    ticketB = await promiseWifeBringingTicksB;
  }catch(e){
    ticketB = 'sad face';
  }

  return ticketB;

}
preMovieB().then((m) => console.log(`person3 : shows ${m}`));