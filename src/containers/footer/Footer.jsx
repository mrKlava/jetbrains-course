import React from 'react';

import './footer.scss';

function Footer(props) {
  return (
  	<div className='footer' id='footer'>
		<div className="container">
			<div className="footer__content">
				<div className="footer__content-text">
					{props.data.text}
					<a className='footer__content-link' href={props.data.link} target='_blank'>{props.data.linkText}</a>
				</div>			
			</div>
		</div>
  	</div>
  );
}

export default Footer;
