//@ts-nocheck
import React, { useEffect, useMemo, useState } from 'react';
import { useTypedSelector } from '../hooks/use-typed-selector';
import { useActions } from '../hooks/use-actions';
import Header from './Header';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';


const Graphs: React.FC = () => {
  const [data, setData] = useState<null | object>(null);

  const getDynamicData = useTypedSelector(({ addData }) => {
    return addData;
  });

  const getFileByName = (data: any, filedName: string) => {
    const getAttrs = data.map((row: any) => {
      const parseRow = JSON.parse(row);
      const getRows = parseRow.filter((item: any) => {
        if (item.filedName === filedName) {
          return true;
        }
        return false;
      });
      return getRows;
    });

    const getGraphData = getAttrs.map((item: any) => {
      return item[0];
    });
    return getGraphData;
  };

  const { stopTimer } = useActions();
  useEffect(() => {
    stopTimer(true);
  }, [stopTimer])

  useEffect(() => {
    if (getDynamicData.length > 0) {
      const filedNames = JSON.parse(getDynamicData[0]).map((item: any) => {
        return item.filedName;
      });
      const getAllRecords = filedNames.map((fieldName: any) => {
        const result: any = {};
        const fieldRows = getFileByName(getDynamicData, fieldName);
        result[fieldName] = fieldRows;
        return result;
      });
      setData(getAllRecords)
    }
  }, [getDynamicData]);

  const getDynamicGraph = useMemo(() => {
    let charts = null;
    if (data) {
      charts = [];
      for (let [,item] of Object.entries(data)) {
        for (let [key, value] of Object.entries(item)) {
          charts.push( <div key = {key}><ResponsiveContainer  width="100%" height={500}><AreaChart
            width={500}
            height={400}
            data={value}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}

          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="change" stroke="#8884d8" fill="#8884d8" />
          </AreaChart></ResponsiveContainer>
          <div className = "h1 text-center"> {item[key][0]['filedName']} Statistics </div>
          </div>)
        }
      }
    }
    return charts;

  }, [data])
  console.log(data);
  
  return (
    <div>
      <Header />
      <div>
        {getDynamicGraph}
      </div>
    </div>
  );
};

;

export default Graphs;