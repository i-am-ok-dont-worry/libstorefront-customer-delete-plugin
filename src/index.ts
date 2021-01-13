import { LibStorefront } from '@grupakmk/libstorefront';
import { LibstorefrontPlugin } from '@grupakmk/libstorefront/dist/config/types/libstorefront-plugin';
import { CustomerDeleteDao } from './dao';
import { CustomerDeleteService } from './service';

/**
 * Libstorefront plugin for customer delete
 */
export const CustomerDeletePlugin = ((libstorefront: LibStorefront) => {
    libstorefront.getIOCContainer().bind<CustomerDeleteDao>(CustomerDeleteDao).to(CustomerDeleteDao);
    libstorefront.getIOCContainer().bind<CustomerDeleteService>(CustomerDeleteService).to(CustomerDeleteService);
}) as LibstorefrontPlugin;
