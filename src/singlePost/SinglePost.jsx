import "./singlePost.css"
import img from "./singlePost.jpeg"

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
          <img src={img} alt="" className="singlePostImg"/>
          <h1 className="singlePostTitle">
              Lorem ipsum dolor sit amet.
              <div className="singlePostEdit">
              <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
              <i className="singlePostIcon fa-solid fa-trash-can"></i>
              </div>
          </h1>
          <div className="singlePostInfo">
              <span className="singlePostAuthor"> Author : <b>Rimika</b></span>
              <span className="singlePostDate"> 1 Hour Ago</span>
          </div>
          <p className="singlePostDesc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quae quia commodi illo esse nam velit sed ad accusamus. Sint vel dolore consequatur inventore, culpa non voluptas iusto mollitia eos nesciunt modi illum. Quo mollitia et consectetur fugiat maxime sint voluptate saepe ex esse, porro explicabo, quaerat unde reiciendis architecto quis, rerum placeat quibusdam similique cupiditate eum vel totam amet earum laboriosam. Eveniet adipisci tempora omnis facilis soluta minus ex labore magnam ratione similique? Vitae unde harum dolor ea! Autem eaque laboriosam et? Est quaerat modi inventore temporibus asperiores expedita voluptas voluptates quisquam aut, illum pariatur vero, molestias assumenda tempora.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quae quia commodi illo esse nam velit sed ad accusamus. Sint vel dolore consequatur inventore, culpa non voluptas iusto mollitia eos nesciunt modi illum. Quo mollitia et consectetur fugiat maxime sint voluptate saepe ex esse, porro explicabo, quaerat unde reiciendis architecto quis, rerum placeat quibusdam similique cupiditate eum vel totam amet earum laboriosam. Eveniet adipisci tempora omnis facilis soluta minus ex labore magnam ratione similique? Vitae unde harum dolor ea! Autem eaque laboriosam et? Est quaerat modi inventore temporibus asperiores expedita voluptas voluptates quisquam aut, illum pariatur vero, molestias assumenda tempora.
          </p>
      </div>
    </div>
  )
}
