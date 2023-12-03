import { ReactElement } from 'react';
import { MdOutlineRssFeed } from 'react-icons/md';
import { AiFillCode } from 'react-icons/ai';
import { BiSolidBookAlt } from 'react-icons/bi';
import styles from '../styles.module.scss';

export enum Links {
  FEED = "Feed",
  LEARN = "Learn",
  PRACTICE = "Practice"
}
interface ILink {
  path: string;
  label: Links;
  icon: ReactElement;
}

export const links: ILink[] = [
  {
    path: '/feed',
    label: Links.FEED,
    icon: <MdOutlineRssFeed size={30} className={styles.linkIcons} />
  },
  {
    path: '/learn',
    label: Links.LEARN,
    icon: <BiSolidBookAlt size={30} className={styles.linkIcons} />
  },
  {
    path: '/practice',
    label: Links.PRACTICE,
    icon: <AiFillCode size={30} className={styles.linkIcons} />
  }
];