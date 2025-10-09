import React, { useState } from 'react'
import QRCode from 'react-qr-code'

const QrGenerator = () => {
    const[text,setText] =useState<string>("");
    const[qrValue,setqrValue] = useState<string>("");

    // local handler function
    const handleClick =()=>{
        setqrValue(text);
        setText("");
    }
  return (
    <div>
      <label>Enter the Text</label>
      <input onChange={(e) => setText(e.target.value)} value={text} type="text" />
      <button onClick={handleClick}> Qr Generate</button>
      <QRCode value={qrValue} />
    </div>
  );
}

export default QrGenerator