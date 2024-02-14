import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';
import {Link} from 'react-router-dom';
import {TrackDto} from '../../../../6_shared/api/generated/game/models/TrackDto.ts';
import {TrackTagDto} from "../../../../6_shared/api/generated/game";
import {Cell, Text} from '../../../../6_shared';
import styles from './styles.module.css';

export type TrackCardProps = {
    onClick: (tag: TrackTagDto) => void
    trackInfo: TrackDto;
}

export const TrackCard = ({trackInfo, onClick}: TrackCardProps) => {
    if (!trackInfo) {return null}
    const {title, tags, publicId} = trackInfo;

    return (
        <div className={styles.card}>
            <Stack direction={'vertical'}>
                <Image src={''}/>
                <div className={styles.description}>
                    <Cell
                        primaryText={
                            <Link to={`/tracks/${publicId}`} >
                                <Text size={'M'} italic>
                                    {title}
                                </Text>
                            </Link>
                        }
                        secondaryText={
                            <div className={styles.tags}>
                                    {tags?.map(tag =>
                                        <button className={styles.tagButton} key={tag.id} onClick={() => onClick(tag)}>
                                                {`#${tag.name}`}
                                        </button>
                                    )
                                    }
                            </div>
                        }
                        image={null}
                    />
                </div>
            </Stack>
        </div>
    );
};