import React from "react";
import DropDown from "./DropDown";
import { ComponentStory, ComponentMeta } from '@storybook/react';


// This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'DropDown',
  component: DropDown,
} as ComponentMeta<typeof DropDown>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof DropDown> = (args) => <DropDown {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  /*👇 The args you need here will depend on your component */ 
};