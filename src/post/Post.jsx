import "./post.css"
import img from './post.jpeg'
export default function Post() {
  return (
    <div className="post">
        <img 
        className="postImg"
        src={img} alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Life</span>
                <span className="postCat">Music</span>
            </div>
            <span className="postTitle">Lorem ipsum dolor sit amet consectetur.</span>
            <hr/>
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex tempora excepturi, consequuntur nemo, sed exercitationem ducimus quam animi suscipit assumenda totam inventore eligendi quas pariatur accusantium, optio eveniet rerum voluptate!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex tempora excepturi, consequuntur nemo, sed exercitationem ducimus quam animi suscipit assumenda totam inventore eligendi quas pariatur accusantium, optio eveniet rerum voluptate!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex tempora excepturi, consequuntur nemo, sed exercitationem ducimus quam animi suscipit assumenda totam inventore eligendi quas pariatur accusantium, optio eveniet rerum voluptate!
        </p>
    </div>
  )
}