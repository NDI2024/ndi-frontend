import Tetris from "data/tetris/components/Tetris";
import {Button} from "components/generic/button";

export const Page404 = () => {
    return (
        <div className="tetris py-6">
            <Tetris>
                {({
                      Gameboard,
                      PieceQueue,
                      points,
                      linesCleared,
                      state,
                      controller,
                      level,
                  }) => (
                    <div className="tetris-container">
                        <div className="mr-2">
                            {level <= 1 && (
                                <img src="/thermometer/thermometer1.png" alt="Niveau"/>
                            )}

                            {level > 1 && level <= 9 && (
                                <img src={`/thermometer/thermometer${level}.png`} alt="Niveau"/>
                            )}

                            {level >= 10 && (
                                <img src="/thermometer/thermometer10.png" alt="Niveau"/>
                            )}
                        </div>

                        <div>
                            <Gameboard />

                            <div className="tetris-results mt-1 text-pixel items-center">
                                <span className="ml-2">
                                    <span className="text-gray-300 mr-1">Points</span>
                                    <span>{points}</span>
                                </span>

                                <span className="ml-4">
                                    <span className="text-gray-300 mr-1">Lignes</span>
                                    <span>{linesCleared}</span>
                                </span>
                            </div>
                        </div>

                        <PieceQueue/>

                        {state === 'LOST' && (
                            <div className="tetris-game-over">
                                <h2 className="mb-4 text-pixel text-2xl">Game Over</h2>

                                <div className="tetris-ng-btn" onClick={controller.restart} />
                            </div>
                        )}
                    </div>
                )}
            </Tetris>
        </div>
    )
}