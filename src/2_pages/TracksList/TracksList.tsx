import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { TrackCardSkeleton, TrackCard } from './components/TrackCard';
import { TracksService } from '../../6_shared/api/generated/game';
import styles from './styles.module.css';
import { Text } from '../../6_shared';

const Q_KEY = 'trackControllerPaginate';
export const TracksList = () => {
  const [page, setPage] = useState(1);
  /*const [tagsIds, setTagsIds] = useState<number[] | null>(null);
    const [tagsNames, setTagsNames] = useState<string[] | null>(null)
    const addTagToFilter = (tagId: number) => {
        const newTagsIds: number[] = !tagsIds ? [] : tagsIds;
        if (newTagsIds?.indexOf(tagId) !== -1) {
            return
        }
        newTagsIds.push(tagId);
        setTagsIds(newTagsIds);
    }
    const addTagName = (tagName: string) => {
        const newTagsNames: string[] = !tagsNames ? [] : tagsNames;
        if (newTagsNames?.indexOf(tagName) !== -1) {
            return
        }
        newTagsNames.push(tagName);
        setTagsNames(newTagsNames);
    }*/
  const { data, isLoading } = useQuery({
    queryKey: [Q_KEY, page],
    queryFn: () =>
      TracksService.trackControllerPaginate(
        page,
        8,
        null,
        null,
        null,
        null,
        null,
        null,
      ),
  });
  if (!data) {
    return null;
  }

  return (
    <div>
      <Text size={'XL'} weight={'bold'}>
        Time Trial leaderboards
      </Text>
      {/*<div className={styles.tagsList}>
                {
                    tagsNames && tagsNames.map((name, index) => 
                        <button className={styles.tagButton} key={index} onClick={() => console.log('click')}>
                            <Text color={'gray'} size={'S'} italic>
                                {`#${name}`}
                            </Text>
                        </button>
                    )
                }
            </div>*/}
      <div className={styles.trackCardList}>
        {isLoading
          ? Array(8)
              .fill(null)
              .map((_, index) => <TrackCardSkeleton key={index} />)
          : data.items.map((trackInfo, index) => (
              <TrackCard
                key={index}
                onClick={(tag) => console.log(tag)}
                trackInfo={trackInfo}
              />
            ))}
      </div>
    </div>
  );
};
