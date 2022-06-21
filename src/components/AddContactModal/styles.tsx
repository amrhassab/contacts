import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '90%',
  },
  button: {
    borderRadius: 6,
    padding: 8,
  },
  buttonCancel: {
    backgroundColor: 'red',
  },
  buttonSubmit: {
    backgroundColor: '#2196F3',
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    height: 36,
    borderRadius: 4,
    width: '100%',
    padding: 8,
  },
  label: {
    marginVertical: 6,
  },
  error: {
    marginVertical: 6,
    color: 'red',
  },
});

export default styles;
