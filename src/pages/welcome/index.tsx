/*
 * @Author: xpy
 * @Description: 欢迎页
 * @Date: 2021-06-29 11:28:58
 * @LastEditTime: 2021-07-01 19:09:14
 */
import React, { useEffect, useState, useMemo } from 'react';
// css animation
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';
import { ITextyType, ITextyMode } from 'rc-texty/lib/TextyProps';
import { getType, getMode } from '../animationBasic/index';

import QueueAnim from 'rc-queue-anim';
import 'rc-queue-anim/assets/index.css';

import '../index.less';
import { connect } from 'umi';

interface Fcer {
  history: any;
  dispatch: any;
}

const welcome: React.FC<Fcer> = (props) => {
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
    console.log(`props`, props);
    props.dispatch({
      type: 'global/query',
      payload: {},
      cb: (rst: any) => {
        console.log(`rst`, rst);
      },
    });
    getIn();
  }, []);

  const getIn = () => {
    console.log(`getIngetIngetIngetIngetIngetIngetIn`);
    const _type: ITextyType = getType();
    const _mode: ITextyMode = getMode();
    setType(_type);
    setMode(_mode);
  };

  // 路由跳转
  const routerPush = () => {
    props.history.push('/aa');
  };

  return (
    <div className="welcome-warper">
      {/* 数组变更 */}
      <div className="welcome-title welcome-content" onClick={routerPush}>
        {getCount}
      </div>
      {/* 欢迎语 */}
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
          Hello
        </Texty>
      </div>
      {/* 边框收缩 */}
      <div className="welcome-border">
        <QueueAnim type="left" leaveReverse={true} duration={1000}>
          <div
            key="lefttop"
            className="welcome-border-content welcome-border-lefttop"
          ></div>
        </QueueAnim>

        <QueueAnim type="right" leaveReverse={true} duration={1000}>
          <div
            key="righttop"
            className="welcome-border-content welcome-border-righttop"
          ></div>
        </QueueAnim>

        <QueueAnim type="left" leaveReverse={true} duration={1000}>
          <div
            key="leftbottom"
            className="welcome-border-content welcome-border-leftbottom"
          ></div>
        </QueueAnim>

        <QueueAnim type="right" leaveReverse={true} duration={1000}>
          <div
            key="rightbottom"
            className="welcome-border-content welcome-border-rightbottom"
          ></div>
        </QueueAnim>
      </div>
    </div>
  );
};

export default connect((con: any) => {
  const { global, loading } = con;
  return {
    global,
    loading: loading.global,
  };
})(welcome);
