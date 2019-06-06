import { Injectable } from "@angular/core";


@Injectable({
    providedIn:'root'
})
export class User{
    public contextPath:string = 'http://localhost:8080/femisnsb';
    public pre:string="/user";

    public insert:string=this.contextPath+ this.pre + '/insert';// 表单参数
    public deleteByPrimaryKey:string=this.contextPath + this.pre + '/deleteByPrimaryKey';// Integer类型路径参数
    public deleteByUserid:string=this.contextPath + this.pre+ '/deleteByUserid'// string类型路径参数
    public updateByPrimaryKey:string=this.contextPath + this.pre+ '/updateByPrimaryKey'// 表单参数
    public getByUserid:string=this.contextPath + this.pre+ '/getByUserid';// string类型路径参数 - 用户ID
    public getAll:string=this.contextPath + this.pre+ '/getAll';// 无参数
    public getAllValid:string=this.contextPath + this.pre+ '/getAllValid';// 无参数
    public getAllInvalid:string=this.contextPath + this.pre+ '/getAllInvalid';// 无参数
    public login:string=this.contextPath + this.pre + '/login';//登录请求
    public logout:string=this.contextPath + this.pre + '/logout';//登录
    public isLogined=this.contextPath+this.pre+'/isLogined';//检测是否已经登录
    public index:string=this.contextPath + '/ng/index.html';//跳转到主页
}


@Injectable({
    providedIn:'root'
})
export class FinishedProductCategory{
    public contextPath:string = 'http://localhost:8080/femisnsb';

    // 下面是树形节点的请求URL
    public insert:string = this.contextPath + '/finishedProductCategory/insert';// post方法，使用表单提交
    public delete:string=this.contextPath + '/finishedProductCategory/deleteByPrimaryKey';// 后面要链接Integer主键
    public update:string=this.contextPath + '/finishedProductCategory/updateByPrimaryKey';// post方法，使用表单提交对象
    public getByPrimaryKey:string=this.contextPath + '/finishedProductCategory/getByPrimaryKey';// 后面要链接Integer主键
    public getAll:string=this.contextPath + '/finishedProductCategory/getAll';// 无参数
    public getAllValid:string=this.contextPath + '/finishedProductCategory/getAllValid';// 无参数
    public getAllInvalid:string=this.contextPath + '/finishedProductCategory/getAllInvalid';// 无参数
    public isExistByPrimaryKey:string=this.contextPath + '/finishedProductCategory/isExistByPrimaryKey'// Integer主键
    public isExistByName:string=this.contextPath + '/finishedProductCategory/isExistByName'// String名称
    public treeAllValid:string=this.contextPath + '/finishedProductCategory/getTreeAllValid'// 获取树形组件的数据
}


@Injectable({
    providedIn:'root'
})
export class FinishedProduct{
    public contextPath:string = 'http://localhost:8080/femisnsb';

    // 下面是网格组件的请求URL
    public insert:string=this.contextPath + '/finishedProduct/insert' // post方法，使用表单提交
    public delete:string=this.contextPath + '/finishedProduct/deleteByPrimaryKey'// String主键
    public update:string=this.contextPath + '/finishedProduct/updateByPrimaryKey'// post方法，表单提交对象
    public getByPrimaryKey:string=this.contextPath + '/finishedProduct/getByPrimaryKey'// String主键
    public getAll:string=this.contextPath + '/finishedProduct/getAll'// 无参数
    public getAllValid:string=this.contextPath + '/finishedProduct/getAllValid'// 无参数
    public getAllInvalid:string=this.contextPath + '/finishedProduct/getAllInvalid'// 无参数
    public getAllChildren:string=this.contextPath + '/finishedProduct/getAllChildren'// 路径参数
}


@Injectable({
    providedIn:'root'
})
export class TableStyle{
    public contextPath:string = 'http://localhost:8080/femisnsb';

    // 下面是表格样式参数表
    public getAllValid:string=this.contextPath + '/tableStyle/getAllValid'//无参数
    // 表名称作为路径参数，获取该表下的所有有效的字段设置
    public getSingleTable:string=this.contextPath + '/tableStyle/getSingleTable'
}


@Injectable({
    providedIn:'root'
})
export class ContactCatetory{
    public contextPath:string = 'http://localhost:8080/femisnsb';
    public moduleName:string='ContactCategory';

    public insert:string=this.contextPath + '/' + this.moduleName + '/insert';//post 表单传参
    public deleteByPrimaryKey:string = this.contextPath + '/' + this.moduleName + '/deleteByPrimaryKey';//get 路径参数 整型id
    public updateByPrimaryKey:string = this.contextPath + '/' + this.moduleName + '/updateByPrimaryKey';//post 表单传参
    public getByPrimaryKey:string = this.contextPath + '/' + this.moduleName + '/getByPrimaryKey';//get 路径参数 整型
    public getAll:string = this.contextPath + '/' + this.moduleName + '/getAll';//无参
    public buildTree:string = this.contextPath + '/' + this.moduleName + '/buildTree';//无参
    public getByName:string = this.contextPath + '/' + this.moduleName + '/getByName';// get 字符串
    public getByTitle:string = this.contextPath + '/' + this.moduleName + '/getByTitle';// get 字符串
}


@Injectable({
    providedIn:'root'
})
export class ContactCompany{
    public contextPath:string = 'http://localhost:8080/femisnsb';
    public moduleName:string='ContactCompany';

    public insert:string=this.contextPath + '/' + this.moduleName + '/insert';//post 表单传参
    public deleteByPrimaryKey:string = this.contextPath + '/' + this.moduleName + '/deleteByPrimaryKey';//get 路径参数 字符串id
    public updateByPrimaryKey:string = this.contextPath + '/' + this.moduleName + '/updateByPrimaryKey';//post 表单传参
    public getByPrimaryKey:string = this.contextPath + '/' + this.moduleName + '/getByPrimaryKey';//get 路径参数 字符串id
    public getAll:string = this.contextPath + '/' + this.moduleName + '/getAll';//无参
    public getAllValid:string = this.contextPath + '/' + this.moduleName + '/getAllValid';//无参
    public getAllInvalid:string = this.contextPath + '/' + this.moduleName + '/getAllInvalid';//无参
    public getChildren:string = this.contextPath + '/' + this.moduleName + '/getChildren';//get 整型
}



@Injectable({
    providedIn:'root'
})
export class SingleChoice{
    public contextPath:string = 'http://localhost:8080/femisnsb';
    public moduleName:string='singleChoice';

    public insert:string=this.contextPath + '/' + this.moduleName + '/insert';//post 表单传参
    public deleteByPrimaryKey:string = this.contextPath + '/' + this.moduleName + '/deleteByPrimaryKey';//get 路径参数 字符串id
    public updateByPrimaryKey:string = this.contextPath + '/' + this.moduleName + '/updateByPrimaryKey';//post 表单传参
    public getByPrimaryKey:string = this.contextPath + '/' + this.moduleName + '/getByPrimaryKey';//get 路径参数 字符串id
    public getChildren:string = this.contextPath + '/' + this.moduleName + '/getChildren';//get 整型
    public getAll:string=this.contextPath + '/' + this.moduleName + '/getAll';//无参数
}


@Injectable({
    providedIn:'root'
})
export class SingleChoiceCategory{
    public contextPath:string = 'http://localhost:8080/femisnsb';
    public moduleName:string='singleChoiceCategory';

    public insert:string=this.contextPath + '/' + this.moduleName + '/insert';//post 表单传参
    public deleteByPrimaryKey:string = this.contextPath + '/' + this.moduleName + '/deleteByPrimaryKey';//get 路径参数 字符串id
    public updateByPrimaryKey:string = this.contextPath + '/' + this.moduleName + '/updateByPrimaryKey';//post 表单传参
    public getByPrimaryKey:string = this.contextPath + '/' + this.moduleName + '/getByPrimaryKey';//get 路径参数 字符串id
    public getAll:string = this.contextPath + '/' + this.moduleName + '/getAll';//get 无参数
    public buildTree:string = this.contextPath + '/' + this.moduleName + '/buildTree';//get 无参数
}



@Injectable({
    providedIn:'root'
})
export class Department{
    public contextPath:string = 'http://localhost:8080/femisnsb';
    public moduleName:string='department';

    public insert:string=this.contextPath + '/' + this.moduleName + '/insert';//post 表单传参
    public deleteByPrimaryKey:string = this.contextPath + '/' + this.moduleName + '/deleteByPrimaryKey';//get 路径参数 字符串id
    public updateByPrimaryKey:string = this.contextPath + '/' + this.moduleName + '/updateByPrimaryKey';//post 表单传参
    public getByPrimaryKey:string = this.contextPath + '/' + this.moduleName + '/getByPrimaryKey';//get 路径参数 字符串id
    public getAll:string = this.contextPath + '/' + this.moduleName + '/getAll';//get 无参数
    public buildTree:string = this.contextPath + '/' + this.moduleName + '/buildTree';//get 无参数
}


@Injectable({
    providedIn:'root'
})
export class Employee{
    public contextPath:string = 'http://localhost:8080/femisnsb';
    public moduleName:string='employee';

    public insert:string=this.contextPath + '/' + this.moduleName + '/insert';//post 表单传参
    public deleteByPrimaryKey:string = this.contextPath + '/' + this.moduleName + '/deleteByPrimaryKey';//get 路径参数 字符串id
    public updateByPrimaryKey:string = this.contextPath + '/' + this.moduleName + '/updateByPrimaryKey';//post 表单传参
    public getByPrimaryKey:string = this.contextPath + '/' + this.moduleName + '/getByPrimaryKey';//get 路径参数 字符串id
    public getAll:string = this.contextPath + '/' + this.moduleName + '/getAll';//get 无参数
    public getChildren:string = this.contextPath + '/' + this.moduleName + '/getChildren';//get 无参数
}


@Injectable({
    providedIn:'root'
})
export class OrderMain{
    public contextPath:string = 'http://localhost:8080/femisnsb';
    public moduleName:string='orderMain';

    public insert:string=this.contextPath + '/' + this.moduleName + '/insert';//post 表单传参
    public deleteByPrimaryKey:string = this.contextPath + '/' + this.moduleName + '/deleteByPrimaryKey';//get 路径参数 字符串id
    public updateByPrimaryKey:string = this.contextPath + '/' + this.moduleName + '/updateByPrimaryKey';//post 表单传参
    public getByPrimaryKey:string = this.contextPath + '/' + this.moduleName + '/getByPrimaryKey';//get 路径参数 字符串id

    public getPrevious:string=this.contextPath + '/' + this.moduleName + '/getPrevious';//get 整型主键
    public getNext:string=this.contextPath + '/' + this.moduleName + '/getNext';//get 整型主键
    public getFirst:string=this.contextPath + '/' + this.moduleName + '/getFirst';//get 无参数
    public getLast:string=this.contextPath + '/' + this.moduleName + '/getLast';//get 无参数
    public getAllOrderCode:string=this.contextPath + '/' + this.moduleName + '/getAllOrderCode';//get 无参数
    public save:string=this.contextPath + '/' + this.moduleName + '/save';//post  对象参数
}


@Injectable({
    providedIn:'root'
})
export class OrderDetail{
    public contextPath:string = 'http://localhost:8080/femisnsb';
    public moduleName:string='orderDetail';

    public insert:string=this.contextPath + '/' + this.moduleName + '/insert';//post 表单传参
    public insertBatch:string=this.contextPath + '/' + this.moduleName + '/insertBatch';//post 表单传参
    public deleteByPrimaryKey:string = this.contextPath + '/' + this.moduleName + '/deleteByPrimaryKey';//get 路径参数 字符串id
    public updateByPrimaryKey:string = this.contextPath + '/' + this.moduleName + '/updateByPrimaryKey';//post 表单传参
    public getByPrimaryKey:string = this.contextPath + '/' + this.moduleName + '/getByPrimaryKey';//get 路径参数 字符串id
    public getByMainId:string = this.contextPath + '/' + this.moduleName + '/getByMainId';//get 路径参数 字符串id
    public getAllOrderCode:string = this.contextPath + '/' + this.moduleName + '/getAllOrderCode';//get 路径参数 字符串id
    public save:string = this.contextPath + '/' + this.moduleName + '/save';//post 请求体传参
}



@Injectable({
    providedIn:'root'
})
export class ChargeUnit{
    public contextPath:string = 'http://localhost:8080/femisnsb';
    public moduleName:string='chargeUnit';
    
    public getAll:string = this.contextPath + '/' + this.moduleName + '/getAll';//get 路径参数 字符串id
}


@Injectable({
    providedIn:'root'
})
export class Continuous{
    public contextPath:string = 'http://localhost:8080/femisnsb';
    public moduleName:string='continuous';

    // 下面是表格样式参数表
    public insert:string=this.contextPath + '/' + this.moduleName +'/insert'//post 表单传参
    public deleteByPrimaryKey:string=this.contextPath + '/' + this.moduleName +'/deleteByPrimaryKey'//get 路径参数
    public updateByPrimaryKey:string=this.contextPath + '/' + this.moduleName +'/updateByPrimaryKey'//post  表单参数
    public getByPrimaryKey:string=this.contextPath + '/' + this.moduleName +'/getByPrimaryKey'//get  路径参数
    public updateBillCode:string=this.contextPath + '/' + this.moduleName +'/updateBillCode'//get 路径参数
    public getNewBillCode:string=this.contextPath + '/' + this.moduleName +'/getNewBillCode'//get 路径参数：面料订单、白坯加工入库、白坯采购入库
}


@Injectable({
    providedIn:'root'
})
export class BillOrder{
    public contextPath:string = 'http://localhost:8080/femisnsb';
    public moduleName:string='billOrder';

    public save:string=this.contextPath + '/' + this.moduleName +'/save'//post 对象参数
    public delete:string=this.contextPath + '/' + this.moduleName +'/delete'//get 路径参数
    public getByPrimaryKey:string=this.contextPath + '/' + this.moduleName +'/getByPrimaryKey'//get 路径参数

    public moveFirst:string=this.contextPath +'/'+ this.moduleName + '/moveFirst'// get 无参数
    public movePrevious:string=this.contextPath +'/'+ this.moduleName + '/movePrevious'// get 路径参数
    public moveNext:string=this.contextPath +'/'+ this.moduleName + '/moveNext'// get 路径参数
    public moveLast:string=this.contextPath +'/'+ this.moduleName + '/moveLast'// get 无参数

    public isCodeidExist:string = this.contextPath +'/'+ this.moduleName +'/isCodeidExist'// get 路径参数
}