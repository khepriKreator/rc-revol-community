import {TrackCard} from "./components/TrackCard";
import {Tracks} from "../../6_shared/api/types";
import styles from './styles.module.css';
import {Text} from '../../6_shared';

export type TimeTrialLeaderboardsProps = {
    trackCardList: Tracks | null;
}

export const TimeTrialLeaderboards = ({trackCardList}: TimeTrialLeaderboardsProps) => {
    return (
        <div>
            <Text size={'XL'} weight={'bold'}>
                Time Trial leaderboards
            </Text>
            <div className={styles.trackCardList}>
                {trackCardList?.map((track, index) =>
                    <TrackCard image={''} key={index} tags={track.tags} trackName={track.title}></TrackCard>
                )}
            </div>
        </div>
    );
};