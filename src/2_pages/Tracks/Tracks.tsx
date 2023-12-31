import {TrackCard} from "./components/TrackCard";
import styles from './styles.module.css';
import {Text} from '../../6_shared';


// переименовать в список треков
export const Tracks = () => {
    // TracksService.trackControllerPaginate
    return (
        <div>
            <Text size={'XL'} weight={'bold'}>
                Time Trial leaderboards
            </Text>
            <div className={styles.trackCardList}>
                {/*{trackCardList?.map((track, index) =>
                    <TrackCard image={''} key={index} tags={track.tags} trackName={track.title}></TrackCard>
                )}*/}
            </div>
        </div>
    );
};