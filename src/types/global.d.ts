//全局接口
declare global {
  //分页查询参数
  interface PageQuery {
    pageNum: number;
    pageSize: number;
  }
  //弹窗属性
  interface DialogOption {
    //弹窗标题
    title?: string;
    //是否显示
    visible: boolean;
  }
  
  //接口返回结构
  interface Result<T> {
    //请求状态
    code: number
    //请求数据
    data?: T
    //请求提示
    message?: string
  }


}
export { };