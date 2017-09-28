import React from 'react';
import { Route } from 'react-router';

import { App } from './modules';

export default function getRoutes() {
  return (
    <Route path="/" component={App}/>
  );
}
