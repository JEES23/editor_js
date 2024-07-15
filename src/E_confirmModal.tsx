import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

interface ConfirmModalProps {
    isVisible: boolean;
    title: string;
    message: string;
    onCancel: () => void;
    onConfirm: () => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({ isVisible, title, message, onCancel, onConfirm }) => {
    return (
        <Modal isVisible={isVisible} onBackdropPress={onCancel}>
            <View style={styles.modalContent}>
                <Text style={styles.modalHeader}>{title}</Text>
                <Text style={styles.modalBody}>{message}</Text>
                <View style={styles.modalFooter}>
                    <Button title='취소' onPress={onCancel} />
                    <Button title='삭제하기' onPress={onConfirm} />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContent: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    modalHeader: {
        fontSize: 24,
        marginBottom: 10,
    },
    modalBody: {
        marginBottom: 20,
    },
    modalFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
});

export default ConfirmModal;