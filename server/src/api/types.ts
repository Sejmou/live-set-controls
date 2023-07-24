export interface ClientAction {
  name: ClientActionNames;
}

export type ClientActions = {
  startPlayback: () => void;
  stopPlayback: () => void;
};

export type ClientActionNames = keyof ClientActions;
