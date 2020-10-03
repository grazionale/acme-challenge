import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastOptions, ToastyService } from 'ng2-toasty';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/core/security/auth.service';
import { DashboardService } from './dashboard.service';

export class Plain {
  id: number;
  title: string;
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
  plainSelected: Plain;

  constructor(
    private messageService: MessageService,
    private dashboardService: DashboardService,
    private toastyService: ToastyService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.findPlain();
  }

  findPlain() {
    this.dashboardService.find().subscribe(
      (response) => {
        this.plains = response;
      },
      (reject) => {
        var toastOptions: ToastOptions = {
          title: 'Que pena',
          msg: 'Não encontramos nenhum plano',
          showClose: true,
          timeout: 5000,
        };

        this.toastyService.error(toastOptions);
      }
    );
  }

  openPlanDetails(plain) {
    this.plainSelected = plain;
    this.displayModal = true;
  }

  onSelectPlan() {
    this.messageService.clear();
  }

  showConfirmPlanSelected() {
    this.displayModal = false;

    this.messageService.clear();
    this.messageService.add({
      key: 'c',
      sticky: false,
      severity: 'success',
      summary: '',
      detail: `Confirmar escolha do ${this.plainSelected?.title}`,
    });
  }

  logout() {
    this.authService.clearAccessToken();
    this.router.navigate(['/login']);
  }
}
