import React from 'react';
import {Modal, Text, View, TextInput, Pressable} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {addContact} from '../../../reducers/contacts';
import {useAppDispatch} from '../../../hooks';
import styles from './styles';

export interface AddContactInterface {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
}

type FormData = {
  name: string;
  email: string;
  mobile?: string;
};

const AddContactsModal: React.FC<AddContactInterface> = ({
  modalVisible,
  setModalVisible,
}) => {
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: {errors},
    resetField,
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      mobile: '',
    },
  });

  const onCancel = () => {
    setModalVisible(false);
    resetField('name');
    resetField('mobile');
    resetField('email');
  };

  const onSubmit = (data: FormData) => {
    console.log(data);
    dispatch(addContact(data));

    onCancel();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.label}>Name</Text>

          <Controller
            control={control}
            rules={{
              required: true,
              pattern: /^[A-Za-z ]+$/i,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="name"
          />
          {errors.name && (
            <Text style={styles.error}>Please enter a valid name.</Text>
          )}
          <Text style={styles.label}>Email</Text>

          <Controller
            control={control}
            rules={{
              required: true,
              pattern:
                /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="email"
          />
          {errors.email && (
            <Text style={styles.error}>Please enter a valid email.</Text>
          )}
          <Text style={styles.label}>Mobile (Optional)</Text>

          <Controller
            control={control}
            rules={{
              maxLength: 20,
              pattern:
                /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="mobile"
          />

          {errors.mobile && (
            <Text style={styles.error}>
              Please enter a valid mobile (include 0 / country code optional).
            </Text>
          )}

          <View style={styles.buttonContainer}>
            <Pressable
              style={[styles.button, styles.buttonSubmit]}
              onPress={handleSubmit(onSubmit)}>
              <Text style={styles.textStyle}>Submit</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonCancel]}
              onPress={onCancel}>
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddContactsModal;
