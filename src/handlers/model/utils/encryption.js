import bcrypt from 'bcrypt'

/**
 * Hashes a 
 * @param {string} plainText
 * @returns {string} hashed version of plainText
 */
export async function hash(plainText) {
  // TODO: Hash plainText using bcrypt
}

/**
 * Validates that a plaintext and hash are are equivalent
 * @param {string} plainText
 * @param {string} hash 
 * @returns {boolean} valid hash or not
 */
export async function validateHash(plainText, hash) {
  // TODO: Validate given hash is correct
};