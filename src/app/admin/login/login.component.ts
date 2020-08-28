import {
  Component,
  OnInit,
  Input,
  Output,
  SimpleChanges,
  OnChanges,
} from "@angular/core";
import { GetAPIService } from "../services/get-api.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  items: any;
  pageOfItems: Array<any>;
  constructor(private configService: GetAPIService) {}
  showConfig() {
    this.configService
      .getDataUsers()
      // clone the data object, using its known Config shape
      .subscribe((data) => (this.items = data));
  }
  ngOnInit() {
    // an example array of 150 items to be paged
    this.showConfig();
    // this.items = Array(150)
    //   .fill(0)
    //   .map((x, i) => ({ id: i + 1, name: `Item ${i + 1}` }));
  }
  headElements = ['ID', 'User Name','Name', 'Email', 'Role Id', 'is Active','Sửa','Xóa'];
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }
}
