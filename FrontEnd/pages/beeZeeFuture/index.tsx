import React, {FC} from 'react';
import Layout from 'components/global/layout';
import './styles.scss';

interface IProps {};

export const BeeZeeFuture: FC<IProps> = () => (
  <Layout title="BeeZeeFuture" description="This is the BeeZeeFuture Page">
    <div className="future-page">
      <p>
        This is the <strong>BeeZeeFuture</strong> page
      </p>
      <div className="about-page-image"></div>
    </div>
  </Layout>
);

export default BeeZeeFuture;
