import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Project} from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private httpClient:HttpClient) { }

  getAllProjects():Observable<Project[]>
  {
    // var currentUser ={token:""};
    // var headers = new HttpHeaders();
    // if(sessionStorage.currentUser!=null)
    // {
    //   currentUser = JSON.parse(sessionStorage.currentUser);
    //   headers = headers.set("Authorization","Bearer"+ currentUser.token);
    // }
    return this.httpClient.get<Project[]>('http://localhost:47616/api/projects',{responseType:"json"});
  }

  insertProject(newProject:Project):Observable<Project>
  {
    return this.httpClient.post<Project>("http://localhost:47616/api/projects",newProject);
  }

  updateProject(existingProject:Project):Observable<Project>{
    return this.httpClient.put<Project>("http://localhost:47616/api/projects/",existingProject)
  }

  deleteProject(ProjectID: number): Observable<string>
  {
    return this.httpClient.delete<string>(
       'http://localhost:47616/api/projects?ProjectID=' + ProjectID
      
    );
  }

  SearchProjects(searchBy: string, searchText: string): Observable<Project[]>
  {
    return this.httpClient.get<Project[]>(
      'http://localhost:47616/api/projects/search/' + searchBy + '/' + searchText,
      { responseType: 'json' }
    );
  }
}

