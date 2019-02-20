import React from 'react';
import TestRenderer from 'react-test-renderer';
import {CamperTableContainer} from './CamperTableContainer';
import CamperTable from '../components/CamperTable';

const mockfetchCampersByPointType = jest.fn();

describe('CamperTableContainer', () => {
  const mockCampers = [
    {id: 1, username: 'tester1', recent: 99, allTime: 390},
    {id: 2, username: 'tester2', recent: 59, allTime: 790},
  ];
  const configRenderer = (fetching = true) =>
    TestRenderer.create(
      <CamperTableContainer
        fetching={fetching}
        fetchCampersByPointType={mockfetchCampersByPointType}
        campers={mockCampers}
      />,
    );
  const loadingRenderer = configRenderer();
  test('call fetchCampersByPointType when the component is mounted', () => {
    expect(mockfetchCampersByPointType).toBeCalledWith('recent');
  });

  test('render loading component when fetching is true', () => {
    const loadingInstance = loadingRenderer.root;
    expect(loadingInstance.findByType('p').children[0]).toEqual('Loading...');
  });

  test('render CamperTable when fetching is false', () => {
    const camperTableRenderer = configRenderer(false);
    const camperTableInstance = camperTableRenderer.root;
    expect(camperTableInstance.findByType(CamperTable).props).toEqual({
      campers: mockCampers,
    });
  });
});
