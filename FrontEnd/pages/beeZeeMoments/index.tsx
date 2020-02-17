import React, {FC} from 'react';
import Layout from 'components/global/layout';
import './styles.scss';

interface IProps {};

export const BeeZeeMoments: FC<IProps> = () => (
  <Layout title="BeeZeeMoments" description="This is the BeeZeeMoments Page">
    <div className="moments-page">
      <p>
        This is the <strong>BeeZeeMoments</strong> page
        </p>
        <div className="about-page-image"></div>
    </div>
  </Layout>
);

export default BeeZeeMoments;
