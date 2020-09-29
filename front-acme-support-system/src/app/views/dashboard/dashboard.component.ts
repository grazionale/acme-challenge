import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [MessageService],
})
export class DashboardComponent implements OnInit {
  public showModal = false;
  displayModal: boolean;

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {}

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
