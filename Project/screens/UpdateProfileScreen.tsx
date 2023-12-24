
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useNotes } from "../ConText/MyNote";
import axios from "axios";


const UpdateProfileScreen = ({ navigation }: any) => {
  const { IsNote, SetNote }: any = useNotes();
  const [newName, setNewName] = useState(IsNote.TenHanhKhach || '');
  const [newPhone, setNewPhone] = useState(IsNote.SDT || '');
  const [newEmail, setNewEmail] = useState(IsNote.Email || '');
  const [newPassword, setNewPassword] = useState(IsNote.MatKhau || '');

  const handleUpdateProfile = async () => {
    try {
      const response = await axios.put("http://192.168.1.2:3000/hanhkhach", {
        Id: IsNote.id,
        Ten: newName,
        Sdt: newPhone,
        Email: newEmail,
        MatKhau: newPassword,
        TrangThai: IsNote.TrangThai,
      });


      if (response.status === 200) {
        SetNote({
          ...IsNote,
          TenHanhKhach: newName,
          SDT: newPhone,
          Email: newEmail,
          MatKhau: newPassword,
        });
        navigation.goBack();
      } else {
        console.error("Có lỗi khi gửi yêu cầu PUT.");
      }
    } catch (error) {
      console.error("Có lỗi khi gửi yêu cầu PUT:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tên mới:</Text>
      <TextInput
        style={styles.input}
        value={newName}
        onChangeText={(text) => setNewName(text)}
        placeholder="Nhập tên mới"
      />

      <Text style={styles.label}>Số điện thoại mới:</Text>
      <TextInput
        style={styles.input}
        value={newPhone}
        onChangeText={(text) => setNewPhone(text)}
        placeholder="Nhập số điện thoại mới"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Email mới:</Text>
      <TextInput
        style={styles.input}
        value={newEmail}
        onChangeText={(text) => setNewEmail(text)}
        placeholder="Nhập email mới"
        keyboardType="email-address"
      />

      <Text style={styles.label}>Mật khẩu mới:</Text>
      <TextInput
        style={styles.input}
        value={newPassword}
        onChangeText={(text) => setNewPassword(text)}
        placeholder="Nhập mật khẩu mới"
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.updateButton} onPress={handleUpdateProfile}>
        <Text style={styles.updateButtonText}>Cập nhật</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 60
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  updateButton: {
    backgroundColor: '#3498db',
    alignItems: 'center',
    padding: 15,
    borderRadius: 12,
  },
  updateButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default UpdateProfileScreen;
