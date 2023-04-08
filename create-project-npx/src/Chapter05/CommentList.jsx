import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "Jeongyongs",
        comment: "This is my first component"
    },
    {
        name: "Front-end",
        comment: "React"
    },
    {
        name: "Back-end",
        comment: "Spring"
    }
]

function CommentList(props) {
    return (
        <div>
            {
                comments.map((comment) => {
                    return (
                        <Comment name={comment.name} comment={comment.comment}/>
                    );
                })
            }
        </div>
    );
}

export default CommentList;
