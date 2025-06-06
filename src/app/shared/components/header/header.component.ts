import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LogoComponent} from "./widgets/logo/logo.component";
import {ModeComponent} from "./widgets/mode/mode.component";
import {ProfileComponent} from "./widgets/profile/profile.component";
import {ToggleScreenComponent} from "./widgets/toggle-screen/toggle-screen.component";

@Component({
    selector: 'app-header',
    imports: [CommonModule, LogoComponent, ToggleScreenComponent, ModeComponent, ProfileComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
}
