import Skeleton from 'react-loading-skeleton';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import { TrackTagDto } from '../../../../6_shared/api/generated/game';
import { TrackDto } from '../../../../6_shared/api/generated/game';
import { Cell, Text } from '../../../../6_shared';
import styles from './styles.module.css';

export type TrackCardProps = {
  onClick: (tag: TrackTagDto) => void;
  trackInfo: TrackDto;
};

export const TrackCard = ({ trackInfo, onClick }: TrackCardProps) => {
  if (!trackInfo) {
    return null;
  }
  const { title, tags, publicId, preview } = trackInfo;

  return (
    <div className={styles.card}>
      <Stack direction={'vertical'}>
        <Image src={preview?.s3Location} />
        <div className={styles.description}>
          <Cell
            primaryText={
              <Link to={`/tracks/${publicId}`}>
                <Text size={'M'} italic>
                  {title}
                </Text>
              </Link>
            }
            secondaryText={
              <div className={styles.tags}>
                {tags?.map((tag) => (
                  <button
                    className={styles.tagButton}
                    key={tag.id}
                    onClick={() => onClick(tag)}
                  >
                    {`#${tag.name}`}
                  </button>
                ))}
              </div>
            }
            image={null}
          />
        </div>
      </Stack>
    </div>
  );
};

export const TrackCardSkeleton = () => {
  return (
    <div className={styles.card}>
      <Stack direction={'vertical'}>
        <Skeleton
          className={styles.skeletonImage}
          containerClassName={styles.skeletonContainer}
          height={'200px'}
        />
        <div className={styles.description}>
          <Stack direction={'vertical'}>
            <Skeleton height={20} />
            <Skeleton height={16} width={'30%'} />
          </Stack>
        </div>
      </Stack>
    </div>
  );
};
