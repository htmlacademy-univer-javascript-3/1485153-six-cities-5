import type { Comment } from '../../types/comment';

interface UserCommentProps {
  comment: Comment;
}

export const UserComment = ({ comment }: UserCommentProps) => (
  <li className="reviews__item">
    <div className="reviews__user user">
      <div className="reviews__avatar-wrapper user__avatar-wrapper">
        <img
          className="reviews__avatar user__avatar"
          src={comment.user.avatarUrl}
          width="54"
          height="54"
          alt={comment.user.name}
        />
      </div>
      <span className="reviews__user-name">
        {comment.user.name}
      </span>
    </div>
    <div className="reviews__info">
      <div className="reviews__rating rating">
        <div className="reviews__stars rating__stars">
          <span style={{ width: '80%' }}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <p className="reviews__text">
        {comment.comment}
      </p>
      {/* TODO: дата */}
      <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
    </div>
  </li>
);
