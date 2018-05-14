const Password = require("./index.js");

test("Can create passwords", () => {
  const password = new Password().create()
  expect(password.length).toBe(20)
})

test("Password had valid characters", () => {
  const validCharacters = ("abcdefghijklmnopqrstuvwxyz" + "@#&()§!{}><[]*/^%+-:;?=.$").split("")
  const password = new Password().create()
  password.toLowerCase().split("").forEach(p => expect(validCharacters).toContain(p))
})

test("Password length can be configured", () => {
  const password = new Password(10).create()
  expect(password.length).toBe(10)
})

test("Password digit count can be configured", () => {
  const password = new Password(20, 20).create()
  expect(password).toMatch(/[0-9]{10}/)
})

test("Password special character count can be configured", () => {
  const password = new Password(20, 0, 20).create();
  expect(password).toMatch(/^(\@|\#|\&|\(|\)|\§|\!|\{|\}|\>|\<|\[|\]|\*|\/|\^|\%|\+|\-|\:|\;|\?|\=|\.|\$){20}$/)
})

test("Password length, digit count and special character count can be configured together", () => {
  const password = new Password(30, 10, 10).create();
  let letterCount = digitCount = specialCharCount = 0;
  password.split("").forEach(p => {
    p.match(/[0-9]/) && digitCount++
    p.match(/(\@|\#|\&|\(|\)|\§|\!|\{|\}|\>|\<|\[|\]|\*|\/|\^|\%|\+|\-|\:|\;|\?|\=|\.|\$)/) && specialCharCount++
    p.match(/[a-zA-Z]/) && letterCount++
  })
  expect([letterCount, digitCount, specialCharCount]).toEqual([10, 10, 10])
})
