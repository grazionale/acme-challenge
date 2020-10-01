import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DashboardService } from './dashboard.service';

export class Plain {
  id: number;
  description: string;
  price: number;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [MessageService],
})
export class DashboardComponent implements OnInit {
  displayModal: boolean;
  plains: Plain[];

  constructor(
    private messageService: MessageService,
    private dashboardService: DashboardService
  ) {}

  ngOnInit(): void {
    this.findPlain();
  }

  findPlain() {
    this.dashboardService.find().subscribe(
      (response) => {
        this.plains = response;
      },
      (reject) => {}
    );
  }

  openPlanDetails() {
    this.displayModal = true;
  }

  onSelectPlan() {
    // this.showConfirmPlanSelected();
    this.messageService.clear();
  }

  showConfirmPlanSelected() {
    this.displayModal = false;

    this.messageService.clear();
    this.messageService.add({
      key: 'c',
      sticky: true,
      severity: 'warn',
      summary: 'Are you sure?',
      detail: 'Confirm to proceed',
    });
  }
}
