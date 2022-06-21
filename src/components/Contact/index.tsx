import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

export interface ContactInterface {
  name: string;
  email: string;
  mobile?: string;
}

const Contact: React.FC<ContactInterface> = ({name, email, mobile = ''}) => {
  return (
    <View style={styles.contactContainer}>
      <View style={styles.break} />
      <Text style={[styles.sectionRow]}>{name}</Text>
      <Text style={[styles.sectionRow]}>{email}</Text>
      {!!mobile && <Text style={[styles.sectionRow]}>{mobile}</Text>}
    </View>
  );
};

export default Contact;
