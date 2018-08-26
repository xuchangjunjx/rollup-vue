<template>
  <button class="button"
          @click="emitClick"
          :class="classes()">
    <slot name="before"></slot>
    <span>{{text}}</span>
    <slot name="end"></slot>
  </button>
</template>
<script>
export default {
  name:'i-button',
  props: {
    text:{
      tyep:String
    },
    color:{
      type:String,
      validator: function (value) {
        return ['white', 'light', 'dark','black', 'text'].indexOf(value) !== -1
      }
    },
    type:{
      type:String,
      validator: function (value) {
        return ['primary', 'link', 'info','success', 'warning', 'danger'].indexOf(value) !== -1
      }
    },
    size:{
      type:String,
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1
      }
    },
    outline:{
      type:Boolean,
      default:function(){
        return false
      }
    },
    round:{
      type:Boolean,
      default:function(){
        return false
      }
    },
    loading:{
      type:Boolean,
      default:function(){
        return false
      }
    }
  },
  methods: {
    classes(){
      let classArr = [];
      if(this.color){
        classArr.push(this.color);
      }
      if(this.type){
        classArr.push(this.type);
      }
      if(this.size){
        classArr.push(this.size);
      }
      if(this.outline){
        classArr.push('outlined');
      }
      if(this.round){
        classArr.push('rounded');
      }
      if(this.loading){
        classArr.push('loading');
      }
      return classArr.map((el,index)=>{
        return 'is-'+el
      }).join(' ');
    },
    emitClick(event){
       this.$emit('click',event);
    }
   
  }
}
</script>

