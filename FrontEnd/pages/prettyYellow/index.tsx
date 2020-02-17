import React, { FC } from 'react';
import Layout from 'components/global/layout';
import './styles.scss';

interface IProps { };

export const PrettyYellow: FC<IProps> = () => (
  <Layout title="yellow-designs" description="This is the YellowDesigns Page">
    <div className="container">
  <div className="photo">
  <img src="static/images/BeeZeePics/PrettyYellow/yellow1.jpg" />
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

export default PrettyYellow;
