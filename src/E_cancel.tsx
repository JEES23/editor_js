import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Modal } from 'react-native';

const E_cancel = () => {
  const [isVoteModalVisible, setVoteModalVisible] = useState(false);
  const [isBranchModalVisible, setBranchModalVisible] = useState(false);

  const toggleVoteModal = () => {
    setVoteModalVisible(!isVoteModalVisible);
  };

  const toggleBranchModal = () => {
    setBranchModalVisible(!isBranchModalVisible);
  };

  const handleVoteDelete = () => {
    alert('투표가 삭제되었습니다.'); // 실제 삭제 동작을 수행
    toggleVoteModal();
  };

  const handleBranchDelete = () => {
    alert('분기점이 삭제되었습니다.'); // 실제 삭제 동작을 수행
    toggleBranchModal();
  };

  return (
    <View style={styles.container}>
      <Button title="투표 삭제 팝업 열기" onPress={toggleVoteModal} />
      <Button title="분기점 삭제 팝업 열기" onPress={toggleBranchModal} />

      <Modal
        transparent={true}
        visible={isVoteModalVisible}
        onRequestClose={toggleVoteModal}
        animationType="slide"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeader}>투표 삭제</Text>
            <Text style={styles.modalBody}>선택한 투표를 삭제하시겠습니까?</Text>
            <View style={styles.modalFooter}>
              <Button title="취소" onPress={toggleVoteModal} />
              <Button title="삭제하기" onPress={handleVoteDelete} />
            </View>
          </View>
        </View>
      </Modal>

      <Modal
        transparent={true}
        visible={isBranchModalVisible}
        onRequestClose={toggleBranchModal}
        animationType="slide"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeader}>분기점 삭제</Text>
            <Text style={styles.modalBody}>선택한 분기점을 삭제하시겠습니까?</Text>
            <View style={styles.modalFooter}>
              <Button title="취소" onPress={toggleBranchModal} />
              <Button title="삭제하기" onPress={handleBranchDelete} />
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
    marginBottom: 10,
  },
  modalBody: {
    marginBottom: 20,
    textAlign: 'center',
  },
  modalFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default E_cancel;
