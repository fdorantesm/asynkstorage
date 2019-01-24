#### About

AsynkStorage is a extended and promised API to manage localStorage. AsynkStorage has native localStorage methods and two extras like has and keys.

#### Installation

```bash
npm i -S asynkstorage
```

```bash
yarn add asynkstorage
```

#

#### Include
Common js
```
const LocalStorage = require('asynkstorage')
```

ES6
```
import LocalStorage from 'asynkstorage'
```

#

#### setItem(key, value)

Sets a key pair value into localStorage

As normal promise

```js
LocalStorage.setItem('foo').then(() => {
	console.log('Done')
})
```

No JSON stringify anymore...

```
const user = {id: 1}
LocalStorage.setItem('user', user).then(() => {
	
})
```

Async / Await

```
try {
	const foo = await LocalStorage.setItem('foo')
}
catch (err) {
	console.log(err) // undefined
}
```

#

#### getItem(key, default)

Retrieve a key pair value stored in localStorage

As normal promise
```js
LocalStorage.getItem('foo').then(value => {
	console.log('This is foo: ', value) // This is foo: value
})
```

With default value
```
LocalStorage.getItem('foo', 'hello foo').then(value => {
	 console.log('This is foo', value) // This is foo: hello foo
})
```

No JSON parse anymore...
```
LocalStorage.getItem('user').then(user => {
	 console.log(user) // {id: 1}
})
```

Async / Await

```
try {
	const foo = await LocalStorage.getItem('foo')
}
catch (err) {
	console.log(err) // undefined
}
```
#

#### removeItem(key)

Removes a key pair value from localStorage

As normal promise

```js
LocalStorage.removeItem('foo').then(() => {
	console.log('Removed')
})
```

Async / Await

```
const foo = await LocalStorage.removeItem('foo')

```

#

#### has(key)

Validate if a key pair value exists in localStorage

As normal promise

```js
LocalStorage.has('foo')
	.then(() => {
		console.log('Exists')
	})
	.catch(e => {
		console.log('Does not exist')
	})

```

Async / Await

```
const foo = await LocalStorage.setItem('foo')

if (foo) {
	console.log('Exists')
}
else {
	console.log('Does not exist')
}

```
#

#### keys()

Retrieve all keys from localStorage

As normal promise

```js
LocalStorage.keys().then(keys => {
	console.log('LocalStorage', keys)
})
```

Async / Await

```
const keys = await LocalStorage.keys()
if (keys.length > 0) {
	console.log(`There are ${keys.length} keys in localStorage`)
}
else {
	console.log('LocalStorage is clean ')
}
```

#

#### clear()

Remove all key value pairs from localStorage

As normal promise

```js
LocalStorage.clear().then(() => {
	console.log('LocalStorage is clean')
})
```

Async / Await

```
await LocalStorage.clear()
```
