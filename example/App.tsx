import React, { useState } from "react";
import "./App.css";
import AvatarExample from "./components/AvatarExample";
import ButtonExample from "./components/ButtonExample";
import ChatListExample from "./components/ChatListExample";
import DropdownExample from "./components/DropdownExample";
import MeetingListExample from "./components/MeetingListExample";
import MessageListExample from "./components/MessageListExample";
import NavbarExample from "./components/NavbarExample";
import PopupExample from "./components/PopupExample";

const Example: React.FC = () => {
  const [showComponent, setShowComponent] = useState("");

  const btnClick = (component: String) => {
    switch (component) {
      case "chatList":
        return <ChatListExample />;
      case "messageList":
        return <MessageListExample />;
      case "avatar":
        return <AvatarExample />;
      case "button":
        return <ButtonExample />;
      case "dropdown":
        return <DropdownExample />;
      case "meetingList":
        return <MeetingListExample />;
      case "navbar":
        return <NavbarExample />;
      case "popup":
        return <PopupExample />;
      default:
        break;
    }
  };

  return (
    <div className="rce-example">
      <div className="rce-example-btn">
        <button
          style={
            showComponent === "chatList"
              ? {
                  backgroundColor: "#ffffff",
                  color: "#ffadad",
                  border: "2px solid #ffadad",
                }
              : {
                  backgroundColor: "#ffadad",
                  color: "#ffffff",
                  border: "2px solid #ffadad",
                }
          }
          onClick={() => setShowComponent("chatList")}
        >
          Chat List
        </button>
        <button
          style={
            showComponent === "messageList"
              ? {
                  backgroundColor: "#ffffff",
                  color: "#ffd6a5",
                  border: "2px solid #ffd6a5",
                }
              : {
                  backgroundColor: "#ffd6a5",
                  color: "#ffffff",
                  border: "2px solid #ffd6a5",
                }
          }
          onClick={() => setShowComponent("messageList")}
        >
          Message List
        </button>
        <button
          style={
            showComponent === "meetingList"
              ? {
                  backgroundColor: "#ffffff",
                  color: "#ccd5ae",
                  border: "2px solid #ccd5ae",
                }
              : {
                  backgroundColor: "#ccd5ae",
                  color: "#ffffff",
                  border: "2px solid #ccd5ae",
                }
          }
          onClick={() => setShowComponent("meetingList")}
        >
          Meeting List
        </button>
        <button
          style={
            showComponent === "avatar"
              ? {
                  backgroundColor: "#ffffff",
                  color: "#9bf6ff",
                  border: "2px solid #9bf6ff",
                }
              : {
                  backgroundColor: "#9bf6ff",
                  color: "#ffffff",
                  border: "2px solid #9bf6ff",
                }
          }
          onClick={() => setShowComponent("avatar")}
        >
          Avatar
        </button>
        <button
          style={
            showComponent === "button"
              ? {
                  backgroundColor: "#ffffff",
                  color: "#a0c4ff",
                  border: "2px solid #a0c4ff",
                }
              : {
                  backgroundColor: "#a0c4ff",
                  color: "#ffffff",
                  border: "2px solid #a0c4ff",
                }
          }
          onClick={() => setShowComponent("button")}
        >
          Button
        </button>
        <button
          style={
            showComponent === "dropdown"
              ? {
                  backgroundColor: "#ffffff",
                  color: "#bdb2ff",
                  border: "2px solid #bdb2ff",
                }
              : {
                  backgroundColor: "#bdb2ff",
                  color: "#ffffff",
                  border: "2px solid #bdb2ff",
                }
          }
          onClick={() => setShowComponent("dropdown")}
        >
          Dropdown
        </button>
        <button
          style={
            showComponent === "navbar"
            ? {
              backgroundColor: "#ffffff",
              color: "#ffc6ff",
              border: "2px solid #ffc6ff",
            }
          : {
              backgroundColor: "#ffc6ff",
              color: "#ffffff",
              border: "2px solid #ffc6ff",
            }
          }
          onClick={() => setShowComponent("navbar")}
        >
          Navbar
        </button>
        <button
          style={
            showComponent === "popup"
            ? {
              backgroundColor: "#ffffff",
              color: "#bcd4e6",
              border: "2px solid #bcd4e6",
            }
          : {
              backgroundColor: "#bcd4e6",
              color: "#ffffff",
              border: "2px solid #bcd4e6",
            }
          }
          onClick={() => setShowComponent("popup")}
        >
          popup
        </button>
      </div>
      <div className="rce-example-component"> {btnClick(showComponent)}</div>
    </div>
  );
};

export default Example;
