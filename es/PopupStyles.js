function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { StyleSheet } from 'react-native';
var textStyle = {
  color: '#0ae',
  fontSize: 18,
  textAlign: 'center'
};
var styles = StyleSheet.create({
  modal: {
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  header: {
    // flex:1, 0.39.0 needs to remove
    height: 44,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e7e7e7'
  },
  headerItem: {
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  actionText: textStyle,
  okText: {},
  dismissText: {},
  title: _extends(_extends({}, textStyle), {
    color: '#666'
  })
});
export default styles;