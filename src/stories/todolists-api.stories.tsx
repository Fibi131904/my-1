import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { todolistAPI, TodolistTypeTest } from '../api/todolistAPI'

export default {
   title: 'API'
}







export const GetTodolists = () => {
   const [state, setState] = useState<Array<TodolistTypeTest> | null>(null)
   useEffect(() => {
      const promise = todolistAPI.getTodolists()
      promise.then((res) => {
         setState(res.data)
      }
      )
      // axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', settings)
      //     .then((res) => {
      //         setState(res.data);
      //        })
   }, [])


   return <div> {JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
   const [state, setState] = useState<any>(null)
   useEffect(() => {
      todolistAPI.createTodolist('new title')
         .then((res) => {
            setState(res.data);
         }
            //       axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists', {title: "Hello"}, settings).then( (res) => {
            //    setState(res.data);
            // } 
         )

   }, [])

   return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
   const [state, setState] = useState<any>(null)
   useEffect(() => {
      const todolistId = 'a3fc1011-217c-4cfb-b371-040367eb4602';
      const promise = todolistAPI.deleteTodolist(todolistId)
      promise.then((res) => {
         setState(res.data)
      })
      // axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, settings).then( (res) => {
      //    setState(res.data);
      //})

   }, [])

   return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
   const [state, setState] = useState<any>(null)
   useEffect(() => {
      const todolistId = "3ac0f517-8f99-44c2-917e-6d96c3ae97d9"
      const promise = todolistAPI.updateTodolist(todolistId, 'SOME NEW TITLE')
      promise.then((res) => { setState(res.data) })
      // axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, {title: 'REACT>>>>>>>>>'}, settings)
      //    .then((res) => {
      //        setState(res.data)
      //    })

   }, [])

   return <div> {JSON.stringify(state)}</div>
}

export const GetTasks = () => {
   const [state, setState] = useState<any>(null)

   useEffect(() => {
      const todolistId = "3ac0f517-8f99-44c2-917e-6d96c3ae97d9"
      const promise = todolistAPI.getTasks(todolistId)
      promise.then((res) => {
         setState(res.data)
      }
      )
   }, [])


   return <div> {JSON.stringify(state)}</div>
}

export const DeleteTask = () => {
   const [state, setState] = useState<any>(null)
   const [todolistId, setTodolistId] = useState<string>('')
   const [taskId, setTaskId] = useState<string>('')


   const promise = todolistAPI.deleteTask(todolistId, taskId)
   promise.then((res) => {
      setState(res.data)
   })

   return <div> {JSON.stringify(state)}</div>
}

export const CreateTask = () => {
   const [state, setState] = useState<any>(null)
   const [taskTitle, setTaskTitle] = useState<string>('')
   const [todolistId, setTodolistId] = useState<string>('')

   const createTask = () => {
      todolistAPI.createTask(todolistId, taskTitle)

         .then((res) => {
            setState(res.data);
         }
         )
   }

   return <div> {JSON.stringify(state)}</div>
}