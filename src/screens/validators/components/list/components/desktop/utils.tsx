import { Translate } from 'next-translate';
import React from 'react';

export const fetchColumns = (_t: Translate): {
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  width: number;
  component?: React.ReactNode;
  sortKey?: string;
  sort?: boolean;
}[] => {
  return ([
    {
      key: 'idx',
      width: 5,
    },
    {
      key: 'validator',
      sortKey: 'validator.name',
      width: 25,
      sort: true,
    },
    {
      key: 'votingPower',
      sortKey: 'votingPower',
      width: 30,
      sort: true,
    },
    {
      key: 'commission',
      sortKey: 'commission',
      align: 'right',
      width: 15,
      sort: true,
    },
    {
      key: 'condition',
      sortKey: 'condition',
      align: 'center',
      width: 15,
      sort: true,
    },
    {
      key: 'status',
      width: 10,
    },
  ]);
};
