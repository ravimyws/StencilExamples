
export type FilterDefinition = {code:string,name:string};

export type FilterRow = {code:string,name:string,subFilters?:FilterRow[]};

export type SelectOptions = {value:string,label:string};

export class FilterModel {

  filterDef:FilterDefinition;
  filter:FilterRow;
  parent:FilterRow;
  disabled:boolean;
  selectedValues:SelectOptions[] = [];
  values:SelectOptions[] = [];
  index:number;

  constructor(filterDef:FilterDefinition,filter:FilterRow,parent:FilterRow,disabled=false,index=-1){
    this.filterDef = filterDef;
    this.filter = filter;
    this.parent = parent;
    this.disabled = disabled;
    this.index = index;
  }
}
