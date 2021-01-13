import { LibStorefront } from '@grupakmk/libstorefront';
import { CustomerDeletePlugin } from '../../src';
import { CustomerDeleteService } from '../../src/service';

console.warn('Test suite initialized');

const LSF = new LibStorefront({
    plugins: [
        CustomerDeletePlugin
    ]
}, 'http://localhost:9001');

(async () => {
    const service = LSF.get(CustomerDeleteService);
    const res = await LSF.UserService.login('test@grupakmk.pl', 'Testowe2!');
    const deleteRes = await service.deleteCustomer();
})();
