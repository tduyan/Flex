import React, { useState } from 'react';

import DiscussionBoard from 'react-discussion-board';

import 'react-discussion-board/dist/index.css';
import Navigation from './Navigation'

const Postboard = () => {
const allPosts = [
    {
    name: 'Jane Doe',
    content: '<p>Hello everyone!</p><p>How are you all doing?</p><p>-Jane</>',
    date: new Date('01 Jan 2020 01:12:00 GMT')
    },
    {
    name: 'John Doe',
    content:
        '<p>Raising say express had chiefly detract demands she. Quiet led own cause three him. Front no party young abode state up. Saved he do fruit woody of to. Met defective are allowance two perceived listening consulted contained. It chicken oh colonel pressed excited suppose to shortly. He improve started no we manners however effects. Prospect humoured mistress to by proposal marianne attended. Simplicity the far admiration preference everything. Up help home head spot an he room in Barton waited twenty always repair in within we do. An delighted offending curiosity my is dashwoods at. Boy prosperous increasing surrounded companions her nor advantages sufficient put. John on time down give meet help as of. Him waiting and correct believe now cottage she another. Vexed six shy yet along learn maids her tiled. Through studied shyness evening bed him winding present. Become excuse hardly on my thirty it wanted. </p>',
    date: new Date('01 Jan 2020 09:12:00 GMT')
    }
]

const [posts, setPosts] = useState(allPosts);

const submitPost = (text) => {
    const curDate = new Date();

    setPosts([
    ...posts,
    {
        name: 'Jane Doe',
        content: text,
        date: curDate
    }
    ])
}

return (
    <>
    <Navigation />
    <div >
        <DiscussionBoard posts={posts} onSubmit={submitPost} />
    </div>
    </>
)
}

export default Postboard;