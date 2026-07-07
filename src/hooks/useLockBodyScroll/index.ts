import { useId, useLayoutEffect } from 'react';

type BodyScrollLockState = {
    locks: Set<string>;
    originalBodyOverflow: string;
};

const SCROLL_LOCK_STATE_KEY = '__invoiceboxBodyScrollLockState';

function getState(): BodyScrollLockState {
    const global = globalThis as typeof globalThis & {
        [SCROLL_LOCK_STATE_KEY]?: BodyScrollLockState;
    };

    if (!global[SCROLL_LOCK_STATE_KEY]) {
        global[SCROLL_LOCK_STATE_KEY] = {
            locks: new Set<string>(),
            originalBodyOverflow: '',
        };
    }

    return global[SCROLL_LOCK_STATE_KEY];
}

function lockBodyScroll(lockId: string) {
    const state = getState();

    if (state.locks.size === 0) {
        state.originalBodyOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
    }

    state.locks.add(lockId);
}

function unlockBodyScroll(lockId: string) {
    const state = getState();

    if (!state.locks.delete(lockId)) {
        return;
    }

    if (state.locks.size === 0) {
        if (state.originalBodyOverflow) {
            document.body.style.overflow = state.originalBodyOverflow;
        } else {
            document.body.style.removeProperty('overflow');
        }
    }
}

export const useLockBodyScroll = (locked: boolean) => {
    const lockId = useId();

    useLayoutEffect(() => {
        if (!locked) {
            return undefined;
        }

        lockBodyScroll(lockId);

        return () => {
            unlockBodyScroll(lockId);
        };
    }, [locked, lockId]);
};
