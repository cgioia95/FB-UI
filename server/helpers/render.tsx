import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from '../../app/App';

export function renderServerApp(url: string) {
  const component = renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
  
  return component;
}
