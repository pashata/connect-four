import React from 'react';
import classNames from "classnames";

import './Navigation.scss';

export function Navigation({
    className,
    hasWinner,
    onUndoMove,
    onOpenSettings
}) {
    return (
        <div className={classNames('navigation', className)}>
            {!hasWinner && (<button className="navigation__button btn" onClick={onUndoMove}>Undo</button>)}
            <button className="navigation__button btn" onClick={onOpenSettings}>Settings</button>
        </div>
    )
}
