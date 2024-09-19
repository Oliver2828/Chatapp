import React, { useState } from "react";

const App = () => {
  const [messages, setMessages] = useState([
    { text: "Hello, how are you?", user: "other" },
    { text: "I'm fine, thanks! How about you?", user: "me" },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Added state for sidebar

  // Define responses for the other user
  const otherUserResponses = [
    "That's great to hear!",
    "I'm doing well, thanks for asking.",
    "What have you been up to?",
    "I have no complaints!",
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Add the user's message
      setMessages([...messages, { text: newMessage, user: "me" }]);
      setNewMessage("");

      // Simulate a delay for the other user's response
      setTimeout(() => {
        const randomResponse =
          otherUserResponses[Math.floor(Math.random() * otherUserResponses.length)];
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: randomResponse, user: "other" },
        ]);
      }, 1000); // Adjust the delay as needed
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar Toggle Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-4 left-4 bg-gray-800 text-white p-2 rounded-lg md:hidden"
      >
        {isSidebarOpen ? "Close" : "Open"} Sidebar
      </button>

      {/* Sidebar */}
      <div
        className={`w-1/4 bg-gray-800 text-white p-4 transition-transform transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <h2 className="text-xl mb-6 font-semibold">Chats</h2>
        <ul>
          <li className="py-2 px-4 bg-gray-700 rounded mb-2">Tochukwu</li>
          <li className="py-2 px-4 bg-gray-700 rounded mb-2">Ebere</li>
          <li className="py-2 px-4 bg-gray-700 rounded mb-2">chibueze</li>
          <li className="py-2 px-4 bg-gray-700 rounded mb-2">Dad</li>
          <li className="py-2 px-4 bg-gray-700 rounded mb-2">Arinze</li>
          <li className="py-2 px-4 bg-gray-700 rounded mb-2">Mom</li>
          {/* <li className="py-2 px-4 bg-gray-700 rounded">Bro</li> */}
        </ul>
      </div>

      {/* Chat Area */}
      <div className="flex flex-col w-full md:w-3/4">
        <div className="flex-grow p-4 overflow-y-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-4 p-4 rounded-lg max-w-lg ${
                message.user === "me"
                  ? "bg-blue-500 text-white ml-auto"
                  : "bg-gray-300 text-black mr-auto"
              }`}
            >
              {message.text}
            </div>
          ))}
        </div>

        {/* Input Box */}
        <div className="sticky bottom-0 bg-white p-4 border-t border-gray-300">
          <div className="flex flex-col sm:flex-row items-center">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 mb-2 sm:mb-0"
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-500 text-white px-4 py-2 ml-0 sm:ml-4 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;



