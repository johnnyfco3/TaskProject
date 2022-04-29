import { defineStore } from 'pinia'

export const useMessage = defineStore('message', {
  state: () => ({
    notifications: [] as Notification[]
  }),
  actions: {
    close(index: number) {
        this.notifications.splice(index, 1);
    }
}
})

export interface Notification {
    type: 'success' | 'danger' | 'warning' | 'info';
    message: string;
}