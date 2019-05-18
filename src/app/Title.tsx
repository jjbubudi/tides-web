import React from 'react';
import { format } from 'date-fns';

interface TitleProps {
  date: Date
}

export const Title = (props: TitleProps) => {
  return <h2 style={{ textAlign: 'center' }}>{format(props.date, 'MMMM Do, YYYY HH:mm')}</h2>
}
