/* eslint-disable react/prop-types */
import ProfileImg from "../assets/start-icon.svg"


const ProfileAvatar = ({width,height,br,imgPadding}) => {
  return (
    <div className={`w-${width} h-${height} bg-white rounded-${br}`}>
        <img className={`p-${imgPadding}`} src={ProfileImg} alt="profileImg" />
    </div>
  )
}

export default ProfileAvatar