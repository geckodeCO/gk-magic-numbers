# gk-magic-numbers

Validation of MIME types for attached formats, files or buffers

## Usage

The main function is `validate` with 2 params:

### file
`file` is an **required** *String* param that return the MIME type for the file given

### shouldBe
`shouldBe` is an **optional** *String* param that says to the `validate` function, what should the MIME type that expect for the file given


```js
const magicNumbers = require('gk-magic-number') 

// Using file
let myPdf = magicNumbers.validate('file.pdf')
console.log(myPdf) // application/pdf

// Usign shouldBe
if (magicNumbers.validate('file.mp3', 'mp3')) { // returns a Boolean
  console.log('Is a mp3')
```
## License

The MIT License (MIT)
