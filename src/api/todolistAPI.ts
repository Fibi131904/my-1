import axios from 'axios'
import { promises } from 'fs'



const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': '7c66dd1a-3b69-4174-8adc-bb32aee68ebe'
    }
 }
 const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
         // Не забываем заменить API-KEY на собственный
         'API-KEY': '7c66dd1a-3b69-4174-8adc-bb32aee68ebe'
    }
 })
 

export const todolistAPI = {
    getTodolists() {
        const promise = instance.get<Array<TodolistTypeTest>>('todo-lists')
        return promise
    },
    createTodolist(title: string) {
        const promise = instance.post<ResponseType<{item: TodolistTypeTest}>>('todo-lists', { title })
        return promise
    },
    updateTodolist(todolistId: string, title: string) {
         const promise = instance.put<ResponseType>(`todo-lists/${todolistId}`, { title: title })
        return promise
    },
    deleteTodolist(todolistId: string) {
        const promise = instance.delete<ResponseType>(`todo-lists/${todolistId}`)
        return promise
    },
    getTasks(todolistId: string) {
        const promise = instance.get(`todo-lists/${todolistId}/tasks`)
        return promise
    },
    deleteTask(todolistId: string, taskId:string) {
        const promise = instance.delete<ResponseType>(` /todo-lists/${todolistId}/tasks/{taskId}`)
        return promise
    },
    createTask(todolistId: string, taskTitle: string) {
        const promise = instance.post<ResponseType<TaskType>>(`todo-lists/${todolistId}/tasks`)
        return promise
    },
}

export type ResponseType<D={}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
 }


export type TodolistTypeTest= {
    id: string
    addedDate: string
    order: number
    title: string
 }
export type TaskType = {
    description: string
    title: string
    completed: boolean
    status: number
    priority: number
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}

//  type CreateTodolistResponseType = {
//     resultCode: number
//    messages: Array<string>
//    fieldsErrors: Array<string>
//     data: {
//         item: TodolistTypeTest
//     }
//  }
 
//  type UpdateTodolistResponseType = {
//     resultCode: number
//    messages: Array<string>
//    fieldsErrors: Array<string>
//     data: {}
//  }
//  type DeleteTodolistResponseType = {
//     resultCode: number
//    messages: Array<string>
//    fieldsErrors: Array<string>
//     data: {}
//  }
//  type PostType = {
//     resultCode: number
//     order: number
//     id:string
//     data:{}
//    }

  
 
  