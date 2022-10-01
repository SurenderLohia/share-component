import React from 'react';
import { storiesOf } from '@storybook/react';
import Share from '../components/Share';
import { groups, persons } from '../components/Share/data';

storiesOf('Share', module).add('Default', () => (
  <Share persons={persons} groups={groups}></Share>
));
