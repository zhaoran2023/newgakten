'use client'
import { faker } from '@faker-js/faker/locale/en';

export function mockTreeData(options: { limits: any; labels: any; getRowData: any; }) {
  const { limits, labels, getRowData } = options;
  const depth = limits.length;
  const data: any[] = [];
  const mock = (list: any[], parentValue: string | undefined, layer = 0) => {
  const length = limits[layer];

    Array.from({ length }).forEach((_, index) => {
      const value = parentValue ? parentValue + '-' + (index + 1) : index + 1 + '';
      const children: any[] = [];
      const label = Array.isArray(labels) ? labels[layer] : labels;
      
      let row:{ label: any; value: string; children?: any[];} = {
        label: typeof label === 'function' ? label(layer, value, faker) : label + ' ' + value,
        value,
      };

      if (getRowData) {
        row = {
          ...row,
          ...getRowData(layer, value,parentValue)
        };
      }

      list.push(row);

      if (layer < depth - 1) {
        row.children = children;
        mock(children, value, layer + 1);
      }
    });
  };

  mock(data, '', 0);

  return data;
}