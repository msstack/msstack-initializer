import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-entity-form',
  templateUrl: './entity-form.component.html',
  styleUrls: ['./entity-form.component.scss']
})
export class EntityFormComponent implements OnInit {
  constructor() {}

  public fieldName;
  public fieldType;

  public fieldTypes = [
    'array',
    'boolean',
    'integer',
    'null',
    'number',
    'object',
    'string'
  ];

  public entity = {
    name: '',
    fields: [],
    constraints: []
  };

  @Output() public submit = new EventEmitter<any>();

  public constraintTypes = [
    { key: 'Required', value: 'NOT_NULL', checked: false },
    { key: 'Unique', value: 'UNIQUE', checked: false },
    { key: 'Primary Key', value: 'PRIMARY_KEY', checked: false }
  ];

  public emit() {
    this.submit.emit(this.entity);
    this.entity = { name: '', fields: [], constraints: [] };
  }

  public addSelectedFieldType() {
    this.entity.fields = [
      ...this.entity.fields,
      {
        name: this.fieldName,
        type: this.fieldType,
        constraints: this.constraintTypes
          .filter(c => c.checked)
          .map(c => c.value)
      }
    ];
    this.fieldName = '';
    this.fieldType = '';
  }
  ngOnInit() {}
}
