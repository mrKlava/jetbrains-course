import React, {useState, useEffect} from 'react';

import './hamburger.scss';

function Hamburger(props) {
    
    const [toggleHam, setToggleHam] = useState(false)

    const handleChange = e => e.toggleHam

    useEffect(() => {
        if (props.onChange) {
            props.onChange(toggleHam)
        }
    }, [toggleHam])
    

    // console.log(toggleHam)

    return (
        <div    className='hamburger'
                className={ !toggleHam ? 'hamburger' : 'hamburger active' }
                onClick={ ()=>setToggleHam(!toggleHam) }
                onChange={handleChange}
            >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
}

export default Hamburger;
