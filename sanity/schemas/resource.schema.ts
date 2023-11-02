import { Rule } from "postcss";

const schema={
  name:'resource',
  title:'Resource',
  type:'document',
  field:[
    {
      name:'title',
      title:'Title',
      type:'string',
      require,
      validation:(Rule:any)=>Rule.required()
    },
    {
      name:'slug',
      title:'slug',
      type:'slug',
      option:{source:'title'}
    },
    {
      name:'downloadLink',
      title:'Download Link',
      type:'url',
      validation:(Rule:any)=>Rule.required()
    },
    {
      name:'views',
      title:'Views',
      type:'number',
      initialvalue:0,
    },
    {
      name:'poster',
      title:'Poster',
      type:'image',
      validation:(Rule:any)=>Rule.required(),
      options:{
        hotspot:true,
      }
    },
    {
      name:'category',
      title:'Category',
      type:'string',
      validation:(Rule:any)=>Rule.required(),
      options:{
        list:['Next 13', 'Frontend', 'Backend', 'React-native', 'Full-stack','other']
      }
    }
  ]
}