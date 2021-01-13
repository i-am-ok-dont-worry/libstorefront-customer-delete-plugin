# Customer delete plugin
Plugin provides support for customer account delete action.

## Usage
To use the plugin add dependency to the LSF lib:
```javascript
const LSF = new LibStorefront({
    plugins: [
        CustomerDeletePlugin
    ]
});
```

and get `CustomerDeleteService` registered by lib:
```javascript
LSF.get(CustomerDeleteService)
```

## Service 
Plugin registers service `CustomerDeleteService` which serves as a plugin entry point.
Service methods:
* `deleteCustomer (): Promise<void>` - requests a customer delete. This action does not implies that account will be deleted or blocked - delete request must be confirmed 
* `confirmDelete (customerId: string, deleteToken: string): Promise<void>` - confirms account delete. After delete user will be logged out if authorized and session will be cleared

## Build plugin
Run `npm run build` to build plugin.
Output can be found in `/dist` catalog.

## Test plugin
Plugin must be tested in isolation. Unit tests can be performed via jest framework
in `/tests/test.ts` file.
Template includes by default mocked LocalStorage object.
