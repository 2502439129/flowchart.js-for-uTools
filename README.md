# uTools-flowcharts

## 介绍
使用flowcharts.js包在uTools搭建使用伪代码绘制流程图的插件。

## 安装

安装uTools插件，插件市场中搜索 `flowcharts.js` 安装即可

## 简明语法使用说明

- 节点定义： `节点名称(背景颜色 或 方向)`
- 条件节点： `<节点名称>(背景颜色 或 方向)`
- 条件出口： `<节点名称|y>(背景颜色 或 方向)`,`<节点名称|n>(背景颜色 或 方向)`
- 连接符： `->`
- 开始节点： `S`
- 结束节点： `E`

- 全局方向： 单起一行， `[right]`，`[bottom]`

> 注意： 条件节点与其出口名称应相同

### 例子
```
S -> text(red) -> <condition>
<condition|y> -> text
<condition|n> -> E
[bottom]
```

## 基本模式使用说明

### 关键字
| 流程图节点 | 图形类型       | 类型关键字        |
|-------|------------|--------------|
| 开始    | 圆角矩形       | start        |
| 结束    | 圆角矩形       | end          |
| 处理操作  | 矩形         | operation    |
| 条件判断  | 菱形         | condition    |
| 输入    | 平行四边形      | inputoutput  |
| 输出    | 平行四边形      | inputoutput  |
| 预定义过程 | 上下边重合的嵌套矩形 | subroutine   |
| 工作流方向 | 箭头         | ->           |

### 使用

#### 节点定义
基本定义：`节点名称=>关键字:节点展示内容`
**注**：
- 节点名称只在描述结构时使用，不展示在成品图像上
- `=>` 前后不可有空格

高级：
- 含跳转链接：`节点名称=>关键字:节点展示内容:>链接`
- 跳转方式：`节点名称=>关键字:节点展示内容:>链接[blank]`

#### 节点使用
基本使用：`start->operation->end`
**注**：
- 节点名称只在描述结构时使用，不展示在成品图像上
- `=>` 前后不可有空格

条件下使用：
```
start->operation->condition->end 
condition(yes)->end 
condition(no)->operation
```

## 相关文档

flowchart.js: 
- [github](https://github.com/adrai/flowchart.js) 

- [gitee](https://gitee.com/mirrors/Flowchart.js#flowchartjs)

- [flowchart.js](http://flowchart.js.org)
