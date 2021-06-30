/*
 * @Author: xpy
 * @Description: 欢迎页
 * @Date: 2021-06-29 11:28:58
 * @LastEditTime: 2021-06-30 15:48:21
 */
import React, { useEffect, useState, useMemo } from 'react';
// css animation
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';
import { ITextyType, ITextyMode } from 'rc-texty/lib/TextyProps';
import { getType, getMode } from '../animationBasic/index';
import '../index.less';

const welcome: React.FC = (props) => {
  const [type, setType] = useState<ITextyType>('top');
  const [mode, setMode] = useState<ITextyMode>('sync');
  const [count, setCount] = useState<number>(1);
  const getCount = useMemo(() => {
    return count ? (
      <Texty type={type} mode={mode}>
        {String(count)}
      </Texty>
    ) : null;
  }, [count]);

  useEffect(() => {
    getIn();
  }, []);

  const getIn = () => {
    console.log(`getIngetIngetIngetIngetIngetIngetIn`);
    const _type: ITextyType = getType();
    const _mode: ITextyMode = getMode();
    setType(_type);
    setMode(_mode);
  };

  return (
    <div className="welcome-warper">
      <div className="welcome-title">{getCount}</div>

      <div
        className="welcome-title"
        onClick={() =>
          setCount(() => {
            getIn();
            return count + 1;
          })
        }
      >
        <Texty type={type} mode={mode}>
          huanying11
        </Texty>
      </div>
    </div>
  );
};

export default welcome;
