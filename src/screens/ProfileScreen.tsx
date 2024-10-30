import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { userData } from '../data/userData';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>{userData.name}</Text>
      </View>
      <View style={styles.infoContainer}>
        <InfoItem label="Email" value={userData.email} />
        <InfoItem label="Age" value={userData.age.toString()} />
        <InfoItem label="Weight" value={userData.weight} />
        <InfoItem label="Gender" value={userData.gender} />
      </View>
    </View>
  );
};

const InfoItem = ({ label, value }) => (
  <View style={styles.infoItem}>
    <Text style={styles.label}>{label}:</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    backgroundColor: '#007AFF',
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  infoContainer: {
    padding: 20,
  },
  infoItem: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  label: {
    flex: 1,
    fontSize: 16,
    color: '#666',
  },
  value: {
    flex: 2,
    fontSize: 16,
  },
});

export default ProfileScreen;