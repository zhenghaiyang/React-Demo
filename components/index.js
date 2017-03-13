//把组件 整合在一起，对外漏出接口,
/*优点 1.方便别的地方 调用很多不同组件。
       2.方便管理


*/
//导出 百度Ueditor 组件

import Ueditor from './Ueditor/Ueditor';
export{ Ueditor };



//导出 ant_design table 组件
import MyTable from './MyTable/MyTable';
export { MyTable };

//导出 ant_design table 组件
import MyTableTwo from './MyTableTwo/MyTableTwo';
export { MyTableTwo };

//导出 AddTable 组件
import AddTable from './AddTable/AddTable';
export { AddTable };

//引入测试 组件
import Test from './Test/test';
export { Test };
