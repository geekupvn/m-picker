import * as React from 'react';
import { View } from 'react-native';
import MultiPickerMixin from './MultiPickerMixin';

var MultiPicker = function MultiPicker(props) {
  var children = props.children,
      style = props.style;
  var selectedValue = props.getValue();
  var colElements = React.Children.map(children, function (col, i) {
    return /*#__PURE__*/React.cloneElement(col, {
      selectedValue: selectedValue[i],
      onValueChange: function onValueChange() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return props.onValueChange.apply(props, [i].concat(args));
      }
    });
  });
  return /*#__PURE__*/React.createElement(View, {
    style: style
  }, colElements);
};

export default MultiPickerMixin(MultiPicker);