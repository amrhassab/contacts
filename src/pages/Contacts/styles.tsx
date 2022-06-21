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
  detailContainer: {
    paddingHorizontal: '10%',
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },
  detailText: {
    textAlign: 'center',
  },
});

export default styles;
