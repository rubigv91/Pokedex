import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PokefavoriteComponent } from '../pokefavorite/pokefavorite.component';

@Component({
  selector: 'app-favinfo',
  templateUrl: './favinfo.component.html',
  styleUrls: ['./favinfo.component.css']
})
export class FavinfoComponent {

  listSkills={} as any;
  listData={} as any;
  constructor( @Inject(MAT_DIALOG_DATA) public data:PokefavoriteComponent) {
    
    this.listSkills = data;
    console.log("lista de skills")
    console.log(this.listSkills.item);
  }

}
