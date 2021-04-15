import React from 'react';

//Styles
import './ProgressBar.scss'

const ProgressBar = (props) => {
    const { bgcolor, completed , title} = props;
    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right',
        transition: 'width 1s ease-in-out',
    }

    return (
        <div className='container'>
            <div className='fill' style={fillerStyles}>
                <span className='label'>{`${title}`} {`${completed}%`}</span>
            </div>
        </div>
    )
}
export default ProgressBar;