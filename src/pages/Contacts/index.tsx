import React, {useState} from 'react';
import {Text, ScrollView, View, Button, Pressable} from 'react-native';
import Contact from '../../components/Contact';
import AddContactsModal from '../../components/AddContactModal';
import {useAppSelector} from '../../../hooks';
import styles from './styles';

export interface ContactsInterface {}

const Contacts: React.FC<ContactsInterface> = () => {
  const contacts = useAppSelector(state => state.contacts.contactsList);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.layout}>
      <Text style={styles.header}>My Contacts</Text>

      <ScrollView>
        <View style={styles.container}>
          {contacts.length ? (
            <>
              {contacts.map(contact => (
                <Contact
                  name={contact.name}
                  email={contact.email}
                  mobile={contact.mobile}
                />
              ))}
            </>
          ) : (
            <>
              <Text>No Contacts - please add some</Text>
            </>
          )}
        </View>
      </ScrollView>
      <View style={styles.bottomActions}>
        <Button title="Add Contact" onPress={() => setModalVisible(true)} />
      </View>
      <AddContactsModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
};

export default Contacts;
