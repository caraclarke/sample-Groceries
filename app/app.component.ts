import {Component} from "@angular/core";
import {User} from "./shared/user/user";

// @ - typescript decorator
// allows you to annotate typescript class or method with additional information
// metadata for component
@Component({
  selector: "my-app",
  template: "pages/login/login.html",
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class AppComponent {

  user: User;
  isLoggingIn = true;

  constructor() {
    this.user = new User();
  }

  submit() {
    console.log("youre using: " + this.user.email);
  }

  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}
