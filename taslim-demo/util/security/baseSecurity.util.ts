import { BinaryLike } from 'crypto';

export interface SecurityService {
  algorithm: string;
  key: Buffer;
  iv: Buffer;
  createEncryptedHash(data: BinaryLike): string;
  encrypt(message: BinaryLike): string;
  decrypt(message: string): string;
  saltText(data: BinaryLike): string;
  simpleDecrypt(data: string): string;
  simpleEncrypt(data: string): string;
  generateJwtToken(payload): string;
  decodeJwtToken(token: string): string;
  convertToVariousEncoding(from: number, to: BufferEncoding | undefined): (str: WithImplicitCoercion<ArrayBuffer | SharedArrayBuffer>) => string;
}
