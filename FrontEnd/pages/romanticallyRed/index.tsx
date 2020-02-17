import React, { FC } from 'react';
import Layout from 'components/global/layout';
import './styles.scss';

interface IProps { };

export const RomanticallyRed: FC<IProps> = () => (
  <Layout title="red-designs" description="This is the RedDesigns Page">
    <div className="container">
  <div className="photo">
  <img src="static/images/BeeZeePics/RomanticallyRed/red1.jpg" />
  </div>
  <div className="info">info</div>
  <div className="tag">tag</div>
  <div className="comment">comment</div>
  <div className="album">album</div>
  <div className="rotate">rotate</div>
</div>
<div>
  <p>FETCH COMMENTS</p>
</div>
  </Layout>
);

export default RomanticallyRed;
