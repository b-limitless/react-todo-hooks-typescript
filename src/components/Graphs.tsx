//@ts-nocheck
import React, { useEffect, useMemo, useState } from 'react';
import { useTypedSelector } from '../hooks/use-typed-selector';
import { useActions } from '../hooks/use-actions';
import Header from './Header';
import { getFileByName } from '../utils/functions';

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
            for (let [, item] of Object.entries(data)) {
                for (let [key, value] of Object.entries(item)) {
                   
                 
                    charts.push(<AreaChart
                    width={500}
                    height={400}
                    data={value}
                    
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="change" stroke="#8884d8" fill="#8884d8" />
                  </AreaChart>)
                }
            }
        }
        return charts;
        
    }, [data])

    const data1 = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];

      
    return (
        <div>
            <Header />
          <div>
          {getDynamicGraph}
        <AreaChart
          width={500}
          height={400}
          data={data1}
          
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart> 
     </div>
        </div>
    );
};

;

export default Graphs;