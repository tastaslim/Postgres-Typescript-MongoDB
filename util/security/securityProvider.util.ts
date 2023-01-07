import { SecurityService } from './baseSecurity.util';
import { CryptoService } from './cryptoSecurity.util';
import { PyCryptoService } from './pycryptoSecurity.util';
export const getSecurityService = (environment: string | undefined = 'LOCAL'): SecurityService | PyCryptoService => {
	const isProduction = environment === 'PRODUCTION';
	return isProduction ? new CryptoService() : new PyCryptoService();
};

export const securityService = getSecurityService(process.env.NODE_ENV);
