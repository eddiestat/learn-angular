import {Injectable} from "@angular/core";
import {Observable} from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import {Callup} from "./callup.model";
import {Inject} from "@angular/core";
import { APP_CONFIG, AppConfig } from '../../app.config';

@Injectable()
export class CallupService {

	constructor(@Inject(APP_CONFIG) private config: AppConfig, private http: HttpClient) {}

	get(entityPk: number) : Observable<Array<Callup>> {
		return this.http.get<Array<Callup>>(`${this.config.apiEndpoint}/callups/${entityPk}`);
	}

	cancel(id: number) : Observable<boolean> {
		return this.http.post<boolean>(`${this.config.apiEndpoint}/callups/remove`, {id: id});
	}


}