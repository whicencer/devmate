import Sidebar from "../../components/layout/Sidebar";
import { Button } from "../../shared/ui/Button";
import Textarea from "../../shared/ui/Textarea";
import styles from "./styles.module.scss";

const Feed = () => {
  return (
    <div className={styles.feed}>
      <Sidebar />
      <div className={styles.feedContent}>
        <div className={styles.feedInput}>
          <Textarea placeholder="Tell your mates something interesting..." />
          <Button>Add post</Button>
        </div>
      </div>
    </div>
  );
};

export default Feed;