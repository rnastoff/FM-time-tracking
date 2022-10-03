
import styles from './Activity.module.css';

import iconEllipses from '../images/icon-ellipsis.svg';

interface Props {
  icon: string;
  color: string;
  title: string;
  current: number;
  previous: number;
  previousText: string;
}

const Activity = (props: Props) => {


  return (
    <div className={styles.activity} style={{ backgroundColor: props.color }} >
      <div className={styles.iconHolder}>
        <img src={props.icon} alt="work icon" className={styles.iconWork} />
      </div>

      <div className={styles.activityDetails}>
        <div className={styles.titleAndButton}>
          <div className={styles.title}>{props.title}</div>
          <img src={iconEllipses} alt="button" className={styles.iconEllipses} />
        </div>

        <div className={styles.hoursAndLastWeek}>
          <div className={styles.hours}>{props.current}hrs</div>
          <div className={styles.lastWeek}>{props.previousText} - {props.previous}hrs</div>
        </div>

      </div>

    </div>
  )
}

export default Activity;