import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  layout: {
    padding: '5%',
    height: '100%',
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: '5%',
  },
  header: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bottomActions: {
    right: 10,
    left: 10,
    position: 'absolute',
    bottom: 10,
  },
});

export default styles;
