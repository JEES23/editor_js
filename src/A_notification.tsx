import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Modal, TextInput, ScrollView } from 'react-native';

const A_notification = () => {
  const [isNoticeModalVisible, setNoticeModalVisible] = useState(false);
  const [noticeTitle, setNoticeTitle] = useState('');
  const [noticeContent, setNoticeContent] = useState('');

  const toggleNoticeModal = () => {
    setNoticeModalVisible(!isNoticeModalVisible);
  };

  const handleUploadNotice = () => {
    alert(`공지 제목: ${noticeTitle}\n공지 내용: ${noticeContent}`); // 실제 업로드 동작을 수행
    setNoticeTitle('');
    setNoticeContent('');
    toggleNoticeModal();
  };

  return (
    <View style={styles.container}>
      <Button title="새 공지 등록하기" onPress={toggleNoticeModal} />

      <Modal
        transparent={true}
        visible={isNoticeModalVisible}
        onRequestClose={toggleNoticeModal}
        animationType="slide"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeader}>새 공지 등록하기</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>공지 제목</Text>
              <TextInput
                style={styles.input}
                placeholder="공지를 입력하세요"
                value={noticeTitle}
                onChangeText={setNoticeTitle}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>공지 내용</Text>
              <ScrollView style={styles.scrollArea}>
                <TextInput
                  style={styles.textArea}
                  placeholder="내용을 입력하세요"
                  value={noticeContent}
                  onChangeText={setNoticeContent}
                  multiline={true}
                />
              </ScrollView>
            </View>
            <View style={styles.modalFooter}>
              <Button title="취소" onPress={toggleNoticeModal} />
              <Button title="공지 업로드" onPress={handleUploadNotice} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    width: 300,
  },
  modalHeader: {
    fontSize: 24,
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  inputLabel: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
  },
  scrollArea: {
    maxHeight: 100,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    padding: 5,
  },
  textArea: {
    width: '100%',
    height: 90,
    textAlignVertical: 'top',
  },
  modalFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default A_notification;
