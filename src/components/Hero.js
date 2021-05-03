import React from 'react';
import { InlineTextarea, BlocksControls } from 'react-tinacms-inline';
import '../styles/hero.css';

export function Hero() {
  return (
    <div className="hero">
      <div className="wrapper wrapper--narrow">
        <h1>
          <InlineTextarea name="headline" />
        </h1>
        <p>
          <InlineTextarea name="subtext" />
        </p>
      </div>
    </div>
  );
}

export const heroBlock = {
  Component: ({ index }) => (
    <BlocksControls index={index}>
      <Hero />
    </BlocksControls>
  ),
  template: {
    label: 'Hero',
    defaultItem: {
      headline: 'Suspended in a Sunbeam',
      subtext: 'Dispassionate extraterrestrial observer',
    },
    fields: [],
  },
};
