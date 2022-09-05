const posts =[
  {title : 'Post One', body: 'This is post one', createdAt:new Date().getTime()},
  {title : 'Post two', body: 'This is post two', createdAt:new Date().getTime()}
];

/*function getPosts(){
  setTimeout(()=> {
    let output = '';
    posts.forEach((post, index)=>{
      output +=`<li>${post.title} ${post.timestamp} </li>`;
    });
    document.body.innerHTML=output;
  },1000);
}*/

let intervalId =0;

function getPosts(){
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    let output = '';
    for(let i=0; i<posts.length; i++){
      output +=`<li> ${posts[i].title}- last updated ${(new Date().getTime()- posts[i].createdAt)/1000}s </li>`
    }
    console.log('timer running id=',intervalId)
    document.body.innerHTML=output;
  },1000);
 
}

function createPost(post,Callback) {
  setTimeout(()=> {
    posts.push({...post,createdAt: new Date().getTime()});
    Callback();
  },2000);
}

function create4thPost(post,Callback) {
  setTimeout(()=> {
    posts.push({...post,createdAt: new Date().getTime()});
    Callback();
  },6000);
}


//getPost()
createPost({title: 'Post Three' , body:'This is post three'}, getPosts);

create4thPost({title: 'Post Four' ,body: 'This is Post Four' },getPosts);

var timer;
var count = 0;
function lastEditedInSecondsAgo(){
  count=0;
  clearInterval(timer)
  timer = setInterval(() =>{
    count++;
    console.log(count);
  },5000);
}