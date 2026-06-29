    export default function MYencoder(){
    
    const URi = "https://mozilla.org/?x=шеллы";
    const encoded = encodeURI(URi);
    console.log(encoded);
    const decoded = decodeURI(encoded);
    console.log(decoded);

    return (
        <div>
      <p>Original: {URi}</p>
      <p>Encoded: {encoded}</p>
      <p>Decoded: {decoded}</p>
    </div>
    );
    
}