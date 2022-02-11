import logo from './logo.svg';

import { Table } from 'antd';
import { useState, useEffect } from "react";
import 'antd/dist/antd.css';


function App() {
  const [global, setGlobal] = useState([]);
  const [data, setData] = useState();
  const [dataVN, setDataVN] = useState();

  useEffect(async () => {
    let xx = await fetch('https://api.covid19api.com/summary')
      .then(response => response.json());
    setData(xx.Countries);
    setGlobal(xx.Global);
  }, []);

  const columns = [
    {
      title: 'Country',
      dataIndex: 'Country'
    },
    {
      title: 'NewConfirmed',
      dataIndex: 'NewConfirmed'
    },
    {
      title: 'TotalConfirmed',
      dataIndex: 'TotalConfirmed'
    },
    {
      title: 'NewDeaths',
      dataIndex: 'NewDeaths'
    },
    {
      title: 'TotalDeaths',
      dataIndex: 'TotalDeaths'
    },
    {
      title: 'NewRecovered',
      dataIndex: 'NewRecovered'
    },
  ]

  const columns2 = [
    {
      title: 'rank',
      render: () => <p>Global</p>
    },
    {
      title: 'NewConfirmed',
      dataIndex: 'NewConfirmed'
    },
    {
      title: 'TotalConfirmed',
      dataIndex: 'TotalConfirmed'
    },
    {
      title: 'NewDeaths',
      dataIndex: 'NewDeaths'
    },
    {
      title: 'TotalDeaths',
      dataIndex: 'TotalDeaths'
    },
    {
      title: 'NewRecovered',
      dataIndex: 'NewRecovered'
    },
  ]
  if (data == undefined) {
    return (<></>)
  }
  else {
    return (
      <>
        <Table key={global.Date} rowKey={global.Date} columns={columns2} dataSource={[global]} />
        <Table key={data.ID} rowKey={data.ID} columns={columns} dataSource={data} />
      </>
    );
  }
}

export default App;
