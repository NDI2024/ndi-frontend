import React from 'react';
import { Game, init } from 'data/tetris/models/Game';
export const Context = React.createContext<Game>(init());
