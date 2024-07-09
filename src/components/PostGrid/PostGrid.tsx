
import PostsCard from './PostCard/PostCard'
import styles from './PostGrid.module.css'

//Usar isto
const posts = [
    {
        "postImage": "https://images.stockcake.com/public/2/f/3/2f3bb53b-19e2-4217-96bb-28a3731b4b2e_large/fashion-blogging-setup-stockcake.jpg",
        "categories": [
            "Google",
            "Trending",
            "New"
        ],
        "title": "Loudest à la Madison #1 (L'integral)",
        "summary": "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        "postDate": "22 July 2024",
        "comments": 10,
        "link": "/blog/link1"
    },
    {
        "postImage": "https://images.stockcake.com/public/3/1/6/31643f64-a861-4f06-82c4-03a854038691_large/fashion-design-studio-stockcake.jpg",
        "categories": [
            "Tech",
            "Innovation",
            "Hot"
        ],
        "title": "Exploring the Future of AI",
        "summary": "Join us as we delve into the advancements and implications of artificial intelligence in our daily lives.",
        "postDate": "15 June 2024",
        "comments": 8,
        "link": "/blog/link2"
    },
    {
        "postImage": "https://images.stockcake.com/public/f/9/6/f966190f-eeb8-43e8-90d9-43d47f9b8f45_large/design-material-selection-stockcake.jpg",
        "categories": [
            "Health",
            "Wellness",
            "Tips"
        ],
        "title": "Top 10 Health Tips for 2024",
        "summary": "Discover the best practices to maintain a healthy lifestyle in the modern age.",
        "postDate": "30 May 2024",
        "comments": 5,
        "link": "/blog/link3"
    }
]

function PostsGrid() {
    return (
        <div className={styles.postGrid}>
          {posts.map((post) => {
              return (
                <PostsCard 
                  postImage={post.postImage}
                  categories={post.categories}
                  title={post.title}
                  summary={post.summary}
                  postDate={post.postDate}
                  comments={post.comments}
                  link={post.link}
                />
              )
          })}            
        </div>
    )
}

export default PostsGrid
