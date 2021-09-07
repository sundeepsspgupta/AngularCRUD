npm install @angular/cli -g
npm install tslib	
ng serve --open

-----------------------------------------------------------------------------------------------------------------------------------------
Change API localhst too:Project.service.ts

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

---------------------------------------------------------------------------------------------------------------------------------------

Add Cors in start up:

 app.UseCors(options =>
            options.WithOrigins("http://localhost:4200")
            .AllowAnyHeader()
            .AllowAnyMethod()
        );

