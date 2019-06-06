import { Injectable } from '@angular/core';

@Injectable()
export class ValidateResult{//验证后的结果
  public success:boolean;
  public explain:string;
  public statusDesc:string;

  constructor(bool:boolean=true,explain:string=""){
    this.setSuccess(bool);
    this.explain=explain;
  }

  public setSuccess(success:boolean){
    this.success = success;
    if(success===true){
        this.statusDesc='success';
        this.explain='';
    }else{
        this.statusDesc='error'
    }
  }
}


@Injectable()
export class User{
    public id:number;
    public userid:string;
    public username:string;
    public telephone:string;
    public mail:string;
    public password:string;
    public remark:string;
    public deptid:number;
    public status:number;
    public operator:string;
    public operatetime:string;
    public operateip:string;
}


@Injectable()
export class Unit{
    public sid:string;
    public oprimary:string
}



@Injectable()
export class CTreeNode{
    // ng-zorro-antd 中的NzTreeNode的属性
    public key:string;
    public title:string;

    // 对应DB中的字段
    public id:number;
    public parentid:number;
    public oprimary:number;
}



@Injectable()
export class TableStyle{
    public iid:number;
    public dbname:string;
    public tablename:string;
    public fieldname:string;
    public caption:string;
    public colwidth:number;
    public alignment:number;
    public backcolor:string;
    public forecolor:string;
    public locked:number;
    public isQuantity:number;
    public sole:number;
    public visible:number;
    public hide:number;
    public notnull:number;
    public createdate:string;
    public seq:number;

    //下面是为兼容PrimeNG表格组件追加的属性
    public field:string;//字段名
    public header:string;//中文名
    public width:string;//带有单位（px）的列宽

    //下面为兼容ng-zorro的TransferItem数据结构追加的属性
    public key:string;
    public title:string;
    public description:string;
    public direction:string;
}


@Injectable()
export class FinishedProduct{
    public sid:string;
    public name:string;
    public specification:string;
    public parentid:number;
    public serialno:number;
    public status:number;
    public createdate:string;
    public oprimary:string;

    // 兼容UI的字段 - DB中不存在
    public parentTitle:string;

    getClone(){
      var instance:FinishedProduct=new FinishedProduct();
      instance.createdate = this.createdate;
      instance.name=this.name;
      instance.oprimary=this.oprimary;
      instance.parentid=this.parentid;
      instance.parentTitle=this.parentTitle;
      instance.serialno=this.serialno;
      instance.sid=this.sid;
      instance.specification=this.specification;
      instance.status=this.status;

      return instance;
    }
}


@Injectable()
export class ContactCategory{
    public id:number;
    public name:string;
    public pid:number;
    public serialNO:number;
    public status:number;
    public createDate:string;
    public updateTime:string;
}


@Injectable()
export class ContactCompany{
    public sid:string;
    public name:string;
    public code:string;
    public alias:string;
    public customer:string;
    public parentid:number;
    public bank:string;
    public account:string;
    public linkman:string;
    public phone:string;
    public address:string;
    public status:number;
    public oprimary:string;

    public uiLabel:string;
}

@Injectable()
export class JsonData{
    public success:boolean;
    public msg:string;
    public data:any[];
}


@Injectable()
export class SingleChoice{
    public sid:string;
    public pid:number;
    public oprimary:string;

    public uiLabel:string;
}


@Injectable()
export class SingleChoiceCategory{
    public id:number;
    public name:string;
    public pid:number;
    public oprimary:number;
}


@Injectable()
export class Department{
    public id:number;
    public name:string;
    public pid:number;
}


@Injectable()
export class Employee{
    public sid:string;
    public name:string;
    public pid:number;
    public remark:string;
    public oprimary:string;

    public uiLabel:string;
}


@Injectable()
export class OrderMain{
    public id:number;
    public codeid:string;
    public billdate:Date;
    public deliverytime:Date;
    public clientid:string;
    public pactcode:string;
    public pactsum:number;
    public settletype:string;
    public deliverytype:string;
    public invoice:boolean;
    public operator:string;
    public salesman:string;
    public contractor:string;
    public remark:string;
    public status:number;
    public createtime:string;
    public creator:string;
    public lastupdatetime:string;
    public updater:string;
    public packagetype:string;
}


// 订单明细表
@Injectable()
export class OrderDetail{
    //#region 所有属性
    public id:number;
    public mainid:number;
    public ordercode:string;
    public oordercode;string;
    public stylecode:string;
    public goodsname:string;
    public spec01:string;
    public spec02:string;
    public size:string;
    public colorcode:string;
    public colorname:string;
    public color:string;
    public meter:number;
    public kg:number;
    public yard:number;
    public chargeunit:number;
    public price:number;
    public amount:number;
    public platemake:number;
    public sample:number;
    public remark:string;
    public createtime:string;
    public creator:string;
    public updatetime:string;
    public updater:string;

    // 前端使用自增主键
    /**
     * 前端装饰：自增唯一主键
     */
    public uoid:number;

    /**
     * 前端装饰：true表示系统自动新增的空数据，用户取消的话会删除该数据
     */
    public isNew:boolean;
    //#endregion

    constructor(){
        // this.amount=null;
        // this.color=null;
        // this.colorcode=null;
        // this.colorname=null;
        // this.createtime=null;
        // this.creator=null;
        // this.goodsname=null;
        // this.id=null;
        // this.isNew=null;
        // this.kg=null;
        // this.mainid=null;
        // this.meter=null;
        // this.oordercode=null;
        // this.ordercode=null;
        // this.platemake=null;
        // this.chargeunit=null;
        // this.price=null;
        // this.remark=null;
        // this.sample=null;
        // this.size=null;
        // this.spec01=null;
        // this.spec02=null;
        // this.stylecode=null;
        // this.uoid=null;
        // this.updater=null;
        // this.updatetime=null;
        // this.yard=null;
    }
}


@Injectable()
export class OrderDetailEditCache{
    public uoid:number;
    public isNew:boolean;

    public data:OrderDetail;
}


// 单据属性类
@Injectable()
export class BillProps{
    public mainTableName:string;
    public detailTableName:string;

    public mainPK:string = "id";
    public detailPK:string = "id";
    public detailMK:string = "mainid";
}


@Injectable()
export class BillOrder{
    public main:OrderMain;
    public details:OrderDetail[];

    // constructor(){
    //     this.main = new OrderMain();
    //     this.details = [];
    // }
}


/**
 * 在ng-zorro的transferitem数据结构的基础上
 * 自定义了部分属性
 */
@Injectable()
export class CcZorroTransferItem{
    public key:string;
    public title:string;
    public description:string;
    public direction:string;
}


@Injectable()
export class ChargeUnit{
    public iid:number;
    public caption:string;
    public fieldname:string;
    public defaultval:number;
}


@Injectable()
export class Continuous{
    public sid:string;
    public prePart:string;
    public increament:number;
    public suffix:string;
}    


@Injectable()
export class SingleString{
    public data:string;
}   