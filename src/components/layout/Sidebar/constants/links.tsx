import { ReactElement } from "react";
import { MdOutlineRssFeed } from "react-icons/md";
import { AiFillCode, AiFillQuestionCircle } from "react-icons/ai";
import { BiSolidBookAlt } from "react-icons/bi";
import styles from "../styles.module.scss";

interface ILink {
  path: string;
  label: string;
  icon: ReactElement;
}

export const links: ILink[] = [
  {
    path: "/feed",
    label: "Feed",
    icon: <MdOutlineRssFeed size={30} className={styles.linkIcons} />
  },
  {
    path: "/learn",
    label: "Learn",
    icon: <BiSolidBookAlt size={30} className={styles.linkIcons} />
  },
  {
    path: "/practice",
    label: "Practice",
    icon: <AiFillCode size={30} className={styles.linkIcons} />
  },
  {
    path: "/ask",
    label: "Ask a question",
    icon: <AiFillQuestionCircle size={30} className={styles.linkIcons} />
  },
];