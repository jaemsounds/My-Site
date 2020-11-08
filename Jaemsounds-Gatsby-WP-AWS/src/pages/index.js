import React from 'react';
import Layout from '../components/layout';
import MusicPlayer from '../components/MusicPlayer/MusicPlayer';
import TopContent from '../components/TopContent';
import Content from '../components/Content';
import MyGatsbyComponent from '../components/MailChimpForm';

const IndexPage = () => (
  <Layout>
    <TopContent />
    <MusicPlayer />
    <Content />
    <MyGatsbyComponent />
  </Layout>
);

export default IndexPage;
