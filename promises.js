const posts=[
    {title:'Post One', body:'This is post one'},
    {title:'Post Two', body:'This is post two'}
];

function getPosts(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post,index)=>{
            output+=`<li>${post.title}</li>`;
        });
        document.body.innerHTML=output;
    },1000);
}

function createPost(post){
    return new Promise((resolve,reject)=>{
 
    setTimeout(()=>{
        posts.push(post);  
        const error=false;
        if(!error){
            resolve();
        }else{
            reject('Error Creating Post');
        }
    },2000);
           
})
}

// createPost({title:'Post three', body:'This is post three' })
// .then(getPosts)
// .catch(err=>console.log(err))

const Promise1=fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json());
// is below code is correct?
Promise1.then(values => {
    console.log(values); 
});

