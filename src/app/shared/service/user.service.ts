import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as url from '../url';
import * as model from '../model'
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(
    private userUrl:url.User,
    private http:HttpClient
  ) {}

  insert(instance:model.User):Observable<any>{
    return this.http.post<any>(this.userUrl.insert,instance);
  }

  deleteByPrimaryKey(id:number):Observable<any>{
    var url = this.deleteByPrimaryKey + '/' + id;
    return this.http.get<any>(url);
  }

  deleteByUserid(userId:string):Observable<any>{
    var url=this.deleteByUserid + '/' + userId;
    return this.http.get<any>(url);
  }

  updateByPrimaryKey(instance:model.User):Observable<any>{
    return this.http.post<any>(this.userUrl.updateByPrimaryKey,instance);
  }

  getByUserid(userId:string):Observable<model.User[]>{
    var url=this.userUrl.getByUserid + '/' + userId;
    console.log('getByUserid#url:');
    console.log(url);
    
    return this.http.get<model.User[]>(url);
  }

  getAll():Observable<model.User[]>{
    return this.http.get<model.User[]>(this.userUrl.getAll);
  }

  getAllValid():Observable<model.User[]>{
    return this.http.get<model.User[]>(this.userUrl.getAllValid);
  }

  getAllInvalid():Observable<model.User[]>{
    return this.http.get<model.User[]>(this.userUrl.getAllInvalid);
  }

  login(userId:string,password:string):Observable<model.JsonData>{
    var url=this.userUrl.login + '/' + userId + '/' + password;
    console.log('登录请求的url是：' + url);
    
    return this.http.get<model.JsonData>(url);
  }

  logout():Observable<void>{
    console.log('user.service.ts#logout,请求的url是：'+this.userUrl.logout);
    console.log('user.service.ts#logout,开始发送get请求!');
    
    return this.http.get<void>(this.userUrl.logout);
  }

  isLogined():Observable<boolean>{
    console.log('测试认证状态的url是：' + this.userUrl.isLogined);    
    return this.http.get<boolean>(this.userUrl.isLogined);
  }

  toIndex():Observable<any>{
    console.log('即将跳转到主页，其URL是：'+this.userUrl.index);
    return this.http.get<any>(this.userUrl.index);
  }
}
