import { Watch } from 'react-loader-spinner';
export function WatchSmall() {
  <Watch
    height="200"
    width="200"
    radius="48"
    color="rgb(73, 203, 230)"
    ariaLabel="watch-loading"
    wrapperStyle={{ justifyContent: 'center' }}
    wrapperClassName=""
    visible={true}
  />;
}
export function WatchBig() {
  <Watch
    height="300"
    width="300"
    radius="48"
    color="rgb(73, 203, 230)"
    ariaLabel="watch-loading"
    wrapperStyle={{ justifyContent: 'center' }}
    wrapperClassName=""
    visible={true}
  />;
}
