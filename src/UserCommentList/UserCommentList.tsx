import { UserComment } from '../components/UserComment/UserComment';
import { Comment } from '../types/comment';

interface UserCommentListProps {
  comments: Comment[];
}

export const UserCommentList = ({
  comments,
}: UserCommentListProps) => (
  <ul className="reviews__list">
    {comments.map((comment) => (
      <UserComment
        key={comment.id}
        comment={comment}
      />
    ))}
  </ul>
);
