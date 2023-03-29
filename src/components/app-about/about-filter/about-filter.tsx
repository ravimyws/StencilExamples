import { Component, Host, h, Prop, State, Event, EventEmitter } from '@stencil/core';
import { FilterModel, SelectOptions } from '../models';

@Component({
  tag: 'about-filter',
  styleUrl: 'about-filter.css',
  shadow: true,
})
export class AboutFilter {

  @Prop() filter:FilterModel;
  @Prop() subfilers:FilterModel[] = [];

  @State() values:SelectOptions[]=[];

  @Event() filterChange: EventEmitter<SelectOptions[]>;

  connectedCallback() {
    setTimeout(() => {
      this.values= [{value:'1',label:'one'},{value:'2',label:'two'},{value:'3',label:'three'}];
      this.filter.values = this.values;
    },1000);
  }

  handleChange(event: Event) {
    console.log('handleChange',(event.target as HTMLSelectElement).selectedOptions);
    const selectedValues =Array.from((event.target as HTMLSelectElement).selectedOptions).map((option)=>{return{value:option.value,label:option.label};});
    this.filterChange.emit(selectedValues);
  }

  render() {
    console.log('about-filter render');
    return (
      <Host>
        <label>{this.filter?.filter?.name}</label>
        <select onChange={this.handleChange.bind(this)} multiple>{
          this.values.map((op)=>{ return (<option value={op.value}>{op.label}</option>)})
          }</select>
          {this.subfilers.map((subfilter)=>{return (<about-sub-filter filter={subfilter}></about-sub-filter>)})}
        <slot></slot>
      </Host>
    );
  }

}
