import { Component, OnInit } from '@angular/core';
import hljs from 'highlight.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private model = {
    $schema: 'https://msstack.grydtech.com/schema.json',
    entities: [],
    events: [],
    requests: [],
    responses: [],
    contracts: []
  };

  public formEntity = {
    name: '',
    fields: []
  };

  public modelToJSON() {
    return JSON.stringify(this.model, null, 2);
  }

  public addEntity(entity) {
    this.model = { ...this.model, entities: [...this.model.entities, entity] };
  }

  ngOnInit(): void {
    hljs.initHighlightingOnLoad();
  }
}
