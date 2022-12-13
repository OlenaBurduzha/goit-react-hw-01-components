import PropTipes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList =
    ({friends}) => {
    return <ul className={css.friends}>
   {friends.map(friend =>
    (<li className={css.item} key={friend.id}>
       <span className={friend.isOnline ? css.statusOn : css.statusOff}></span>
       <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
       <p className={css.name}>{friend.name}</p>
    </li>)
    )}
</ul>
    }

FriendList.PropTipes = {
    avatar: PropTipes.string.isRequired,
    name: PropTipes.string.isRequired,
    isOnline: PropTipes.bool.isRequired,
    id: PropTipes.number.isRequired,
}