import { Photo } from '@/actions/photos-get';
import FeedPhoto from './feed-photos';

const Feed = ({ photos }: { photos: Photo[] }) => {
  return (
    <div>
      <FeedPhoto photos={photos} />
    </div>
  );
};

export default Feed;
