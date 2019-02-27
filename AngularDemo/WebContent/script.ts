import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { Component } from "@angular/core";

@Component({
  selector: "joke",
  template: `
    <h1 bind-class.alert-primary="true" bind-class.alert="true">{{ _str }}</h1>
    <h1 [class.alert]="_str">{{ _str }}</h1>
    <h1 [ngClass]="_classes" role="alert">{{ _str }}</h1>
    <input type="text" [(ngModel)]="_str" [value]="_str" /><br />
    <input type="text" value="{{ _str }}" /><br />
    <input bind-disabled="_str" type="text" bind-value="_str" /><br />
  `
})
export class JokeComponent implements OnInit {
  public _str: string = "false";
  public _classes = {
    "alert-primary": true,
    alert: true
  };
}

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [JokeComponent],
  bootstrap: [JokeComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
