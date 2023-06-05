export interface Command {
  name: string;
}

export interface StartPlaybackCommand extends Command {
  name: 'startPlayback';
}

export interface StopPlaybackCommand extends Command {
  name: 'stopPlayback';
}

export interface ContinuePlaybackCommand extends Command {
  name: 'continuePlayback';
}
