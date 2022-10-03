import { useState, useEffect } from 'react';

import styles from './TimeTracker.module.css';

import Activity from './Activity';

import profilePhoto from '../images/image-jeremy.png';
import iconWork from '../images/icon-work.svg';
import iconPlay from '../images/icon-play.svg';
import iconStudy from '../images/icon-study.svg';
import iconExercise from '../images/icon-exercise.svg';
import iconSocial from '../images/icon-social.svg';
import iconSelfCare from '../images/icon-self-care.svg';

import data from '../data/data.json';

const TimeTracker = () => {
  const titles = ["Work", "Play", "Study", "Exercise", "Social", "Self Care"];
  const previousText = { daily: "Yesterday", weekly: "Last Week", monthly: "Last Month" };
  const colors = ["hsl(15, 100%, 70%)", "hsl(195, 74%, 62%)", "hsl(348, 100%, 68%)", "hsl(145, 58%, 55%)", "hsl(264, 64%, 52%)", "hsl(43, 84%, 65%)"];
  const icons = [iconWork, iconPlay, iconStudy, iconExercise, iconSocial, iconSelfCare];

  let daily = data.map((tf) => tf.timeframes.daily);
  let weekly = data.map((tf) => tf.timeframes.weekly);
  let monthly = data.map((tf) => tf.timeframes.monthly);

  type tf = {
    current: number;
    previous: number;
  }

  let [timeframe, setTimeframe] = useState<string>("daily");
  let [currentNumbers, setCurrentNumbers] = useState<tf[]>(daily);

  let activities = data.map((activity, index) => {
    return <Activity
      icon={icons[index]}
      color={colors[index]}
      title={titles[index]}
      current={currentNumbers[index].current}
      previous={currentNumbers[index].previous}
      previousText={previousText[timeframe as keyof typeof previousText]}
      key={index}
    />
  });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    let { name } = e.target as typeof e.target & { name: string };
    setTimeframe(name);
    setCurrentNumbers(eval(name)); //convert string into variable name
  }

  return (
    <main className={styles.main}>

      <div className={`${styles.profile}`}>

        <div className={styles.profileDetails}>
          <div className={styles.profilePhoto}>
            <img src={profilePhoto} alt="Jeremy" />
          </div>
          <div className={styles.profileText}>
            <div className={styles.reportText}>Report for</div>
            <div className={styles.nameText}>Jeremy Robson</div>
          </div>
        </div>

        <div className={styles.profileButtons}>
          <button
            onClick={handleClick}
            name="daily"
            className={timeframe === "daily" ? styles.active : ""}>
            Daily
          </button>
          <button
            onClick={handleClick}
            name="weekly"
            className={timeframe === "weekly" ? styles.active : ""}>
            Weekly
          </button>
          <button
            onClick={handleClick}
            name="monthly"
            className={timeframe === "monthly" ? styles.active : ""}>
            Monthly
          </button>
        </div>
      </div>

      <div className={styles.activities}>
        {activities}
      </div>

    </main>
  )
}

export default TimeTracker;