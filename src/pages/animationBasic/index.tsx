/*
 * @Author: xpy
 * @Description: Configuration item of css animation
 * @Date: 2021-06-29 20:16:50
 * @LastEditTime: 2021-06-30 15:48:08
 */
import { ITextyType, ITextyMode } from 'rc-texty/lib/TextyProps';

const type: ITextyType[] = [
  'left',
  'right',
  'top',
  'bottom',
  'alpha',
  'scale',
  'scaleX',
  'scaleBig',
  'scaleY',
  'mask-bottom',
  'mask-top',
  'flash',
  'bounce',
  'swing',
  'swing-y',
  'swing-rotate',
];
const mode: ITextyMode[] = ['smooth', 'reverse', 'random', 'sync'];

const getType = (): ITextyType => {
  const Str: ITextyType = type[Math.floor(Math.random() * type.length)];
  return Str;
};
const getMode = (): ITextyMode => {
  const Str: ITextyMode = mode[Math.floor(Math.random() * mode.length)];
  return Str;
};

export { getType, getMode };
