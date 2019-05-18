import React from 'react';
import { render } from 'react-dom';
import { App } from './app/App';
import * as serviceWorker from './serviceWorker';
import { TidesServiceClient } from '@jjbubudi/protos-web/tides/api_grpc_web_pb';
import { PredictedTidesRequest, PredictedTidesResponse } from '@jjbubudi/protos-web/tides/api_pb';

const client = new TidesServiceClient(process.env.REACT_APP_DOMAIN!, {}, {});

function fetchPredictedTides(callback: (response: PredictedTidesResponse) => void): void {
  client.predictedTides(new PredictedTidesRequest(), {}, (err, response) => {
    if (!err) {
      callback(response);
    }
  });
}

render(<App fetchPredictedTides={fetchPredictedTides} />, document.getElementById('root'));
serviceWorker.unregister();
