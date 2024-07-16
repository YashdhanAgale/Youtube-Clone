import React, { useEffect, useState } from "react";
import ChatMsg from "./ChatMsg";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSLice";
import { generateNames, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();

  const [liveMessage, setLiveMessage] = useState("");

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // API polling
      dispatch(
        addMessage({
          name: generateNames(),
          message: makeRandomMessage(10),
        })
      );
    }, 2000);
    // clear interval

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll  flex flex-col-reverse  ">
        <div>
          {chatMessages.map((c, index) => (
            <ChatMsg name={c.name} message={c.message} key={index} />
          ))}
        </div>
      </div>

      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Yashodhan Agale",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="w-95 px-2 border border-black"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 mx-2 bg-green-200">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
