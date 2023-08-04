function addAndHandle (n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2
  cb(result)
}

addAndHandle(20, 30, result => {
  console.log(result)
})
