import "./sidebar.css"
import side from "./side.jpeg"
export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT US</span>
          <img className="sidebarImg" src={side} alt="" />
          <p className="sidebarPara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad assumenda quasi repellendus iste omnis. Qui Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur quos non, aspernatur saepe iure cupiditate inventore odit deleniti debitis quia.</p>
        </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Anime</li>
          <li className="sidebarListItem">Sports</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Movies</li>
          <li className="sidebarListItem">Food</li>
          <li className="sidebarListItem">Fashion</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook"></i>
          <i className="sidebarIcon fa-brands fa-twitter"></i>
          <i className="sidebarIcon fa-brands fa-pinterest"></i>
          <i className="sidebarIcon fa-brands fa-reddit"></i>
        </div>
      </div>
    </div>
    </>
  )
}
