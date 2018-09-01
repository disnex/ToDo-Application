import { NgModule } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material';

@NgModule({
    imports: [MatInputModule,MatDatepickerModule,MatFormFieldModule,MatDialogModule,MatButtonModule],
    exports: [MatInputModule,MatDatepickerModule,MatFormFieldModule,MatDialogModule,MatButtonModule],
})

export class MaterialModule {  }