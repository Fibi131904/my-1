import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {action}from '@storybook/addon-actions'
import { Task } from '../Task';





export default {
  title: 'Todolists/TaskWithLocalState',
  component: Task,
  args:{
    changeTaskStatus: action('changeTaskStatus'),
    changeTaskTitle: action('changeTaskTitle'),
    removeTask: action('removeTask'),
    todolistId: 'yo'
  }
 } as ComponentMeta<typeof Task>;


 const TaskWithLocalState=()=>{
  let [tasks, setTasks] = useState<TasksStateType>({ id:'ggg', title: "HTML&CSS", isDone: true})
  const changeTaskStatus=()=>{}
  return <Task changeTaskStatus={} changeTaskTitle={} removeTask={ } task={task} todolistId={'yfjj'}/>
 }


const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const TaskIsDoneStories = Template.bind({});

TaskIsDoneStories.args = {
   task: { id: 'yuui', isDone: true, title: 'js' },
 }
export const TaskIsNotDoneStories = Template.bind({});

TaskIsNotDoneStories.args = {
   task: { id: 'yuui', isDone: false, title: 'html' },
 
}

