import {useState} from "react";
import {PostComponent} from "./Post";
import './App.css'

function App() {

  const [posts,setPosts]=useState([]);

 
  //convert array of object
  const postComponents=posts.map(post => <PostComponent
    name={post.name}
    subtitle={post.subtitle}
    time={post.time}
    image={post.image}
    description={post.description}

  />)

  function addPost(){
    setPosts([...posts,{
       name:"puja",
       subtitle:"10000 followers",
       time: "2m ago",
       image:"https://avatars.githubusercontent.com/u/149191257?v=4",
       description:"What to know to win big? Check out how these folks won $6000 in bounties"
 
 
    
    }])

  }
  
  //then iterate and render here
  //final array
  return (
    <div style={{background:"#dfe6e9", height: "100vh"}}>
      <button onClick={addPost}>Add Post</button>
      <div style={{display:"flex", justifyContent: "center"}}>
        <div>
          {postComponents}
        </div>
       </div>
     </div>
  )
}

export default App;
