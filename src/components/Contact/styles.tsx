import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  contactContainer: {
    paddingHorizontal: '10%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  contactDetailsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
  },
  sectionRow: {
    fontSize: 14,
    fontWeight: '400',
  },
  break: {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 10,
  },
});

export default styles;
