import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import axios from 'axios';
import React from 'react';
import { AdvancedStatistics } from './components/AdvancedStatistics';
import { Boost } from './components/Boost';
import { HeaderMain } from './components/HeaderMain';
import { Layout } from './layout/Layout';
library.add(fab)
//<FontAwesomeIcon icon={['fab', 'apple']} />

function App() {
  const [shorts, setShorts ] = React.useState([]);
  const [input, setInput] = React.useState('');
  return (
    <Layout>
      <HeaderMain input={input} setInput={setInput} setShorts={setShorts}/>
      
      <AdvancedStatistics shorts={shorts}/>
      <Boost/>
    </Layout>
  );
}

export default App;
