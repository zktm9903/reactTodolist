import { atom } from "recoil";

export const userState = atom<String[]>({
    key: 'userState',
    default: [],
})

export const todoListState = atom<{ userIndex: number, todoList: String[] }>({
    key: 'todoListState',
    default: {
        'userIndex': 3,
        'todoList': [],
    },
});