# How to use
Copy the code from **angular-unique.js** to your app.

Use the filter in your app
```html
<div ng-init="list = ['a', 'b', 'b', 'c', 'd', 'e', 'e']"></div>
list = {{ list }}
<br/>
list = {{ list | unique }}
```

Example with object key name:
```html
<div ng-init="listObj = [{ foo : 'a' }, { foo : 'b' }, { foo : 'b' }, { foo : 'e' }, { foo : 'e' }]"></div>
listObj = {{ listObj }}
<br/>
listObj = {{ listObj | unique : 'foo' }}
```
