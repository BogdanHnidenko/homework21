import likeIcon from '.././img/like.png';
import shareIcon from '.././img/share.png';
import commentIcon from '.././img/comment.png';


export function Post(props) {
	return (
		<>
			<div className="post">
				<section className="post__header">
					<div className="header__img">
						<img src={props.authorImage} />
					</div>
					<div className="post__user">
						<p className="post__author">{props.author}</p>
						<p className="post__nickname">{props.nickname}</p>
					</div>
					<div className="post__date">
						<p>{props.date}</p>
					</div>
				</section>
				<section className="post__body">
					<div className="post__text">
						<p>{props.text}</p>
					</div>
					<div className="post__img">
						<img src={props.postImage} />
					</div>
					<div className="post__button">
						<div className="post__like soc">
							<img src={likeIcon} />
							<p>{props.likes}</p>
						</div>
						<div className="post__comment soc">
							<img src={commentIcon} />
							<p>{props.comments}</p>
						</div>
						<div className="post__share soc">
							<img src={shareIcon} />
							<p>{props.shares}</p>
						</div>
					</div>
				</section>
			</div>
		</>
	)
}