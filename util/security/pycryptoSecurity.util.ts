import { BinaryLike, createHash, pbkdf2Sync, createCipheriv, createDecipheriv } from 'crypto';
import { SecurityService } from './baseSecurity.util';
import { ENCRYPTION_KEY } from '../../config/apiConfig';
import { unescape } from 'lodash';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { EXPIRY_TIME, SECRET_KEY } from '../../config/apiConfig';
export class PyCryptoService implements SecurityService {
  algorithm: string;
  key: Buffer;
  iv: Buffer;
  public createEncryptedHash(data: BinaryLike): string {
    return createHash('sha256').update(data).digest('hex');
  }
  public encrypt(message: BinaryLike): string {
    const cipher = createCipheriv(this.algorithm, Buffer.from(this.key), this.iv);
    const encrypted = Buffer.concat([cipher.update(message), cipher.final()]);
    return `${this.iv.toString('hex')}:${encrypted.toString('hex')}`;
  }
  public decrypt(message: string): string {
    const messageArray = message.split(':');
    const iv = Buffer.from(messageArray[0], 'hex'); // message.iv
    const encryptedText = Buffer.from(messageArray[1], 'hex'); // message.encryptedData
    const decipher = createDecipheriv(this.algorithm, Buffer.from(this.key), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
  }
  public saltText(data: BinaryLike): string {
    const derivedKey = pbkdf2Sync(data, ENCRYPTION_KEY, 1000, 112, 'sha512');
    return unescape(derivedKey.toString('hex'));
  }
  public simpleDecrypt(data: string): string {
    const cipher = createCipheriv(this.algorithm, ENCRYPTION_KEY, this.iv);
    const encrypted = `${cipher.update(data, 'utf-8', 'base64')}${cipher.final('base64')}`;
    return encrypted;
  }
  public simpleEncrypt(data: string): string {
    const decipher = createDecipheriv(this.algorithm, ENCRYPTION_KEY, this.iv);
    const decrypted = `${decipher.update(data, 'base64', 'utf-8')}${decipher.final('utf-8')}`;
    return decrypted;
  }
  public generateJwtToken(payload): string {
    const encryptedPayload = this.simpleEncrypt(JSON.stringify(payload));
    return jwt.sign({ userInfo: encryptedPayload }, SECRET_KEY, { expiresIn: EXPIRY_TIME });
  }
  public decodeJwtToken(token: string): string {
    const decoded = jwt.decode(token, { complete: true }) as JwtPayload;
    return this.simpleDecrypt(decoded.payload.userInfo);
  }
  public convertToVariousEncoding(from: number, to: BufferEncoding | undefined) {
    return (str: WithImplicitCoercion<ArrayBuffer | SharedArrayBuffer>) => Buffer.from(str, from).toString(to);
  }
}
