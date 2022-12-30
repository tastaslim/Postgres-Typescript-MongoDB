import { EXPIRY_TIME, SECRET_KEY } from './../config/apiConfig';
import { BinaryLike, randomBytes, createHash, createCipheriv, createDecipheriv, pbkdf2Sync } from 'crypto';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { ENCRYPTION_KEY } from '../config/apiConfig';
import { unescape } from 'lodash';

const algorithm = 'aes-256-cbc';
const key = randomBytes(32);
const iv = randomBytes(16);

export const createEncryptedHash = (data: BinaryLike): string => {
  return createHash('sha256').update(data).digest('hex');
};

export const encrypt = (message: BinaryLike): string => {
  const cipher = createCipheriv(algorithm, Buffer.from(key), iv);
  const encrypted = Buffer.concat([cipher.update(message), cipher.final()]);
  return `${iv.toString('hex')}:${encrypted.toString('hex')}`;
};

export const decrypt = (message: string): string => {
  const messageArray = message.split(':');
  const iv = Buffer.from(messageArray[0], 'hex'); // message.iv
  const encryptedText = Buffer.from(messageArray[1], 'hex'); // message.encryptedData
  const decipher = createDecipheriv(algorithm, Buffer.from(key), iv);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
};

export const saltText = (data: BinaryLike): string => {
  // pbkdf2Sync is one way algorithm. Once you have the salt and hash, you can't get the original text back.
  const derivedKey = pbkdf2Sync(data, ENCRYPTION_KEY, 1000, 112, 'sha512');
  return unescape(derivedKey.toString('hex'));
};

const simpleEncrypt = (data: string): string => {
  const cipher = createCipheriv(algorithm, ENCRYPTION_KEY, iv);
  const encrypted = `${cipher.update(data, 'utf-8', 'base64')}${cipher.final('base64')}`;
  return encrypted;
};

const simpleDecrypt = (data: string): string => {
  const decipher = createDecipheriv(algorithm, ENCRYPTION_KEY, iv);
  const decrypted = `${decipher.update(data, 'base64', 'utf-8')}${decipher.final('utf-8')}`;
  return decrypted;
};

export const generateJwtToken = (payload): string => {
  const encryptedPayload = simpleEncrypt(JSON.stringify(payload));
  return jwt.sign({ userInfo: encryptedPayload }, SECRET_KEY, { expiresIn: EXPIRY_TIME });
};

export const decodeJwtToken = (token: string) => {
  const decoded = jwt.decode(token, { complete: true }) as JwtPayload;
  return simpleDecrypt(decoded.payload.userInfo);
};

export const convertToVariousEncoding = (from: number, to: BufferEncoding | undefined) => {
  return (str: WithImplicitCoercion<ArrayBuffer | SharedArrayBuffer>) => Buffer.from(str, from).toString(to);
};
