//把组件 整合在一起，对外漏出接口,
/*优点 1.方便别的地方 调用很多不同组件。
       2.方便管理


*/
//导出 百度Ueditor 组件

import Ueditor from './Ueditor/Ueditor';
export{ Ueditor };

//导出 ant_design table 组件
import BuyAndSell from './BuyAndSell/BuyAndSell';
export { BuyAndSell };

//导出 ant_design table 组件
import MyTableTwo from './MyTableTwo/MyTableTwo';
export { MyTableTwo };

//引入Modal 组件
import MyModal from './Modal/MyModal';
export { MyModal };

//引入测试 组件
import Test from './Test/test';
export { Test };

//引入测试form
import FormTest from './FormTest/FormTest';
export { FormTest }

import HtmlTable from './HtmlTable/HtmlTable'
export { HtmlTable }

import IconFont from './IconFont/IconFont'
export { IconFont }

//甘道图
import ReactForGantt from './ReactGantt/reactgantt';
export {ReactForGantt}


//test
import ItemTable from './HtmlTable/testHTML.js'
export { ItemTable }
