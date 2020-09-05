import { GetDataserviesService } from "./../../../services/dataservies/get-dataservies.service";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { User } from "src/app/admin/adduser/adduser.component";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  form = new User();
  constructor(private service: GetDataserviesService, public router: Router) {}
  a: any;
  name: any;
  email: any;
  chuyentrang() {
    // alert("ok");
    this.router.navigate(["client/part1"]);
  }
  ngOnInit(): void {
    this.a = JSON.parse(localStorage.getItem("currentUser"));
    this.form.name = this.a["name"];
    this.form.email = this.a["email"];
    this.form.roleId = this.a["roleId"];
    this.form.username = this.a["username"];
    this.form.avatar =
      this.a["avatar"] == null
        ? "https://www.jamf.com/jamf-nation/img/default-avatars/generic-user-purple.png"
        : this.a["avatar"];
    this.form.isActive = this.a["isActive"];

    console.log(this.a["name"]);
  }
  updateName(element) {
    this.name = element.value;
  }
  updateEmail(element) {
    this.email = element.value;
  }
  save() {
    var obj = { Name: this.name, Id: parseInt(this.a.id) };

    this.service.UpdateName(obj).subscribe((data) => {
      console.log(data);
      alert(JSON.stringify(data).toString());
    });
  }
}
