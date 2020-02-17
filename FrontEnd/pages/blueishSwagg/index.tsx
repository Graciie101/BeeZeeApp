import React, { FC } from 'react';
import Layout from 'components/global/layout';
import './styles.scss';

interface IProps { };

export const BlueishSwagg: FC<IProps> = () => (
  <Layout title="blue-designs" description="This is the BlueDesigns Page">
    <div className="container">
  <div className="photo">
  <img src="static/images/BeeZeePics/BlueishSwagg/blue1.jpg" />
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

export default BlueishSwagg;
