import { useEffect, useState } from "react";
import { View, Text, TextInput, Button, FlatList } from "react-native";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";

const ArtistMessageSummary = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  // Hardcoded user ID for testing
  const userId = 1; // Simulated logged-in user

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = () => {
    axios
      .get("http://localhost:3001/messages")
      .then((response) => setMessages(response.data))
      .catch((error) => console.error("Error fetching messages:", error));
  };

  const sendMessage = () => {
    axios
      .post("http://localhost:3001/messages", {
        sender_id: userId, // Replace with actual user ID
        receiver_id: 2, // Replace with actual recipient ID
        message_text: newMessage,
      })
      .then(() => {
        setNewMessage("");
        fetchMessages();
      })
      .catch((error) => console.error("Error sending message:", error));
  };

  return (
    <SafeAreaView>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text>
            {item.sender_id}: {item.message_text}
          </Text>
        )}
      />
      <TextInput
        value={newMessage}
        onChangeText={setNewMessage}
        placeholder="Type a message..."
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <Button title="Send" onPress={sendMessage} />
    </SafeAreaView>
  );
};

export default ArtistMessageSummary;
