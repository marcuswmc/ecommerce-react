
import styles from './PostCard.module.css'
import { Icon } from '@iconify/react';

type PostCardType = {
  postImage: string
  categories: string[]
  title: string
  summary: string
  postDate: string
  comments: number
  link: string
}


function PostsCard(props: PostCardType) {

  const { postImage, categories, title, summary, postDate, comments, link } = props

    return (
        <div className={styles.wrapper}>
            <div className={styles.imageWrapper}>
                <span>New</span>
                <img src={postImage} />
            </div>
            <div className={styles.info}>
                <div className={styles.categories}>
                  {categories.map((category) => {
                    return <span>{category}</span>
                  })}
                </div>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.summary}>
                    {summary}
                </p>
                <div className={styles.postMeta}>
                    <div className={styles.metadata}>
                        <Icon icon="mdi:clock-outline" height="2rem" />
                        <span>{postDate}</span>
                    </div>
                    <div className={styles.metadata}>
                        <Icon icon="ooui:chart" height="2rem" />
                        <span>{comments}</span>
                    </div>
                </div>
                <a href={link}>
                    Learn More
                    <Icon icon="material-symbols-light:chevron-forward" height="2.5rem" />
                </a>
            </div>

        </div>
    )
}

export default PostsCard
