import { useRouter } from 'next/router'
import { useState } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import moment from 'moment'


const {BLOG_URL, CONTENT_API_KEY} = process.env

async function getPost(slug: string) {
    const res = await fetch(`${BLOG_URL}/ghost/api/content/posts/slug/${slug}?key=${CONTENT_API_KEY}&fields=title,html,created_at`).then(res => res.json())

    const posts = res.posts

    return posts[0]
}
export const getStaticProps = async ({ params }) => {
    const post = await getPost(params.slug)
    return {
      props: { post },
      revalidate: 30
    }
}
export const getStaticPaths = () => {
    return {
        paths: [],
        fallback: true
    }
}
type Post = {
    title: string
    html: string
    slug: string
    updated_at: number
}
const Post: React.FC<{post: Post}> = props => {
    const { post } = props
    const [enableLaodComments, setEnableLaodComments] = useState<boolean>(true)
    const router = useRouter()


    if(router.isFallback) {
        return (
            <div className='loading_div'>
                <h1 className='loading_text mx-3'>Loading...</h1>
                <Spinner animation="border" />
            </div>
        )
    }

    function loadComments() {
        setEnableLaodComments(false)
        ;(window as any).disqus_config = function () {
            this.page.url = window.location.href;
            this.page.identifier = post.slug; 
        };

        const script = document.createElement('script');
        script.src = 'https://jakes-3.disqus.com/embed.js';
        script.setAttribute('data-timestamp', Date.now().toString());

        document.body.appendChild(script)
    }
    return (
        <>
            <div className='slug_post_div'>
                <h1 className='slug_post_title'>{post.title}</h1>
                <div dangerouslySetInnerHTML={{__html: post.html}} className='slug_post_html'></div>
                {enableLaodComments && (<p onClick={loadComments} className='load_comments_btn'>Load Comments</p>)}
            </div>
            <div id="disqus_thread"></div>
        </>
    )
}
export default Post