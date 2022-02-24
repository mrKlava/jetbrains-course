import React from 'react'

import './case-converter.scss'

function CaseConverter() {



    return (
        <div>
            <div className="title">Case Converter</div>
            <textarea className="textarea" name="" id="textarea" rows="10"></textarea>
            
            <div className="buttons">
                <button className="btn" id="upper-case">Upper Case</button>
                <button className="btn" id="lower-case">Lower Case</button>
                <button className="btn" id="proper-case">Proper Case</button>
                <button className="btn" id="sentence-case">Sentence Case</button>
                <button className="btn" id="save-text-file">Save Text File</button>
            </div>
        </div>
    )
}

export default CaseConverter