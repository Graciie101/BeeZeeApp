import React, { FC } from 'react';
import Layout from 'components/global/layout';
import Link from 'next/link';
import './styles.scss';

interface IProps { };

export const Designs: FC<IProps> = () => (
  <Layout title="designs" description="This is the Designs Page">
    <div className = "designs-page">
    <p>
      BeeZee's growing range of design options is no secret. Feast your eyes on the possibilities that you, one day, can also choose to live in. From cute to hot, or pretty to elegant, the choice is yours. Have a look 🤗
      </p>
      <div className="grid">
      <Link href = "/pinklyCute">
        <a><img src="static/images/BeeZeePics/PinklyCute/PinklyCuteTheme.jpg" />
        </a></Link>

        <Link href ="/romanticallyRed">
        <a><img src="static/images/BeeZeePics/RomanticallyRed/RomanticallyRedTheme.jpg" />
        </a></Link>

        <Link href ="/blueishSwagg">
        <a><img src="static/images/BeeZeePics/BlueishSwagg/BlueishSwaggTheme.jpg" />
        </a></Link>

        <Link href ="/prettyYellow">
        <a><img src="static/images/BeeZeePics/PrettyYellow/PrettyYellowTheme.jpg" />
        </a></Link>
        
      </div>
      </div>
  </Layout>
);

export default Designs;
