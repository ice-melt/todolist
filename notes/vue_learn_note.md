## 学习笔记

### 指令
|指令|简写|说明|示例|
|-|-|-|-|
v-html	|	|绑定模板|
v-bind	| :	|属性绑定|`v-bind:href="url"` 或 `:href="url"` ，`:style="styleMsg"`
v-on	|@	|事件绑定|`v-on:click="submit"` 或 `@:click="submit"`
v-if	|	|条件分支|`v-if="count > 0"`
v-else-if|	|条件分支|`v-else-if="count>-5&&count<0"`
v-else	|	|条件分支|
v-for	|	|循环指令|`v-for="item in list"`


### Vue实例属性
|属性|说明|使用场景|
|-|-|-|
computed	|	计算属性	|	异步场景
watch		|	侦听器		|	数据联动
el		||
data 		||
methods	||
