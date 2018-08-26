<template>
  <div>hellow {{name}}</div>
</template>
<script>
export default {
  name:'hellow',
  props: {
    name:{
      type:String,
      required:true
    }
  },
  data(){
    return {

    }
  }
}
</script>

