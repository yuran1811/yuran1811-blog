export default{name:"post",type:"document",title:"Post",fields:[{name:"title",title:"Title",type:"string"},{name:"desc",title:"Description",type:"string"},{name:"label",title:"Label",type:"string"},{name:"tags",title:"Tags",type:"string"},{name:"slug",title:"Slug",type:"slug",options:{source:"title"}},{name:"content",title:"Content",type:"markdown"},{name:"coverImage",title:"Cover Image",type:"image"},{name:"date",title:"Date",type:"datetime"},{name:"author",title:"Author",type:"reference",to:[{type:"author"}]}],preview:{select:{title:"title",author:"author.name",media:"coverImage"},prepare(e){const{author:t}=e;return{...e,subtitle:t&&`by ${t}`}}}};