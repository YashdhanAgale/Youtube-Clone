import React from "react";

const commentData = [
  {
    name: "Yashodhan Agale",
    text: "Lorem ipsum dolor sit amet.",
  },
  {
    name: "Yashodhannnn Agale",
    text: "Lorem ipsum dolor sit amet.",
  },
  {
    name: "Yashodhan Agale",
    text: "Lorem ipsum dolor sit amet.",
  },
  {
    name: "Yashodhan Agale",
    text: "Lorem ipsum dolor sit amet.",
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded my-2">
      <img
        className="w-12 h-12"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
        alt="user"
      />
      <div className="px-3">
        <p className="font-bold">{name} </p>
        <p>{text} </p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  console.log(comments);
  return comments.map((comment, index) => (
    <Comment data={comment} key={index} />
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold ">Comments</h1>
      {/* <Comment data={commentData[0]} /> */}
      <CommentsList comments={commentData} />;
    </div>
  );
};

export default CommentsContainer;
