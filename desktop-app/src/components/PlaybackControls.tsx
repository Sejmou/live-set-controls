import classNames from 'classnames';
import Button from './Button';
import { api } from '../server-connection';

type Props = {
  className?: string;
};

const { startPlayback, stopPlayback } = api;

const PlaybackControls = ({ className }: Props) => {
  return (
    <div className={classNames('flex gap-2', className)}>
      <Button label="Play" onClick={startPlayback} />
      <Button label="Pause" onClick={stopPlayback} />
    </div>
  );
};

export default PlaybackControls;
