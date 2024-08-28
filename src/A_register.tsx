import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Modal, TextInput, ScrollView } from 'react-native';

interface ARegisterProps {}

const A_register: React.FC<ARegisterProps> = () => {
  const [isRegisterModalVisible, setRegisterModalVisible] = useState<boolean>(false);
  const [isEditMode, setIsEditMode] = useState<boolean>(false); // 작품 수정 모드 상태
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [tags, setTags] = useState<string>('');

  // Dummy data for demonstration, should be replaced with actual data handling
  const [savedTitle, setSavedTitle] = useState<string>('작품 제목 예제');
  const [savedContent, setSavedContent] = useState<string>('작품 소개 예제');
  const [savedTags, setSavedTags] = useState<string>('태그 예제');

  const toggleRegisterModal = () => {
    setRegisterModalVisible(!isRegisterModalVisible);
  };

  const handleUploadRegister = () => {
    if (isEditMode) {
      // Update existing data
      setSavedTitle(title);
      setSavedContent(content);
      setSavedTags(tags);
    } else {
      // Save new data
      alert(`작품 제목: ${title}\n작품 소개: ${content}\n태그: ${tags}`); // 실제 업로드 동작을 수행
    }
    setTitle('');
    setContent('');
    setTags('');
    setIsEditMode(false); // Exit edit mode after saving
    toggleRegisterModal();
  };

  const handleEditMode = () => {
    setTitle(savedTitle);
    setContent(savedContent);
    setTags(savedTags);
    setIsEditMode(true);
    toggleRegisterModal();
  };

  const handleTagChange = (text: string) => {
    // Update tag state
    setTags(text);
  };

  return (
    <View style={styles.container}>
      <Button title="새 작품 등록하기" onPress={toggleRegisterModal} />
      <Button title="작품 설정" onPress={handleEditMode} />

      <Modal
        transparent={true}
        visible={isRegisterModalVisible}
        onRequestClose={toggleRegisterModal}
        animationType="slide"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeader}>{isEditMode ? '작품 수정하기' : '새 작품 등록하기'}</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>작품 제목</Text>
              <TextInput
                style={styles.input}
                value={title}
                onChangeText={setTitle}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>작품 소개</Text>
              <ScrollView style={styles.scrollArea}>
                <TextInput
                  style={styles.textArea}
                  value={content}
                  onChangeText={setContent}
                  multiline={true}
                />
              </ScrollView>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>태그</Text>
              <TextInput
                style={styles.input}
                value={tags}
                onChangeText={handleTagChange}
              />
            </View>
            <View style={styles.modalFooter}>
              <Button title="취소" onPress={toggleRegisterModal} />
              <Button title={isEditMode ? "수정" : "완료"} onPress={handleUploadRegister} />
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

export default A_register;
