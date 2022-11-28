import React, { useState } from 'react';
import { getAuth } from "firebase/auth";
import DiscussionBoard from 'react-discussion-board';
import { useAuthState } from 'react-firebase-hooks/auth';
import 'react-discussion-board/dist/index.css';
import Navigation from './Navigation'
import { addDoc, collection, getDoc, doc, setDoc, where, query, getDocs, onSnapshot} from "firebase/firestore";
import {db, logout} from "./firebase.js";
import { useEffect } from 'react';
const Postboard = () => {
const allPosts = [
]

const auth = getAuth();
const [user] = useAuthState(auth);
const [posts, setPosts] = useState(allPosts);

async function getPosts(){
    const docSnap = await getDocs(collection(db, "posts"));

    docSnap.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        console.log([doc.data()]);
        var docDate = new Date(doc.data().date);
        var docName = doc.data().name;
        var docContent = doc.data().content;
        console.log(new Date(doc.data().date));
        setPosts(posts => [
            ...posts,{
                name: docName,
                content: docContent,
                date: docDate
            }
        ]);
    });
}

async function addPosts(text, curDate){
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "posts"), {
        name: user.uid,
        content: text,
        date: curDate.toString()
    });
    console.log("Document written with ID: ", docRef.id);
}

useEffect(() => {
    getPosts();
}, []);



const submitPost = (text) => {
    const curDate = new Date();
    console.log(curDate);
    addPosts(text, curDate);
    setPosts(posts => [
    ...posts,
    {
        name: user.uid,
        content: text,
        date: curDate.toString()
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