import styles from './styles.module.css';
import { Text } from '../../6_shared/';

export const FaqPage = () => {
  return (
    <div className={styles.page}>
      <Text
        align={'center'}
        containerWidth={'full'}
        size={'XL'}
        weight={'bold'}
      >
        Frequently Asked Questions
      </Text>
      <div className={styles.block}>
        <Text size={'XL'} weight={'bold'}>
          How are the scores updated?
        </Text>
        <Text size={'M'}>
          The scores are updated automatically every 15 minutes. We get the data
          from the Pixel Edge Games team’s server, who kindly allow us to access
          the {"game's"} API.
        </Text>
      </div>
      <div className={styles.block}>
        <Text size={'XL'} weight={'bold'}>
          Why is my new time not showing on the site?
        </Text>
        <Text size={'M'}>This may happen for two reasons:</Text>
        <ul>
          <li>
            <Text size={'M'}>
              There is a delay of 15 minutes between the time you get a new
              record and the time it appears on the site. This is to avoid
              overloading the {"game's"} API server with frequent requests.
            </Text>
          </li>
          <li>
            <Text size={'M'}>
              We can only fetch the top 100 records for each track, as per the
              agreement with the game developer. If your rank is lower than the
              100th place, it will not show on the site.
            </Text>
          </li>
        </ul>
      </div>
      <div className={styles.block}>
        <Text size={'XL'} weight={'bold'}>
          What are the {'"Points"'} on the leaderboards as I {"'can't'"} find
          them in-game?
        </Text>
        <Text size={'M'}>
          The in-game leaderboard ranks players based on their time in each
          track. We offer an additional comparison on a global scale that
          considers the player performance in all tracks. This is an exclusive
          feature of this site where points are awarded based on the rank and
          the score for the top score in each track.
        </Text>
      </div>
      <div className={styles.block}>
        <Text size={'XL'} weight={'bold'}>
          Then how are they calculated?
        </Text>
        <Text size={'M'}>
          The leaderboard in this website uses a point system that works for the
          top 100 players only (due to limitation on fetching data from the
          game). The point system is based on two components: position points
          and score points.
        </Text>
        <div>
          <Text size={'M'} weight={'bold'}>
            Position points
          </Text>
          <Text size={'M'}>
            The position points are calculated based on the rank of the player
            in the leaderboard. The higher the rank, the more position points
            the player gets. The position points are calculated using this
            formula:
          </Text>
        </div>
        <div className={styles.expression}>
          <Text align={'center'} containerWidth={'full'} size={'L'} nowrap>
            position_points = base_position_points × (1 — ((player_position — 1)
            / numbers_of_scores)
          </Text>
        </div>
        <Text size={'M'}>
          Where:
          <ul>
            <li>
              <Text size={'M'}>
                {'"base_position_points"'} is a constant value of 10 000.
              </Text>
            </li>
            <li>
              <Text size={'M'}>
                {'"player_position"'} is the rank of the player in the
                leaderboard, from 1 to 100.
              </Text>
            </li>
            <li>
              <Text size={'M'}>
                {'"number_of_scores"'} is the total number of scores in the
                leaderboard, which is 100.
              </Text>
            </li>
          </ul>
        </Text>
        <Text size={'M'}>
          The formula works by subtracting the ratio of the player position to
          the number of scores from 1, and then multiplying it by the base
          position points. This gives a linear decrease in position points as
          the player position increases. For example, if the player position is
          1, then the ratio is 0 and the position points are 10 000. If the
          player position is 50, then the ratio is 0.5 and the position points
          are 5 000. If the player position is n, then the ratio is 1 and the
          position points are 0.
        </Text>
        <div>
          <Text size={'M'} weight={'bold'}>
            Score Points
          </Text>
          <Text size={'M'}>
            The score points are calculated based on the score of the player in
            the leaderboard. The score is the time of the player in milliseconds
            in each track. The lower the score, the better. The score points are
            calculated using this formula:
          </Text>
        </div>
        <div className={styles.expression}>
          <Text align={'center'} containerWidth={'full'} size={'L'} nowrap>
            score_points = base_score_points — (base_score_points × ((best_score
            — playerScore) / (best_score — worst_score))⁴
          </Text>
        </div>
        <Text size={'M'}>
          Where:
          <ul>
            <li>
              <Text size={'M'}>
                {'"base_score_points"'} is a constant value of 10 000.
              </Text>
            </li>
            <li>
              <Text size={'M'}>
                {'"best_score"'} is the lowest time in the leaderboard, which is
                also the best score.
              </Text>
            </li>
            <li>
              <Text size={'M'}>
                {'"worst_score"'} is the highest time in the leaderboard, which
                is also the worst score.
              </Text>
            </li>
            <li>
              <Text size={'M'}>
                {'"player_score"'} is the time of the player in the leaderboard.
                means
              </Text>
            </li>
            <li>
              <Text size={'M'}>
                {'"(x)⁴"'} is rounded to the nearest decimal number with 4
                digits precision.
              </Text>
            </li>
          </ul>
        </Text>
        <Text size={'M'}>
          The formula works by subtracting from 10 000 a percentage that
          represents how far away the player time is from the best time relative
          to the range of times. This is done by normalizing the time difference
          between the best and the worst times in the list. It is a way of
          scaling the score points to a range between 0 and 10 000, where 0
          means the worst score and 10 000 means the best time. We subtract the
          player time from the best time, which gives us the positive difference
          between them. the larger this difference, the better the player time
          is relative to the best time. Then we divide this difference by the
          difference between the best and the worst times, which gives us a
          ratio between 0 and 1. the larger this ratio, the smaller the gap
          between the player time and the best time is relative to the overall
          range of times. If we multiply this ratio by 100, which gives us a
          percentage between 0 and 100. The larger this percentage, the higher
          the score points are.
        </Text>
        <div>
          <Text size={'M'} weight={'bold'}>
            Total Points
          </Text>
          <Text size={'M'}>
            The total points are calculated by adding up the position points and
            the score points. The total points are used to rank the players in
            the leaderboard, with higher total points meaning higher rank. The
            total points are calculated using this formula:
          </Text>
        </div>
        <div className={styles.expression}>
          <Text align={'center'} containerWidth={'full'} size={'L'} nowrap>
            total_points = (position_points + score_points)
          </Text>
        </div>
      </div>
    </div>
  );
};
