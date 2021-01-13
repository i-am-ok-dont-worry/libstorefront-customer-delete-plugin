import { CustomerDeleteDao } from '../dao';
import { AbstractStore, LibstorefrontInnerState, UserService } from '@grupakmk/libstorefront';
export declare class CustomerDeleteService {
    private userService;
    private customerDeleteDao;
    private store;
    /**
     * Requests account delete for currently authorized user
     * @returns {Promise<void>}
     */
    deleteCustomer(): Promise<void>;
    /**
     * Confirms user delete - customerId and deleteToken
     * are the params that should be read from email redirect url
     * @param {string} customerId
     * @param {string} deleteToken
     * @returns {Promise<void>}
     */
    confirmDelete(customerId: string, deleteToken: string): Promise<void>;
    constructor(userService: UserService, customerDeleteDao: CustomerDeleteDao, store: AbstractStore<LibstorefrontInnerState>);
}
