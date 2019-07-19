import React from 'react';
import { Tides } from '../tides/Tides';
import { Title } from './Title';
import { AppLayout } from './AppLayout';
import { PredictedTidesResponse } from '@jjbubudi/protos-web/tides/api_pb';
import { format } from 'date-fns';

interface AppProps {
  fetchPredictedTides: (callback: (res: PredictedTidesResponse) => void) => void
}

interface AppState {
  currentDate: Date
  lastUpdateTime?: Date
  predicted: PredictedTidesResponse.Prediction[]
}

export class App extends React.Component<AppProps, AppState> {

  constructor(props: AppProps) {
    super(props);
    this.state = {
      currentDate: new Date(0),
      predicted: []
    };
  }

  componentDidMount() {
    this.setState(state => {
      return {
        ...state,
        currentDate: new Date()
      }
    });
    this.props.fetchPredictedTides(res => {
      const time = res.getTime();
      this.setState(state => {
        return {
          ...state,
          lastUpdateTime: (time) ? time.toDate() : undefined,
          predicted: res.getPredictionsList()
        };
      });
    });
  }

  render() {
    return (
      <AppLayout>
        <Title date={this.state.currentDate} />
        <Tides predicted={this.state.predicted.map((t) => {
          return {
            time: t.getTime()!.toDate(),
            meters: t.getMeters()
          };
        })} />
        {
          this.state.lastUpdateTime
            ? <span>Last updated at: {format(this.state.lastUpdateTime, 'MMMM Do, YYYY HH:mm')}</span>
            : undefined
        }
      </AppLayout>
    );
  }
}
