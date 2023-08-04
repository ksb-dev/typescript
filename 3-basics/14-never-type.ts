function generateError (msg: string, code: number): never {
  throw { msg, code }
}

generateError('An error occured', 500)
