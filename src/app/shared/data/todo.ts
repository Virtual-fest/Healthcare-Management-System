import { TodoSidebar } from "../interface/todos"

export const sidebar: TodoSidebar[] = [
    {
        id: 1,
        title: 'All Tasks',
        value: 'all',
        icon: 'file-plus',
        color: 'primary'
    },
    {
        id: 2,
        title: 'Completed',
        value: 'completed',
        icon: 'check-circle',
        color: 'success'
    },
    {
        id: 3,
        title: 'Pending',
        value: 'pending',
        icon: 'cast',
        color: 'danger'
    },
    {
        id: 4,
        title: 'In Process',
        value: 'in_progress',
        icon: 'activity',
        color: 'info'
    },
    {
        id: 5,
        title: 'Trash',
        value: 'trash',
        icon: 'trash',
        color: 'danger'
    }
]