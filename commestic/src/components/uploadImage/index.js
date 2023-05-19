import React, { useState } from 'react'
import { toBase64 } from '../../constants/convertBase64';

export const Image = (props) => {
    const [image,setImage]=useState("");
    const readURL= () => {
        let input = e.target;
        if(input.files && input.files[0]){
            toBase64(input.files[0]).then((value) => {
                props.onClick(value);
                setImage(value)
            })
        }
    }
  return (
    <div>
    <input type="file" accept='image/' onChange={(e) => readURL(e)} />
    </div>
  )
}
