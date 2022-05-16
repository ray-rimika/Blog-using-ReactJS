import "./header.css"
import sakura from "./sakura.jpg"
export default function header() {
  return (
     <div className="header">
          <div className="headerTitles">
              <span className="headerTitlesm">React and Node</span>
              <span className="headerTitleLg">Blog</span>
          </div>
          <img 
          className="headerImg"
          src={sakura} alt="" />
      </div>
  )
}
