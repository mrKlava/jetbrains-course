import React, {useState} from 'react'
import { Btn } from '../../UI'

import './case-converter.scss'

function CaseConverter() {

    const [text, setText] = useState('')
    const handleChange = (e) => setText( e.target.value )

    const btns = [
        {
            btn: 'upper-case',
            click: () => setText( text.toUpperCase() ),
        },
        {
            btn: 'lower-case',
            click: () => setText( text.toLowerCase() ),
        },
        {
            btn: 'proper-case',
            click: () => {
                let words = text.split(' ')
        
                for (let i = 0; i < words.length; i++) {
                    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
                }
        
                let proper = words.join(' ');
        
                setText(proper)
            },
        },
        {
            btn: 'sentence-case',
            click: () => {
                let words = text.toLowerCase().split('.');
            
                for (let i = 0; i < words.length; i++) {
                    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
                }
            
                let sentence = words.join('. ');
            
                setText(sentence)
            },
        },
        {
            btn: 'save-text-file',
            click: () => {
                const fileName = prompt('Name of file?', 'Text');
            
                // Check if canceled / empty name / has name
                if (fileName === null) {
            
                    return console.log('canceled');
                } else if(fileName === '') {
                    alert('Please name the file');
            
                    return btns.click();
                } else {
                    let element = document.createElement('a');
                    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
                    element.setAttribute('download', fileName);
            
                    element.style.display = 'none';
                    document.body.appendChild(element);
            
                    element.click();
            
                    document.body.removeChild(element);
                }
            },
        },
    ]

    return (
        <div className='case-converter'>
            <div className="case-converter__title">Case Converter</div>
            <div className="case-converter__content">

                <textarea className="case-converter__content-textarea" name="" id="textarea" rows="20" value={text} onChange={handleChange}></textarea>
                
                <div className="case-converter__content-buttons">
                    {btns.map( (item, index) => {
                        return <Btn 
                                class={'btn btn-case'} 
                                id={item.btn} 
                                big={item.btn.replace(/-/g, ' ')} 
                                key={index} 
                                click={item.click}/>
                    })}
                </div>


            </div>
        </div>
    )
}

export default CaseConverter