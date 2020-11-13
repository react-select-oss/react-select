// @flow

import React from 'react';

import Select from 'react-select-oss';
import makeAnimated from 'react-select-oss/animated';
import { colourOptions } from '../data';

const animatedComponents = makeAnimated();

export default function AnimatedMulti() {
  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={[colourOptions[4], colourOptions[5]]}
      isMulti
      options={colourOptions}
    />
  );
}
