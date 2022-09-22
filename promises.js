const posts =[
  {title : 'Post One', body: 'This is post one', createdAt:new Date().getTime()},
  {title : 'Post two', body: 'This is post two', createdAt:new Date().getTime()}
];



function getPosts(){
  
  setInterval(() => {
    let output = '';
    for(let i=0; i<posts.length; i++){
      output +=`<li> ${posts[i].title}- last updated ${(new Date().getTime()- posts[i].createdAt)/1000}s </li>`
    }
    
    document.body.innerHTML=output;
    console.log('get post invoked')
  },1000);
}

function createPost(post) {
  return new Promise((resolve, reject)=>{
    setTimeout(()=> {
     // posts.push({...post,createdAt: new Date().getTime()});
      posts.push(post);
      const error = false;
  
      if(!error){
        resolve();
      }else{
        reject('Error: Somethign went wrong');
      }
    },2000);
  });
}

function deletePost(){
  return new Promise((resolve,reject)=>{

    setTimeout( ()=>{

      if(posts.values !=0){
        resolve(posts.pop());
      }
      else{
        reject('Array is empty now');
      }
    },1000);
  });
}

const promise1 = Promise.resolve('Hello world');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>
setTimeout(resolve,2000,'Goodbye'));

Promise.all([promise1, promise2, promise3]).then(values =>console.log(values));

createPost({title : 'Post Three', body: 'This is post three'})
.then(getPosts)
.catch(err=>console.log(err))

//post 4

createPost({title : 'Post Four', body: 'This is post four'})
.then(() => {
  getPosts();
  deletePost().then( () => {
    getPosts()
  });
})

//1
.then(deletePost)
.catch(err => console.log(err))
//2
.then(deletePost)
.catch(err => console.log(err))
//3
.then(deletePost)
.catch(err => console.log(err));

