import { Injectable ,EventEmitter, Output} from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  mainData:any={}
  createData: any;
  userToBeUpdated:any
 //@Output() event = new EventEmitter<any>()
 
  createForItem:any;
  itemToBeUpdate:any;

  apiUrl =  "http://localhost:3000";

  constructor(private http:HttpClient) { }

  getUserData(email:String,password:String){
    let body = {email,password}
    return this.http.post(this.apiUrl+ '/logIn', body);
  }

  createUser(obj:any){
    console.log(obj)
    return this.http.post(this.apiUrl + '/createUser', obj);
  }
  getUser(){
    return this.http.get(this.apiUrl + '/getUser')
  }
  deleteUser(id:any){
   // let emp = this.apiUrl +'/delete'
  return this.http.delete(this.apiUrl +'/delete'+"/"+ id)
  }

  updateUser(id:any){
    return this.http.put(this.apiUrl +'/update' ,id  );
  }
  

  createItems(obj: any){
    return this.http.post(this.apiUrl +"/createItem",obj)
  }

  getItems(){
    return this.http.get(this.apiUrl+"/getItem")
  }

  
  deleteItem(data:any){
   // let emp = this.apiUrl +'/delete'
  return this.http.delete(this.apiUrl +'/deleteItems'+"/"+ data)
  }

  updateItems(body:any){
    return this.http.put(this.apiUrl +'/updateItems',body );
  }
}
