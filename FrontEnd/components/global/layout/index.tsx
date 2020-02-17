import React from 'react';
import uuid from 'uuid/v4';
import { Layout, Menu } from 'antd';
import Link from 'next/link';
import Head from './head';
// import {CustomNProgress} from 'components';
import { compose } from 'recompose';
import { withRouter, RouterProps } from 'next/router';
import '../../../styles/main.scss';
//import Sider from 'antd/lib/layout/Sider';
//import SubMenu from 'antd/lib/menu/SubMenu';

const { Header, Content, Footer } = Layout;
const MenuItem = Menu.Item;

interface Props extends React.HTMLAttributes<any> {
  readonly children?: React.ReactNode;
  readonly description?: string;
  readonly ogImage?: string;
  readonly url?: string;
  readonly router?: RouterProps;
}

const activeClass = 'ant-menu-item-selected';

const MainLayout: React.SFC<Props> = ({
  title,
  description,
  ogImage,
  url,
  router,
  children,
}) => {
  const { asPath } = router;

  return (
    <>
      {/* <CustomNProgress /> */}
      <Head title={` | ${title}`} description={description} ogImage={ogImage} url={url}  />
      <Layout className="layout" style={{backgroundColor: '#fbc2eb'}}>
        <Header >
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >

            <MenuItem
              key={uuid()}
              className={asPath === '/home' ? activeClass : ''}
            >
              <Link href="/home">
                <a>Home</a>
              </Link>
            </MenuItem>


            <MenuItem
              key={uuid()}
              className={asPath === '/about' ? activeClass : ''}
            >
              <Link href="/about">
                <a>About Us</a>
              </Link>
            </MenuItem>

            <MenuItem
              key={uuid()}
              className={asPath === '/designs' ? activeClass : ''}
            >
              <Link href="/designs">
                <a>BeeZee Designs</a>
              </Link>
            </MenuItem>

            <MenuItem
              key={uuid()}
              className={asPath === '/BeeZeeMoments' ? activeClass : ''}
            >
              <Link href="/beeZeeMoments">
                <a>BeeZee Moments</a>
              </Link>
            </MenuItem>


            <MenuItem
              key={uuid()}
              className={asPath === '/BookUsNow' ? activeClass : ''}
            >
              <Link href="/bookUsNow">
                <a>Book Us Now</a>
              </Link>
            </MenuItem>

            <MenuItem
              key={uuid()}
              className={asPath === '/BeeZeeFuture' ? activeClass : ''}
            >
              <Link href="/beeZeeFuture">
                <a>BeeZee Future</a>
              </Link>
            </MenuItem>

            <MenuItem
              key={uuid()}
              className={asPath === '/posts' ? activeClass : ''}
            >
              <Link href="/posts">
                <a>Posts</a>
              </Link>
            </MenuItem>

            
      <MenuItem
        key={uuid()}
        className={asPath === '/course' ? activeClass : ''}
      >
        <Link href="/course">
          <a>Course</a>
        </Link>
      </MenuItem>
    
					
      <MenuItem
        key={uuid()}
        className={asPath === '/blogs' ? activeClass : ''}
      >
        <Link href="/blogs">
          <a>Blogs</a>
        </Link>
      </MenuItem>
    
					
      <MenuItem
        key={uuid()}
        className={asPath === '/student' ? activeClass : ''}
      >
        <Link href="/student">
          <a>Student</a>
        </Link>
      </MenuItem>

    


         

    
					{/* new-menu-item */}
          </Menu>
        </Header>
        <Content>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
           <div>

{/* STARTS HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
<Layout style={{backgroundColor: '#fbc2eb'}}>
{/* <Sider className = "sider" width={200} >
    <Menu
      mode="inline"
      //defaultSelectedKeys={['1']}
      //defaultOpenKeys={['sub1']}
      style={{ backgroundColor: "#fbc2eb"}}
    >
      <SubMenu

        key="sub1"
        title={
          <span>
            <Icon
              type='laptop'
            />
            BeeZee Designs
    </span>
        }
      >
        <Menu.Item key="1">
          <Link href = "/pinklyCute"><a> Pinkly Cute</a></Link>
          </Menu.Item>
        <Menu.Item key="2">
        <Link href = "/romanticallyRed"><a>Romatically Red</a></Link>
        </Menu.Item>
        <Menu.Item key="3">
        <Link href = "/blueishSwagg"><a>Blueish Swagg</a></Link>
        </Menu.Item>
        <Menu.Item key="4">
        <Link href = "/prettyYellow"><a>Pretty Yellow</a></Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu
        key="sub2"
        title={
          <span>
            <Icon type="laptop" />
            Book Us Now
    </span>
        }
      >
        <Menu.Item key="5">
          <Link href="/bookUsNow">
            <a>Available Designs</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="6">
          <Link href="/bookUsNow">
            <a>Feeling Unique</a>
          </Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu
        key="sub3"
        title={
          <span>
            <Icon type="notification" />
            Contact Us Today
    </span>
        }
      >
        <Menu.Item key="9">
          <Link href="https://www.facebook.com/beezeevents/?__tn__=%2Cd%2CP-R&eid=ARBlGmoDo0--htuPun1bjI_c1_0c5GS5NKLs6NaImG1t_cZPBLSkv0DOkROIhf_nIWhCEZXmI689ngnH">
            <a>Facebook</a></Link>
        </Menu.Item>
        <Menu.Item key="10">
          <Link href="https://twitter.com/EventsBeezee">
            <a>Twitter</a></Link>
        </Menu.Item>
        <Menu.Item key="11">
          <Link href="https://api.whatsapp.com/send?phone=+27729986845"><a>Whatsapp</a></Link>
        </Menu.Item>
        <Menu.Item key="12">
          <Link href="https://www.instagram.com/BeeZee_Events01/?hl=en"><a>Instagram</a></Link>
        </Menu.Item>
        <Menu.Item key="13">
          <Link href="https://www.linkedin.com/in/scola-grace-mukami-murote-447988182?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BSuEXSvjaSaefhtWnAbugtA%3D%3D">
            <a> Linkedin </a></Link>
        </Menu.Item>
      </SubMenu>
    </Menu>
  </Sider> */}
  <Content>

    {children}
  </Content>
</Layout>
</div>
<Footer style={{backgroundColor: '#fbc2eb'}}>
@{new Date().getFullYear()} BeeZee Events
</Footer>
</Content>
</Layout>
    </>
  );
}

export default compose<Props, Props>(withRouter)(MainLayout);
