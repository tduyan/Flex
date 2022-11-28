import React, {  useState, useRef, useEffect } from "react";
import './discPost.css';
import {FaStar} from "react-icons/fa";
import { getAuth, User} from "firebase/auth";
import { addDoc, collection, getDoc, doc, setDoc} from "firebase/firestore";
import db from "../../firebase.js";
import { useAuthState } from 'react-firebase-hooks/auth';
import 'bootstrap/dist/css/bootstrap.css';
import userEvent from "@testing-library/user-event";
import { Box, Flex} from "@chakra-ui/react";



function DiscussionPost(titleID){
    const onCreateComment = async (commentText) => {};
    const onDeleteComment = async (comment) => {};
    const getPostComments = async () => {};
    const [commentText, setText] = useState("");
    const [comments, setComments] = useState([]);
    const [fetchLoading, setFetchLoading] = useState(false);
    const [createLoading, setCreateLoading] = useState(false);

    useEffect(() => {
        getPostComments();
    }, []);

    return (
        <Box bg="white" borderRadius="0px 0px 4px 4px" p={2}>
            <Flex 
            direction='column' pl={10} pr={4} mb={6} fontSize="10pt" width="100%">
            {/* Comments Input*/}
            </Flex>
        </Box>
    )
};

export default DiscussionPost;