import React from 'react';
import classNames from "classnames";

import './Navigation.scss';

export function Navigation({
    className,
    showUndoButton,
    onUndoMove,
    onOpenSettings
}) {
    return (
        <div className={classNames('navigation', className)}>
            <button className={classNames('navigation__button navigation__button--undo btn', {
                'btn--hidden': !showUndoButton
            })} onClick={onUndoMove}>Undo</button>
            <button className="navigation__button navigation__button--settings btn" onClick={onOpenSettings}>Settings</button>
        </div>
    )
}
