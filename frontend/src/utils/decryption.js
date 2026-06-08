
export const decryptMessage = (msg, nonce, key) => {
  let newMsg = "";

  key = BigInt(key); // FIX

  for (let i = 0; i < msg.length; i++) {
    const v = msg.charCodeAt(i);

    let lsb5 = v & 0x1F;
    const msb3 = v & 0xE0;

    // use BigInt shifting
    const key5 = Number((key >> BigInt(i * 5)) & 31n);

    lsb5 ^= key5;

    const decryptedChar = msb3 | lsb5;

    newMsg += String.fromCharCode(decryptedChar);
  }

  // remove nonce if exists
  if (newMsg.endsWith(nonce)) {
    newMsg = newMsg.slice(0, -nonce.length);
  }

  return newMsg;
};