import React from "react";

const VideoCard = ({ info }) => {
  console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, thumbnails, title } = snippet;
  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <ul>
      <img className="rounded-lg" src={thumbnails.medium.url} alt="pic" />
      <li className="font-bold py-2 ">{title}</li>
      <li>{channelTitle}</li>
      <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
