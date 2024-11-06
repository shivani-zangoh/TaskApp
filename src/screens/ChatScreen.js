import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
// import {IMAGES} from '../../utilities/images';
import axios from 'axios';

const ChatScreen = () => {
  const [chatData, setChatData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState('');

  const sendMessage = async input => {
    if (!input.trim()) return;
    setLoading(true);
    try {
      const response = await axios.post(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyC4j0f_QM_6RCJRxo_SLrlgvp3ahIS_tZc',
        {contents: [{parts: [{text: input}]}]},
      );
      const outputMessage =
        response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        'No response';

      setChatData(prevChatData => [
        ...prevChatData,
        {id: prevChatData.length + 1, flag: 'output', message: outputMessage},
      ]);
    } catch (error) {
      setLoading(false);
      console.error('Error sending message:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSend = () => {
    if (!text.trim()) return;
    setChatData(prevChatData => [
      ...prevChatData,
      {id: prevChatData.length + 1, flag: 'input', message: text},
    ]);
    sendMessage(text);
    setText('');
  };
  return (
    <SafeAreaView style={styles.container}>
      {chatData.length === 0 ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Start your conversation</Text>
        </View>
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            flex: 1,
            paddingHorizontal: 10,
            paddingBottom: 10,
            marginBottom: 50,
          }}>
          {chatData.map((item, index) => (
            <View
              key={index}
              style={[
                item.flag === 'input' ? styles.inputChat : styles.outputChat,
                index === 0 && {marginTop: 5},
              ]}>
              <Text style={styles.chatMessage}>{item.message}</Text>
            </View>
          ))}
          {loading && <ActivityIndicator size="small" color="#35185E" />}
        </ScrollView>
      )}
      <View style={styles.inputContainer}>
        <View style={styles.textBox}>
          <TextInput
            placeholder="Write your query here..."
            placeholderTextColor="#575757"
            style={styles.textInput}
            multiline
            value={text}
            onChangeText={setText}
          />
          <TouchableOpacity onPress={handleSend}>
            <Image
              resizeMode="contain"
            //   source={IMAGES.DOWN_ARROW}
        
            source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
              style={styles.sendIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  chatContainer: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    marginBottom: 50,
  },
  inputChat: {
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
    padding: 16,
    marginBottom: 10,
    marginLeft: 'auto',
    marginTop: 10,
  },
  outputChat: {
    width: '80%',
    alignSelf: 'center',
    backgroundColor: '#E5E5E5',
    borderRadius: 8,
    padding: 16,
    marginBottom: 10,
    marginTop: 10,
  },
  chatMessage: {
    fontSize: 14,
    fontWeight: '400',
    color: '#575757',
    textAlignVertical: 'center',
  },
  loadingIndicator: {
    width: 20,
    height: 20,
    marginLeft: 10,
    marginTop: 5,
    backgroundColor: '#35185E',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  textBox: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 15,
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  textInput: {
    flex: 1,
    color: '#575757',
    paddingVertical: 16,
    paddingHorizontal: 10,
  },
  sendIcon: {
    width: 20,
    height: 20,
    marginHorizontal: 5,
    tintColor: '#575757',
    transform: [{rotate: '270deg'}],
  },
});
