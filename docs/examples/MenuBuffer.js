import React from 'react';
import Select from 'react-select-oss';

import { colourOptions } from '../data';

export default () => (
  <Select
    defaultValue={colourOptions[0]}
    options={colourOptions}
    styles={{ menu: base => ({ ...base, marginBottom: 76 }) }}
  />
);
