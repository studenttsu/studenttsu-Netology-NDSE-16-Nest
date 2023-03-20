import { ajax } from 'rxjs/ajax';
import { map } from "rxjs/operators";

interface RepoResponse {
    items: any[];
}

const data$ = ajax.getJSON<RepoResponse>('https://api.github.com/search/repositories?q=studenttsu-Netology-NDSE-16-Library');

data$
    .pipe(map(r => r.items))
    .subscribe((value) => console.log('data$ value', value));

const dataGitLab$ = ajax.getJSON('https://gitlab.com/api/v4/projects?search=nodejs');

dataGitLab$.subscribe((value) => console.log('dataGitLab$ value', value));