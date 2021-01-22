import { Task, TaskQueue, URLTransform } from '@grupakmk/libstorefront';
import { injectable, inject } from 'inversify';

@injectable()
export class CustomerDeleteDao {

    public deleteAccount (customerId: string, token: string): Promise<Task> {
        return this.taskQueue.execute({
            url: URLTransform.getAbsoluteApiUrl('/api/vendor/customer-delete/' + customerId + '?token=' + token),
            payload: {
                method: 'POST',
                mode: 'cors',
                headers: { 'Content-Type': 'application/json' }
            }
        })
    }

    public confirmDelete (customerId: string, deleteToken: string): Promise<Task> {
        return this.taskQueue.execute({
            url: URLTransform.getAbsoluteApiUrl('/api/vendor/customer-delete/confirm/' + customerId + '?token=' + deleteToken),
            payload: {
                method: 'POST',
                mode: 'cors',
                headers: { 'Content-Type': 'application/json' }
            }
        })
    }

    public constructor(@inject(TaskQueue) private taskQueue: TaskQueue) {}
}
