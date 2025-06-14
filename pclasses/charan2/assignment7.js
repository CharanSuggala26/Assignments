//problem1
let str="aaaabbababababbbbabababaaaa"
let obj={};
for(let i=0;i<str.length;i++)
{
  if(obj[str[i]]==undefined)
  {
    obj[str[i]]=1;
  }
  else
  {
    obj[str[i]]+=1;
  }
}
console.log(obj);



//problem2 Approch1
let sentence="I am an undergraduate from vnr vjiet"
let words=sentence.split(" ")
console.log("No.of words in the sentence: "+words.length)






//problem2 Approach2
class Len{
    constructor(sent){
        this.sent=sent;
    }
    getLent(){
        let count=0;
        for(let i=0;i<this.sent.length;i++)
        {
            if(this.sent[i]==' ')
            {
                count+=1;
            }
        }
        return count+1;
    }   
}
 
let l = new Len('I am sai charan guptha from vnr vjiet');
console.log("No.of Words in the given sentence: "+l.getLent())
  