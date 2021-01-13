import { CustomerDeleteDao } from '../dao';
import { injectable, inject } from 'inversify';
import { AbstractStore, LibstorefrontInnerState, Logger, UserService } from '@grupakmk/libstorefront';

@injectable()
export class CustomerDeleteService {

    /**
     * Requests account delete for currently authorized user
     * @returns {Promise<void>}
     */
    public deleteCustomer (): Promise<void> {
        try {
            const customer = this.store.getState().user.current;
            const token = this.store.getState().user.token;
            if (!customer || !customer.id) { throw new Error('Cannot delete unauthorized user'); }
            if (!token) { throw new Error('Cannot delete unauthorized user'); }
            return this.customerDeleteDao.deleteAccount(customer.id, token)
                .then(response => {
                    if (response.result) { return; }
                    else { throw new Error('Error during delete'); }
                })
        } catch (e) {
            Logger.error('Cannot delete customer: ', 'customer-delete-plugin', e.message);
        }
    }

    /**
     * Confirms user delete - customerId and deleteToken
     * are the params that should be read from email redirect url
     * @param {string} customerId
     * @param {string} deleteToken
     * @returns {Promise<void>}
     */
    public confirmDelete (customerId: string, deleteToken: string): Promise<void> {
        try {
            if (!customerId) { throw new Error('Invalid customer id'); }
            if (!deleteToken) { throw new Error('Invalid delete token'); }

            return this.customerDeleteDao.confirmDelete(customerId, deleteToken)
                .then(response => {
                    if (response.result) {
                        this.userService.logout();
                        return;
                    }
                    else { throw new Error('Error during delete'); }
                })
        } catch (e) {
            Logger.error('Cannot delete customer: ', 'customer-delete-plugin', e.message);
        }
    }

    public constructor(
        @inject(UserService) private userService: UserService,
        @inject(CustomerDeleteDao) private customerDeleteDao: CustomerDeleteDao,
        @inject(AbstractStore) private store: AbstractStore<LibstorefrontInnerState>
    ) {}
}
