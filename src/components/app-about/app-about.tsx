import { Component, Host, h, State, Listen } from '@stencil/core';
import { FilterModel, SelectOptions } from './models';

@Component({
  tag: 'app-about',
  styleUrl: 'app-about.css',
  shadow: true,
})
export class AppAbout {

  @State() filterModels:FilterModel[]=[];

  connectedCallback() {
    console.log('app-about connectedCallback');
    setTimeout(() => {

      const filterDef ={code:'LOCATION_FILTER',name:'Location'};
      const filtesMockData ={
        code:'p_pstate',
        name:'State',
        subFilters:[
          {
          code:'p_pcity',
          name:'City'
        },
        {
          code:'p_pzip',
          name:'Zip'
        },
        {
          code:'p_pworklocation',
          name:'Work Location'
        }
      ]
      }
      let filterModels:FilterModel[] = [];
      filterModels.push(new FilterModel(filterDef,filtesMockData,null));
      filtesMockData.subFilters.forEach((subFilter,i) => {
        filterModels.push(new FilterModel(filterDef,subFilter,filtesMockData,true,i));
      });
      this.filterModels = filterModels;
    }, 1000);
  }

  @Listen('filterChange')
  filterChangeHandler(event: CustomEvent<SelectOptions[]>) {
    console.log('filterChangeHandler',event.detail);
    if(event.detail.length>0){
        this.filterModels[1] = {...this.filterModels[1],disabled:false};
    }else{
      this.filterModels.slice(1).forEach(filterModel => {
        return {...filterModel,disabled:true}
      });
    }

    this.filterModels = [...this.filterModels];
  }

  @Listen('subFilterChange')
  subFilterChangeHandler(event: CustomEvent<{selectedValues:SelectOptions[],index:number}>) {
    console.log('subFilterChangeHandler',event.detail);
    const subFilters = this.filterModels.slice(1);
    if(event.detail.selectedValues.length>0){
      this.filterModels[event.detail.index+2] = {...subFilters[event.detail.index+1],disabled:false};

    }else{
      this.filterModels.slice(event.detail.index+1).forEach(filterModel => {
        return {...filterModel,disabled:true}
      });
    }

    this.filterModels = [...this.filterModels];
  }

  render() {
    console.log('app-about render');
    return (
      <Host>
        About Page
        <about-filter filter={this.filterModels[0]} subfilers={this.filterModels.slice(1)}></about-filter>
        <slot></slot>
      </Host>
    );
  }

}




