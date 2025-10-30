import crypto from 'crypto';
const ALGO = 'aes-256-gcm';
const KEY = (process.env.SESSION_SECRET || 'change_me_secret').padEnd(32).slice(0,32);
export function encrypt(text){
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv(ALGO, Buffer.from(KEY), iv);
  const encrypted = Buffer.concat([cipher.update(text, 'utf8'), cipher.final()]);
  const tag = cipher.getAuthTag();
  return { cipher: encrypted.toString('hex'), iv: iv.toString('hex'), tag: tag.toString('hex') };
}
export function decrypt(cipher, iv, tag){
  const decipher = crypto.createDecipheriv(ALGO, Buffer.from(KEY), Buffer.from(iv,'hex'));
  decipher.setAuthTag(Buffer.from(tag,'hex'));
  const dec = Buffer.concat([decipher.update(Buffer.from(cipher,'hex')), decipher.final()]);
  return dec.toString('utf8');
}
