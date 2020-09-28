var all_notes = [];
var checked_f =[];
new Vue({
  el:"#nots",
  data:{
    message:"",
    all_notes:all_notes,
    home:true,
    all_n:false,
    edit:false,
    editMessage:"",
    indx:"",
    val:"",
    del:false
  },
  methods:{
    addMessage(){
      all_notes.push(this.message)
    },
    editMsg(){
      console.log(this.indx)
      console.log(this.val)
      console.log(this.editMessage)
      all_notes[this.indx]=this.editMessage
      this.home=true
      this.all_n=false
      this.edit=false
    },
    editRadio(index){
      console.log(index)
      let valid = document.getElementsByClassName("rad")[index]
      if(valid.checked){
        checked_f.push(index)
      }
    },
    deli(){
      for(var i=0;i<checked_f.length;i++){
        let q = checked_f[i]
        delete all_notes[checked_f[i]]
        document.getElementsByClassName("notates")[q].classList.add('deli')
      }
      console.log(all_notes)
    }
  }
})
