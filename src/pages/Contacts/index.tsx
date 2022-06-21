import React from 'react';
import {Text, ScrollView, View, Button} from 'react-native';
import {useAppSelector} from '../../../hooks';

import styles from './styles';

export interface ContactsInterface {}

const Contact: React.FC<ContactsInterface> = () => {
  const contacts = useAppSelector(state => state.contacts.contactsList);

  return (
    <View style={styles.layout}>
      <Text style={styles.header}>My Contacts</Text>

      <ScrollView>
        <View style={styles.container}>
          {contacts.length ? (
            <></>
          ) : (
            <>
              <Text>No Contacts - please add some</Text>
            </>
          )}
        </View>
      </ScrollView>
      <View style={styles.bottomActions}>
        <Button
          title="Press me"
          onPress={() => console.log('Cannot press this one')}
        />
      </View>
    </View>
  );
};

export default Contact;
