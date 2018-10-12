import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'group-viewer',
	templateUrl: './group-viewer.component.html',
	styleUrls: ['./group-viewer.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupViewerComponent {
	@Input() title: String;

	constructor() {}
}
