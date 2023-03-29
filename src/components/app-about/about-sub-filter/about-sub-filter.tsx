import { Component, Host, h, Prop, State, Event, EventEmitter } from '@stencil/core';
import { FilterModel, SelectOptions } from '../models';

@Component({
  tag: 'about-sub-filter',
  styleUrl: 'about-sub-filter.css',
  shadow: true,
})
export class AboutSubFilter {

  @Prop() filter:FilterModel;
  @State() values:SelectOptions[]=[];
  @Event() subFilterChange: EventEmitter<{selectedValues:SelectOptions[],index:number}>;
  connectedCallback() {
    setTimeout(() => {
      this.values= [{value:'1',label:'one'},{value:'2',label:'two'},{value:'3',label:'three'}];
      this.filter.values = this.values;
    },1000);
  }
  handleChange(event: Event) {
    console.log('handleChange',(event.target as HTMLSelectElement).selectedOptions);
    const selectedValues =Array.from((event.target as HTMLSelectElement).selectedOptions).map((option)=>{return{value:option.value,label:option.label};});
    this.subFilterChange.emit({selectedValues,index:this.filter.index});
  }
  render() {
    console.log('about-sub-filter render');
    return (
      <Host>
        {(this.filter.disabled?'Disabled':'Enabled')}
        <select onChange={this.handleChange.bind(this)} multiple>{
          this.values.map((op)=>{ return (<option value={op.value}>{op.label}</option>)})
          }</select>
        <slot></slot>
      </Host>
    );
  }

}
