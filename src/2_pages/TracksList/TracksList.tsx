import {keepPreviousData, useQuery} from '@tanstack/react-query';
import {useState} from 'react';
import {TracksService, TrackTagDto} from '../../6_shared/api/generated/game';
import {CustomPagination} from "../../6_shared/components/CustomPagination";
import { TrackCardSkeleton, TrackCard } from './components/TrackCard';
import styles from './styles.module.css'
import { Text } from '../../6_shared';


const Q_KEY = 'trackControllerPaginate';
export const TracksList = () => {
  const [page, setPage] = useState(1);
  const [tagsIds, setTagsIds] = useState<number[] | null>(null);
    const [filterTags, setFilterTags] = useState<TrackTagDto[] | null>(null)
    const addTagToFilter = (tagId: number) => {
        const newTagsIds: number[] = !tagsIds ? [] : [...tagsIds];
        if (newTagsIds?.indexOf(tagId) !== -1) {
            return
        }
        newTagsIds.push(tagId);
        setTagsIds(newTagsIds);
    }
    const addTagNameToFilter = (tag: TrackTagDto) => {
        const newFilterTags: TrackTagDto[] = !filterTags ? [] : [...filterTags];
        if (newFilterTags?.indexOf(tag) !== -1) {
            return
        }
        newFilterTags.push(tag);
        setFilterTags(newFilterTags);
    }
    const removeTagFromFilter = (id: number) => {
        if (filterTags === null) {
            return null;
        }
        const deletedElement = filterTags[id];
        const newTagsNamesArray = filterTags?.filter((tag) => tag !== deletedElement);
        setFilterTags(newTagsNamesArray);
    }

  const { data, isLoading } = useQuery({
    queryKey: [Q_KEY, page, tagsIds],
    queryFn: () =>
      TracksService.trackControllerPaginate(
        page,
        8,
        null,
        null,
        null,
        null,
        tagsIds,
        null,
      ),
      placeholderData: keepPreviousData,
  });

  if (!data) {
    return null;
  }
  const { items, meta } = data;

  return (
    <div>
      <Text size={'XL'} weight={'bold'}>
        Time Trial leaderboards
      </Text>
      <div className={styles.tagsList}>
                {
                    filterTags && filterTags.map(({name, id}, index) =>
                        <button className={styles.tagButton} key={id} onClick={() => removeTagFromFilter(index)}>
                            <Text color={'gray'} size={'S'} italic>
                                {`#${name}`}
                            </Text>
                        </button>
                    )
                }
      </div>
      <div className={styles.trackCardList}>
        {isLoading
          ? Array(8)
              .fill(null)
              .map((_, index) => <TrackCardSkeleton key={index} />)
          : items.map((trackInfo, index) => (
              <TrackCard
                onClick={(tag) => {
                    addTagToFilter(tag.id);
                    addTagNameToFilter(tag);
                }}
                key={index}
                trackInfo={trackInfo}
              />
            ))}
      </div>
        <div className={styles.pagination}>
        {
            meta.totalPages > 1 && <CustomPagination
                setDataPage={(currentPage) => setPage(currentPage)}
                totalPages={data?.meta.totalPages || 0}
            />
        }
        </div>
    </div>
  );
};
