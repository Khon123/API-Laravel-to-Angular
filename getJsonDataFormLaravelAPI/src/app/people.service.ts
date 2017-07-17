import {Headers, Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
@Injectable()
export class PeopleService{
    constructor(private http: Http){

    }

    getPoeple(): Observable<any>{
        return this.http.get('http://localhost:8000/api/peoples')
            .map(
                (response: Response) => {
                    return response.json().peoples;
                }
            );
    }

    addPeople(name: string){
        const body = JSON.stringify({name:name});
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:8000/api/people', body, {headers: headers})
    }

    updatePeople(id: number, newName: string){
        const  body = JSON.stringify({name: newName});
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.put('http://localhost:8000/api/people/'+ id, body, {headers: headers})
            .map(
                (response: Response) => response.json()
            );
    }

    deletePeople(id: number){
        return this.http.delete('http://localhost:8000/api/people/'+ id);
    }
}