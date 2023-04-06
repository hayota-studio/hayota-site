import React from 'react';

import hayotaLady from '../../../assets/hayotalady.png';

import classes from './Contact.module.scss';

interface IProps {
  readonly onNevigateToMain: () => void;

}

const ContactView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  return (
    <>
      <section className={classes['container']}>
      <button onClick={props.onNevigateToMain} className={classes['button'] }><img src={hayotaLady} alt="logo" className={classes['hayotaLady']}/></button>

        <h1 className={classes['mainTitle']}>CONTACT</h1>
        <div className={classes['infoContainer']}>
          <h1>LET’S TALK</h1>
          <div className={classes['emailContainer']}>
            <p>DESIGN</p>
            <a href="mailto:shilohroyi@gmail.com">SHILOHROYI@GMAIL.COM</a>
          </div>
          <div className={classes['emailContainer']}>
            <p>WEB DEV</p>
            <a href="mailto:abamirbs11@gmail.com">ABAMIRBS11@GMAIL.COM</a>
            <a href="mailto:beargreenholtz@gmail.com">BEARGREENHOLTZ@GMAIL.COM</a>
          </div>
        </div>
      </section>
    </>
  );
};

ContactView.displayName = 'ContactView';
ContactView.defaultProps = {};

export default React.memo(ContactView);
