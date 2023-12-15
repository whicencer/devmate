import styles from "./ProfilePicture.module.scss";
import {FaUser} from "react-icons/fa";

interface ProfilePictureProps {
  size: number;
}

export const ProfilePicture = ({size = 20}: ProfilePictureProps) => {
  return (
    <div className={styles.profilePic} style={{ width: size*2, height: size*2 }}><FaUser size={size} /></div>
  );
}