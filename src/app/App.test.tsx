import React from 'react';
import { App } from './App';
import { shallow } from 'enzyme';
import { Tides } from '../tides/Tides';
import { PredictedTidesResponse } from '@jjbubudi/protos-web/tides/api_pb';
import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb';

it('should render without crashing', () => {
  const app = shallow(<App fetchPredictedTides={(_) => { }} />);
  const tides = app.find(Tides);
  expect(tides.props().predicted).toEqual([]);
});

it('should pass fetched tidal data to the Tides component', () => {
  const app = shallow(<App fetchPredictedTides={(callback) => {
    const response = new PredictedTidesResponse();
    response.setPredictionsList([
      createPrediction(new Date(1000), 2),
      createPrediction(new Date(2000), 3)
    ]);
    callback(response);
  }} />);

  const tides = app.find(Tides);
  expect(tides.props().predicted).toEqual(
    [
      {
        time: new Date(1000),
        meters: 2
      },
      {
        time: new Date(2000),
        meters: 3
      }
    ]
  );
});

function createPrediction(time: Date, meters: number): PredictedTidesResponse.Prediction {
  const timestamp = new Timestamp();
  timestamp.fromDate(time);

  const prediction = new PredictedTidesResponse.Prediction();
  prediction.setTime(timestamp);
  prediction.setMeters(meters);

  return prediction;
}
