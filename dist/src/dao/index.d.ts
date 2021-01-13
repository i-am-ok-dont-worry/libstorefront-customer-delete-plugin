import { Task, TaskQueue } from '@grupakmk/libstorefront';
export declare class CustomerDeleteDao {
    private taskQueue;
    deleteAccount(customerId: string, token: string): Promise<Task>;
    confirmDelete(customerId: string, deleteToken: string): Promise<Task>;
    constructor(taskQueue: TaskQueue);
}
