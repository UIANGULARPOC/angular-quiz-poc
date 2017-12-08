import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule ,
		MatFormFieldModule ,
		MatInputModule ,
		MatProgressSpinnerModule,
		MatSelectModule,
		MatTabsModule } from '@angular/material';


@NgModule({

  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatTabsModule

  ],
  exports : [
  	MatButtonModule,
  	MatFormFieldModule,
  	MatInputModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatTabsModule
  ]
})

export class MaterialModule {}