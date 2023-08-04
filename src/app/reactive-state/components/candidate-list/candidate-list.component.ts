import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from '../../models/candidate.model';
import { CandidatesService } from '../../services/candidates.service';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CandidateListComponent implements OnInit {

    loading$!: Observable<boolean>;
    candidates$!: Observable<Candidate[]>
  
    constructor(private candidatesService: CandidatesService) { }
  
ngOnInit(): void {
  this.initObservables();
  this.candidatesService.getCandidatesFromServer();
}

private initObservables(){
  this.loading$ = this.candidatesService.loading;
  this.candidates$ = this.candidatesService.candidates$
}    
  
  }

