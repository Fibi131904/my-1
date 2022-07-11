import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AppWithRedux from '../AppWithRedux';
import { ReduxStoreProviderDecorator } from './decorators/ReduxStoreProviderDecorator';




export default {
  title: 'Todolists/AppWithRedux',
  component: AppWithRedux,
 decorator:[ReduxStoreProviderDecorator]
 
} as ComponentMeta<typeof AppWithRedux>;


const Template: ComponentStory<typeof AppWithRedux> = (args) => <AppWithRedux/>;

export const AppWithReduxStories = Template.bind({});

AppWithReduxStories.args = {};


