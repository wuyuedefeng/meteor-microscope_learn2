
#使用方法

```meteor
meteor add wuyuedefeng:seninfos
```

```meteor
<template name="layout">
    <div>
        {{> senInfos}}
    </div>
</template>
```

##使用以下提供的方法

```meteor
SenInfos.showWarning('警告信息');
SenInfos.showSuccess('正确信息');
SenInfos.showWarning('警告信息');
```