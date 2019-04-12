import { NgModule } from "@angular/core";
import { MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule, 
    MatSelectModule, 
    MatSidenavModule, 
    MatToolbarModule, 
    MatListModule, 
    MatTabsModule, 
    MatIconModule, 
    MatTableModule, 
    MatBadgeModule, 
    MatChipsModule, 
    MatCardModule,
    MatDividerModule,
    MatCheckboxModule,
    MatGridListModule,
    MatExpansionModule} from '@angular/material'
    
@NgModule({
    imports:[
        MatFormFieldModule, 
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatTabsModule,
        MatIconModule,
        MatTableModule,
        MatBadgeModule,
        MatChipsModule,
        MatCardModule,
        MatCheckboxModule,
        MatDividerModule,
        MatGridListModule,
        MatExpansionModule,
    ],
    exports:[
        MatFormFieldModule, 
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatTabsModule,
        MatIconModule,
        MatTableModule,
        MatBadgeModule,
        MatChipsModule,
        MatCardModule,
        MatCheckboxModule,
        MatDividerModule,
        MatGridListModule,
        MatExpansionModule,
    ]
})

export class MaterialModule{

}