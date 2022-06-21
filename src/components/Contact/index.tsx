import React from 'react';
import {Text, View, Button} from 'react-native';
import {useAppDispatch} from '../../../hooks';
import {focusContact} from '../../../reducers/contacts';

import styles from './styles';

export interface ContactInterface {
  name: string;
  email: string;
  mobile?: string;
}

const Contact: React.FC<ContactInterface> = ({name, email, mobile = ''}) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <View style={styles.break} />
      <View style={styles.contactContainer}>
        <View style={styles.contactDetailsContainer}>
          <Text style={[styles.sectionRow]}>{name}</Text>
          <Text style={[styles.sectionRow]}>{email}</Text>
          {!!mobile && <Text style={[styles.sectionRow]}>{mobile}</Text>}
        </View>
        <Button
          title="Details"
          onPress={() => dispatch(focusContact({name, email, mobile}))}
        />
      </View>
    </>
  );
};

export default Contact;
