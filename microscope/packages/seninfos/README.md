```
meteor add itrydo:errors
```

```
<template name="layout">
        {{> senInfos}}
    </div>
</template>
```

##使用提供的方法
```
SenInfos.showWarning('警告信息');
SenInfos.showSuccess('正确信息');
SenInfos.showWarning('警告信息');
```