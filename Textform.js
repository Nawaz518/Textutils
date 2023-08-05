import React,{useState} from 'react';

export default function Textform(props) {
    const [text, setText] = useState("Type Here");
    const handleOnchange=(event)=>{
        console.log("triggered");
        setText(event.target.value);
    }
    const handleUp=()=>{
        console.log("changed to uppercase");
        let nt= text.toUpperCase();
        setText(nt);
        props.showalert("Converted to uppercase","Success !!");
    
    }
    const handleLow=()=>{
        console.log("changed to lower case");
        let n1=text.toLowerCase();
        setText(n1);
        props.showalert("Converted to lowercase","Success !!");
    
    }
    const handleclear=()=>{
        console.log("text cleared");
        let n2="";
        setText(n2);
        props.showalert("Text cleared","Success !!");
    }
    const handlevowel=()=>{
        let a =text;
    let vc = 0;
    for (let i = 0; i < a.length; i++) {
        if (text[i]==='a') {
            vc += 1;
        }
        if (text[i]==='e') {
            vc += 1;
        }
        if (text[i]==='i') {
            vc += 1;
        }
        if (text[i]==='o') {
            vc += 1;
        }
        if (text[i]==='u') {
            vc += 1;
        }
        if (text[i]==='A') {
            vc += 1;
        }
        if (text[i]==='I') {
            vc += 1;
        }
        if (text[i]==='O') {
            vc += 1;
        }
        if (text[i]==='U') {
            vc += 1;
        
        }
        if (text[i]==='E') {
            vc += 1;
        }
    }
    let b='';
    b=b+String(vc);
    setText(b);
    }
    const handleES=()=>{
        let nt=text.split(/[ ]+/);
        setText(nt.join(' '));
        props.showalert("Extra Spaces Removed","Success !!");
    
    }
    const handlecopy=()=>{
        console.log("copied");
        var tex=document.getElementById("exampleFormControlTextarea1");
        tex.select();
        navigator.clipboard.writeText(tex.value);
        props.showalert("Text copied","Success !!");
    }
    return (
    <div>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
        <div className="mb-3 " style={{color:props.mod==='dark'?'white':'black' }} >
    <h1>{props.heading}</h1>
     <textarea className="form-control" value={text} style={{backgroundColor:props.mod==='dark'?'#7b6831':'white', color:props.mode==='grey'?'white':'black' }} onChange={handleOnchange} id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUp} >Convert to Uppercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLow} >Convert to lowercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleclear} >Clear text</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handlevowel} >Count Vowels</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handlecopy} >Copy Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleES} >Remove ExtraSpacess</button>
<div className="container my-3" style={{color:props.mod==='dark'?'white':'black' }} >
<h1> Total summary</h1>
<p>
    Total words {text.split(" ").filter((element)=>{ return element.length!==0}).length} Total characters {text.length-text.split(" ").length +1}</p>
    <p>
    {0.008*text.split(" ").filter((element)=>{ return element.length!==0}).length} minutes to read. 
</p>
</div>

    </div>
  );
}
