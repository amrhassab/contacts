import React, {useState} from 'react';
import {Text, ScrollView, View, Button} from 'react-native';
import Contact from '../../components/Contact';
import AddContactsModal from '../../components/AddContactModal';
import {useAppSelector, useAppDispatch} from '../../../hooks';
import {clearContact} from '../../../reducers/contacts';
import styles from './styles';
import Details from '../Details';

export interface ContactsInterface {}

const Contacts: React.FC<ContactsInterface> = () => {
  const dispatch = useAppDispatch();

  const {contactsList, focusedContact} = useAppSelector(
    state => state.contacts,
  );

  const [modalVisible, setModalVisible] = useState(false);

  if (focusedContact) {
    return (
      <View style={styles.detailContainer}>
        <Text style={styles.detailText}>{focusedContact.name}</Text>
        <Text style={styles.detailText}>{focusedContact.email}</Text>
        {!!focusedContact.mobile && (
          <Text style={styles.detailText}>{focusedContact.mobile}</Text>
        )}
        <Button title="Back" onPress={() => dispatch(clearContact())} />
      </View>
    );
  }

  return (
    <View style={styles.layout}>
      <Text style={styles.header}>My Contacts</Text>

      <ScrollView>
        <View style={styles.container}>
          {contactsList.length ? (
            <>
              {contactsList.map((contact, i) => (
                <Contact
                  key={i}
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
