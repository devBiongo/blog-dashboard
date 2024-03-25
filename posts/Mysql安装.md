

```javascript
/**
 * 字符串是否不为空
 * @param content 字符串内容
 */
function strIsNotEmpty(content) {
    let result = content && content.length > 0;
    if (typeof result === 'string') {
        return result.length > 0;
    } else {
        return result ? true : false;
    }
}
```
