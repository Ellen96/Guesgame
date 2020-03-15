import{NgModule}from'@angular/core';
import{MatButtonModule}from'@angular/material/button';
import {MatCommonModule, MatNativeDateModule} from '@angular/material/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule(
    {imports:[MatButtonModule,
    MatProgressBarModule,
    MatCommonModule,
    MatNativeDateModule],
    exports:[MatButtonModule,
    MatProgressBarModule,
    MatCommonModule,
    MatNativeDateModule]
})
export class MaterialModule{}